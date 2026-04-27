import crypto from 'crypto';
import { pool } from '../../config/database.js';
import { AuditService } from '../auditService.js';

export class SecurityService {
  /**
   * Validate user security status
   * Checks account lockout, active status, etc.
   */
  static async validateUserSecurity(user, ip, userAgent) {
    // Check if account is active
    if (!user.is_active) {
      await AuditService.logLoginAttempt(user.email, ip, userAgent, false, user.id, 'Account deactivated');
      throw new SecurityError('Account is deactivated', 'ACCOUNT_DEACTIVATED');
    }

    // Check if account is locked
    if (user.locked_until && user.locked_until > new Date()) {
      await AuditService.logLoginAttempt(user.email, ip, userAgent, false, user.id, 'Account locked');
      throw new SecurityError(
        'Account is temporarily locked due to too many failed login attempts',
        'ACCOUNT_LOCKED',
        { lockedUntil: user.locked_until }
      );
    }

    // Check for suspicious login patterns (optional enhancement)
    await this._checkSuspiciousActivity(user, ip, userAgent);

    return true;
  }

  /**
   * Handle failed authentication attempt
   * Updates failed attempts and potentially locks account
   */
  static async handleFailedAuth(user, ip, userAgent) {
    const newFailedAttempts = (user.failed_login_attempts || 0) + 1;
    const maxAttempts = 5;
    
    let lockUntil = null;
    let shouldLock = false;

    if (newFailedAttempts >= maxAttempts) {
      // Lock account for 30 minutes after 5 failed attempts
      lockUntil = new Date(Date.now() + 30 * 60 * 1000);
      shouldLock = true;
    }

    await pool.query(
      'UPDATE admins SET failed_login_attempts = $1, locked_until = $2 WHERE id = $3',
      [newFailedAttempts, lockUntil, user.id]
    );

    await AuditService.logLoginAttempt(user.email, ip, userAgent, false, user.id, 'Invalid credentials');

    if (shouldLock) {
      await AuditService.logSecurityEvent(user.id, 'ACCOUNT_LOCKED', ip, userAgent, {
        failedAttempts: newFailedAttempts,
        lockDuration: '30 minutes'
      });
    }

    throw new SecurityError(
      'Invalid credentials',
      'INVALID_CREDENTIALS',
      {
        remainingAttempts: Math.max(0, maxAttempts - newFailedAttempts),
        accountLocked: shouldLock,
        lockedUntil: lockUntil
      }
    );
  }

  /**
   * Generate secure password reset token
   */
  static async generatePasswordResetToken(user) {
    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Store in password reset tokens table
    const tokenResult = await pool.query(
      'INSERT INTO password_reset_tokens (admin_id, token, expires_at) VALUES ($1, $2, $3) RETURNING id',
      [user.id, resetToken, expiresAt]
    );

    // Update admin record
    await pool.query(
      'UPDATE admins SET password_reset_token = $1, password_reset_expires = $2 WHERE id = $3',
      [resetToken, expiresAt, user.id]
    );

    if (process.env.NODE_ENV !== 'production') {
      console.log(`Password reset token for ${user.email}: ${resetToken}`);
    }

    return {
      token: resetToken,
      tokenId: tokenResult.rows[0].id,
      expiresAt
    };
  }

  /**
   * Validate password reset token
   */
  static async validatePasswordResetToken(token) {
    const result = await pool.query(
      'SELECT * FROM password_reset_tokens WHERE token = $1 AND used = false AND expires_at > NOW()',
      [token]
    );

    if (result.rows.length === 0) {
      throw new SecurityError('Invalid or expired reset token', 'INVALID_TOKEN');
    }

    const resetToken = result.rows[0];
    return {
      adminId: resetToken.admin_id,
      tokenId: resetToken.id,
      token: resetToken.token
    };
  }

  /**
   * Mark password reset token as used
   */
  static async markPasswordResetTokenUsed(tokenId) {
    await pool.query(
      'UPDATE password_reset_tokens SET used = true WHERE id = $1',
      [tokenId]
    );
  }

  /**
   * Generate CSRF token
   */
  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  /**
   * Validate CSRF token
   */
  static validateCSRFToken(token, sessionToken) {
    if (!token || !sessionToken) {
      return false;
    }
    
    // In production, you'd validate against stored session CSRF token
    // For now, basic length check
    return token.length === 64 && sessionToken.length === 64;
  }

  /**
   * Check for suspicious activity patterns
   * Advanced security monitoring
   */
  static async _checkSuspiciousActivity(user, ip, userAgent) {
    try {
      // Check for multiple recent failed attempts from this IP
      const recentFailures = await pool.query(`
        SELECT COUNT(*) as count 
        FROM audit_logs 
        WHERE ip_address = $1 
          AND action = 'LOGIN_ATTEMPT' 
          AND success = false 
          AND created_at > NOW() - INTERVAL '1 hour'
      `, [ip]);

      if (parseInt(recentFailures.rows[0].count) > 20) {
        await AuditService.logSecurityEvent(user.id, 'SUSPICIOUS_IP_ACTIVITY', ip, userAgent, {
          recentFailures: recentFailures.rows[0].count
        });
      }

      // Check for login from unusual geographic location (if geoIP data available)
      if (user.last_login_ip && user.last_login_ip !== ip) {
        await AuditService.logSecurityEvent(user.id, 'NEW_IP_LOCATION', ip, userAgent, {
          previousIp: user.last_login_ip,
          newIp: ip
        });
      }

      // Check for unusual user agent
      if (user.last_login_user_agent && user.last_login_user_agent !== userAgent) {
        await AuditService.logSecurityEvent(user.id, 'NEW_USER_AGENT', ip, userAgent, {
          previousUserAgent: user.last_login_user_agent,
          newUserAgent: userAgent
        });
      }

    } catch (error) {
      console.error('Suspicious activity check error:', error);
      // Don't throw error to avoid blocking legitimate logins
    }
  }

  /**
   * Generate secure API key
   */
  static generateAPIKey() {
    const prefix = 'tcp_';
    const key = crypto.randomBytes(32).toString('hex');
    return `${prefix}${key}`;
  }

  /**
   * Hash sensitive data for storage
   */
  static hashSensitiveData(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  /**
   * Validate password strength
   */
  static validatePasswordStrength(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const issues = [];
    if (password.length < minLength) issues.push(`Minimum ${minLength} characters`);
    if (!hasUpperCase) issues.push('At least one uppercase letter');
    if (!hasLowerCase) issues.push('At least one lowercase letter');
    if (!hasNumbers) issues.push('At least one number');
    if (!hasSpecialChar) issues.push('At least one special character');

    return {
      isValid: issues.length === 0,
      issues,
      strength: this._calculatePasswordStrength(password)
    };
  }

  /**
   * Calculate password strength score
   */
  static _calculatePasswordStrength(password) {
    let score = 0;
    
    // Length bonus
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    
    // Character variety bonus
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    
    // Pattern penalty
    if (/(.)\1{2,}/.test(password)) score -= 1; // Repeated characters
    if (/123|abc|qwer/i.test(password)) score -= 1; // Common patterns
    
    return Math.max(0, Math.min(5, score));
  }

  /**
   * Log security events
   */
  static async logSecurityEvent(userId, eventType, ip, userAgent, details = {}) {
    await AuditService.log({
      adminId: userId,
      action: `SECURITY_${eventType}`,
      resource: 'security',
      details,
      ipAddress: ip,
      userAgent,
      success: true
    });
  }
}

export class SecurityError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'SecurityError';
    this.code = code;
    this.details = details;
  }
}
