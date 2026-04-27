import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { pool } from '../../config/database.js';
import { AuditService } from '../auditService.js';
import { SessionService } from './SessionService.js';
import { RBACService } from '../rbacService.js';
import { SecurityService } from './SecurityService.js';

export class AuthService {
  /**
   * Main authentication orchestrator
   * Coordinates all auth-related services with clean boundaries
   */
  static async authenticate(credentials, context) {
    const { email, password } = credentials;
    const { ip, userAgent } = context;

    try {
      // Step 1: Input validation (handled by middleware)
      
      // Step 2: Rate limiting check (handled by middleware)
      
      // Step 3: User lookup
      const user = await this._findUserByEmail(email);
      if (!user) {
        await AuditService.logLoginAttempt(email, ip, userAgent, false, null, 'Invalid credentials');
        throw new AuthError('Invalid credentials', 'USER_NOT_FOUND');
      }

      // Step 4: Security checks
      await SecurityService.validateUserSecurity(user, ip, userAgent);

      // Step 5: Password verification
      const isValidPassword = await this._verifyPassword(password, user.password_hash);
      if (!isValidPassword) {
        await SecurityService.handleFailedAuth(user, ip, userAgent);
        throw new AuthError('Invalid credentials', 'INVALID_PASSWORD');
      }

      // Step 6: MFA check
      const mfaResult = await this._handleMFA(user, context);
      if (mfaResult.requiresMFA) {
        return mfaResult;
      }

      // Step 7: Create session and complete login
      const session = await SessionService.createSession(user, context);
      const permissions = await RBACService.getUserPermissions(user.id);

      // Step 8: Success audit and cleanup
      await this._completeSuccessfulLogin(user, ip, userAgent);

      return {
        success: true,
        user: this._sanitizeUser(user),
        session,
        permissions
      };

    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      console.error('Authentication error:', error);
      throw new AuthError('Authentication failed', 'INTERNAL_ERROR');
    }
  }

  /**
   * Handle MFA verification
   */
  static async verifyMFA(userId, code, context) {
    const { ip, userAgent } = context;

    try {
      const user = await this._findUserById(userId);
      if (!user || !user.mfa_enabled) {
        await AuditService.logMfaAttempt(userId, 'VERIFY_FAILED', ip, userAgent, false, 'MFA not enabled');
        throw new AuthError('MFA verification failed', 'MFA_NOT_ENABLED');
      }

      const isValidCode = await this._verifyMFACode(user.mfa_secret, code);
      if (!isValidCode) {
        await AuditService.logMfaAttempt(userId, 'VERIFY_FAILED', ip, userAgent, false, 'Invalid code');
        throw new AuthError('Invalid verification code', 'INVALID_MFA_CODE');
      }

      // Complete login with MFA
      const session = await SessionService.createSession(user, context);
      const permissions = await RBACService.getUserPermissions(user.id);

      await AuditService.logMfaAttempt(userId, 'VERIFY_SUCCESS', ip, userAgent, true);

      return {
        success: true,
        user: this._sanitizeUser(user),
        session,
        permissions
      };

    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      console.error('MFA verification error:', error);
      throw new AuthError('MFA verification failed', 'INTERNAL_ERROR');
    }
  }

  /**
   * Password reset request
   */
  static async requestPasswordReset(email, context) {
    const { ip, userAgent } = context;

    try {
      const user = await this._findUserByEmail(email);
      
      // Always return success to prevent user enumeration
      if (!user) {
        await AuditService.logPasswordReset(null, ip, userAgent, false, 'User not found');
        return { success: true, message: 'If an account exists, a reset link has been sent.' };
      }

      const resetToken = await SecurityService.generatePasswordResetToken(user);
      
      await AuditService.logPasswordReset(user.id, ip, userAgent, true);

      return {
        success: true,
        message: 'If an account exists, a reset link has been sent.',
        ...(process.env.NODE_ENV !== 'production' && { 
          data: { resetToken: resetToken.token }
        })
      };

    } catch (error) {
      console.error('Password reset request error:', error);
      throw new AuthError('Password reset request failed', 'INTERNAL_ERROR');
    }
  }

  /**
   * Reset password with token
   */
  static async resetPassword(token, newPassword, context) {
    const { ip, userAgent } = context;

    try {
      const resetData = await SecurityService.validatePasswordResetToken(token);
      const user = await this._findUserById(resetData.adminId);

      if (!user) {
        throw new AuthError('Invalid reset token', 'INVALID_TOKEN');
      }

      // Hash new password
      const passwordHash = await bcrypt.hash(newPassword, 12);

      // Update password and invalidate sessions
      await this._updateUserPassword(user.id, passwordHash);
      await SessionService.invalidateAllUserSessions(user.id);
      await SecurityService.markPasswordResetTokenUsed(resetData.tokenId);

      await AuditService.logPasswordReset(user.id, ip, userAgent, true);

      return { success: true, message: 'Password reset successfully' };

    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      console.error('Password reset error:', error);
      throw new AuthError('Password reset failed', 'INTERNAL_ERROR');
    }
  }

  // Private helper methods

  static async _findUserByEmail(email) {
    const result = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    return result.rows[0] || null;
  }

  static async _findUserById(id) {
    const result = await pool.query('SELECT * FROM admins WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  static async _verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  static async _verifyMFACode(secret, code) {
    // In production: return otplib.authenticator.verify({ token: code, secret });
    return code === '123456'; // Demo code
  }

  static async _handleMFA(user, context) {
    if (user.mfa_enabled) {
      const pendingSession = await SessionService.createPendingMFASession(user, context);
      await AuditService.logMfaAttempt(user.id, 'REQUIRED', context.ip, context.userAgent, true);
      
      return {
        success: true,
        requiresMFA: true,
        mfaSessionId: pendingSession.id,
        userId: user.id
      };
    }
    return null;
  }

  static async _completeSuccessfulLogin(user, ip, userAgent) {
    await pool.query(
      `UPDATE admins 
       SET last_login = NOW(), 
           last_login_ip = $1, 
           failed_login_attempts = 0, 
           locked_until = NULL 
       WHERE id = $2`,
      [ip, user.id]
    );

    await AuditService.logLoginAttempt(user.email, ip, userAgent, true, user.id);
  }

  static async _updateUserPassword(userId, passwordHash) {
    await pool.query(
      `UPDATE admins 
       SET password_hash = $1, 
           password_reset_token = NULL, 
           password_reset_expires = NULL,
           failed_login_attempts = 0,
           locked_until = NULL,
           updated_at = NOW()
       WHERE id = $2`,
      [passwordHash, userId]
    );
  }

  static _sanitizeUser(user) {
    const { 
      password_hash, 
      mfa_secret, 
      password_reset_token, 
      password_reset_expires,
      ...sanitized 
    } = user;
    return sanitized;
  }
}

export class AuthError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'AuthError';
    this.code = code;
  }
}
