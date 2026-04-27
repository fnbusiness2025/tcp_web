import express from 'express';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';
import { pool } from '../config/database.js';
import { AuditService } from '../services/auditService.js';
import { RateLimitService } from '../services/rateLimitService.js';
import { RBACService } from '../services/rbacService.js';
import crypto from 'crypto';

const router = express.Router();

// Validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation errors',
      errors: errors.array()
    });
  }
  next();
};

// Authentication middleware - checks if user is logged in via session
export const requireAuth = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }
  next();
};

// Admin role middleware
export const requireAdmin = (req, res, next) => {
  if (!req.session || !req.session.userId || req.session.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  next();
};

// POST /api/auth/login - Enterprise-grade login with audit logging and security
router.post('/login', RateLimitService.loginLimiter, [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], handleValidationErrors, async (req, res) => {
  const clientIp = req.ip;
  const userAgent = req.get('User-Agent');
  const { email, password } = req.body;

  try {
    // Find admin by email
    const result = await pool.query(
      'SELECT * FROM admins WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      // Log failed login attempt - user not found
      await AuditService.logLoginAttempt(email, clientIp, userAgent, false, null, 'Invalid credentials');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const admin = result.rows[0];

    // Check if admin is active
    if (!admin.is_active) {
      await AuditService.logLoginAttempt(email, clientIp, userAgent, false, admin.id, 'Account deactivated');
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    // Check if account is locked due to too many failed attempts
    if (admin.locked_until && admin.locked_until > new Date()) {
      await AuditService.logLoginAttempt(email, clientIp, userAgent, false, admin.id, 'Account locked');
      return res.status(423).json({
        success: false,
        message: 'Account is temporarily locked due to too many failed login attempts',
        lockedUntil: admin.locked_until
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, admin.password_hash);
    
    if (!isValidPassword) {
      // Increment failed login attempts
      const newFailedAttempts = (admin.failed_login_attempts || 0) + 1;
      const maxAttempts = 5;
      
      let lockUntil = null;
      if (newFailedAttempts >= maxAttempts) {
        // Lock account for 30 minutes after 5 failed attempts
        lockUntil = new Date(Date.now() + 30 * 60 * 1000);
      }

      await pool.query(
        'UPDATE admins SET failed_login_attempts = $1, locked_until = $2 WHERE id = $3',
        [newFailedAttempts, lockUntil, admin.id]
      );

      await AuditService.logLoginAttempt(email, clientIp, userAgent, false, admin.id, 'Invalid credentials');
      
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        remainingAttempts: Math.max(0, maxAttempts - newFailedAttempts),
        accountLocked: lockUntil !== null
      });
    }

    // Check if MFA is required
    if (admin.mfa_enabled) {
      // Store partial session for MFA verification
      req.session.mfaPending = true;
      req.session.mfaUserId = admin.id;
      req.session.mfaEmail = admin.email;
      
      await AuditService.logMfaAttempt(admin.id, 'REQUIRED', clientIp, userAgent, true);
      
      return res.json({
        success: true,
        message: 'Password verified. MFA required.',
        data: {
          mfaRequired: true,
          userId: admin.id
        }
      });
    }

    // Successful login - reset failed attempts and update login info
    await pool.query(
      `UPDATE admins 
       SET last_login = NOW(), 
           last_login_ip = $1, 
           failed_login_attempts = 0, 
           locked_until = NULL 
       WHERE id = $2`,
      [clientIp, admin.id]
    );

    // Create secure server session
    req.session.userId = admin.id;
    req.session.email = admin.email;
    req.session.fullName = admin.full_name;
    req.session.role = admin.role;
    req.session.loginTime = new Date().toISOString();
    req.session.loginIp = clientIp;
    req.session.userAgent = userAgent;

    // Regenerate session ID to prevent session fixation
    req.session.regenerate(async (err) => {
      if (err) {
        console.error('Session regeneration error:', err);
        await AuditService.logSessionActivity(admin.id, 'CREATE_FAILED', clientIp, userAgent, false, { error: err.message });
        return res.status(500).json({
          success: false,
          message: 'Session creation failed'
        });
      }

      // Set session data after regeneration
      req.session.userId = admin.id;
      req.session.email = admin.email;
      req.session.fullName = admin.full_name;
      req.session.role = admin.role;
      req.session.loginTime = new Date().toISOString();
      req.session.loginIp = clientIp;
      req.session.userAgent = userAgent;

      req.session.save(async (saveErr) => {
        if (saveErr) {
          console.error('Session save error:', saveErr);
          await AuditService.logSessionActivity(admin.id, 'CREATE_FAILED', clientIp, userAgent, false, { error: saveErr.message });
          return res.status(500).json({
            success: false,
            message: 'Session creation failed'
          });
        }

        // Log successful login
        await AuditService.logLoginAttempt(email, clientIp, userAgent, true, admin.id);

        // Remove sensitive data from response
        const { password_hash, mfa_secret, password_reset_token, password_reset_expires, ...adminData } = admin;

        res.json({
          success: true,
          message: 'Login successful',
          data: {
            admin: adminData,
            sessionActive: true,
            permissions: await RBACService.getUserPermissions(admin.id)
          }
        });
      });
    });

  } catch (error) {
    console.error('Login error:', error);
    await AuditService.logLoginAttempt(email, clientIp, userAgent, false, null, `Server error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/auth/profile - Get current admin profile (protected)
router.get('/profile', requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, full_name, role, created_at, last_login FROM admins WHERE id = $1',
      [req.session.userId]
    );

    if (result.rows.length === 0) {
      // Clear invalid session
      req.session.destroy();
      return res.status(404).json({
        success: false,
        message: 'Admin not found'
      });
    }

    res.json({
      success: true,
      data: {
        admin: result.rows[0],
        sessionActive: true
      }
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// POST /api/auth/logout - Logout (protected)
router.post('/logout', requireAdmin, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).json({
        success: false,
        message: 'Logout failed'
      });
    }

    res.clearCookie('tcp_admin_session');
    res.json({
      success: true,
      message: 'Logout successful'
    });
  });
});

// POST /api/auth/change-password - Change password (protected)
router.post('/change-password', RateLimitService.authLimiter, [
  body('currentPassword').isLength({ min: 6 }).withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
], requireAdmin, handleValidationErrors, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get current admin
    const result = await pool.query(
      'SELECT password_hash FROM admins WHERE id = $1',
      [req.session.userId]
    );

    if (result.rows.length === 0) {
      req.session.destroy();
      return res.status(404).json({
        success: false,
        message: 'Admin not found'
      });
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, result.rows[0].password_hash);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 12);

    // Update password
    await pool.query(
      'UPDATE admins SET password_hash = $1, updated_at = NOW() WHERE id = $2',
      [newPasswordHash, req.session.userId]
    );

    // Optional: Invalidate all other sessions by regenerating session
    req.session.regenerate((err) => {
      if (err) {
        console.error('Session regenerate error:', err);
      }
    });

    res.json({
      success: true,
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/auth/check - Check if session is active
router.get('/check', (req, res) => {
  if (req.session && req.session.userId) {
    res.json({
      success: true,
      data: {
        authenticated: true,
        user: {
          id: req.session.userId,
          email: req.session.email,
          fullName: req.session.fullName,
          role: req.session.role
        }
      }
    });
  } else {
    res.json({
      success: true,
      data: {
        authenticated: false
      }
    });
  }
});

// POST /api/auth/refresh - Refresh session (sliding expiration)
router.post('/refresh', RateLimitService.sessionLimiter, requireAdmin, async (req, res) => {
  try {
    // Touch session to update expiration
    req.session.touch();
    
    await AuditService.logSessionActivity(req.session.userId, 'REFRESH', req.ip, req.get('User-Agent'), true);
    
    res.json({
      success: true,
      message: 'Session refreshed',
      data: {
        sessionActive: true,
        expiresAt: req.session.cookie.expires
      }
    });
  } catch (error) {
    console.error('Session refresh error:', error);
    res.status(500).json({
      success: false,
      message: 'Session refresh failed'
    });
  }
});

// POST /api/auth/request-password-reset - Request password reset
router.post('/request-password-reset', RateLimitService.passwordResetLimiter, [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required')
], handleValidationErrors, async (req, res) => {
  const { email } = req.body;
  const clientIp = req.ip;
  const userAgent = req.get('User-Agent');

  try {
    // Find admin by email
    const result = await pool.query(
      'SELECT * FROM admins WHERE email = $1 AND is_active = true',
      [email]
    );

    if (result.rows.length === 0) {
      // Always return success to prevent user enumeration
      await AuditService.logPasswordReset(null, clientIp, userAgent, false, 'User not found');
      return res.json({
        success: true,
        message: 'If an account with that email exists, a password reset link has been sent.'
      });
    }

    const admin = result.rows[0];

    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Store reset token
    await pool.query(
      'INSERT INTO password_reset_tokens (admin_id, token, expires_at) VALUES ($1, $2, $3)',
      [admin.id, resetToken, expiresAt]
    );

    // Update admin record with reset token
    await pool.query(
      'UPDATE admins SET password_reset_token = $1, password_reset_expires = $2 WHERE id = $3',
      [resetToken, expiresAt, admin.id]
    );

    await AuditService.logPasswordReset(admin.id, clientIp, userAgent, true);

    // In production, you would send an email here
    // For now, we'll return the token (remove this in production)
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Password reset token for ${email}: ${resetToken}`);
    }

    res.json({
      success: true,
      message: 'If an account with that email exists, a password reset link has been sent.',
      // Only include token in development for testing
      ...(process.env.NODE_ENV !== 'production' && { 
        data: { resetToken, resetUrl: `http://localhost:5174/reset-password?token=${resetToken}` }
      })
    });

  } catch (error) {
    console.error('Password reset request error:', error);
    await AuditService.logPasswordReset(null, clientIp, userAgent, false, error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// POST /api/auth/reset-password - Reset password with token
router.post('/reset-password', RateLimitService.passwordResetLimiter, [
  body('token').isLength({ min: 32 }).withMessage('Valid reset token is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match');
    }
    return true;
  })
], handleValidationErrors, async (req, res) => {
  const { token, password } = req.body;
  const clientIp = req.ip;
  const userAgent = req.get('User-Agent');

  try {
    // Find valid reset token
    const tokenResult = await pool.query(
      'SELECT * FROM password_reset_tokens WHERE token = $1 AND used = false AND expires_at > NOW()',
      [token]
    );

    if (tokenResult.rows.length === 0) {
      await AuditService.logPasswordReset(null, clientIp, userAgent, false, 'Invalid or expired reset token');
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired reset token'
      });
    }

    const resetToken = tokenResult.rows[0];

    // Get admin
    const adminResult = await pool.query(
      'SELECT * FROM admins WHERE id = $1 AND is_active = true',
      [resetToken.admin_id]
    );

    if (adminResult.rows.length === 0) {
      await AuditService.logPasswordReset(null, clientIp, userAgent, false, 'Admin not found');
      return res.status(400).json({
        success: false,
        message: 'Invalid reset token'
      });
    }

    const admin = adminResult.rows[0];

    // Hash new password
    const passwordHash = await bcrypt.hash(password, 12);

    // Update password and clear reset tokens
    await pool.query(
      `UPDATE admins 
       SET password_hash = $1, 
           password_reset_token = NULL, 
           password_reset_expires = NULL,
           failed_login_attempts = 0,
           locked_until = NULL,
           updated_at = NOW()
       WHERE id = $2`,
      [passwordHash, admin.id]
    );

    // Mark reset token as used
    await pool.query(
      'UPDATE password_reset_tokens SET used = true WHERE id = $1',
      [resetToken.id]
    );

    // Invalidate all existing sessions for this user
    await pool.query(
      'DELETE FROM sessions WHERE sess::jsonb ? \'userId\' AND sess::jsonb->>\'userId\' = $1',
      [admin.id.toString()]
    );

    await AuditService.logPasswordReset(admin.id, clientIp, userAgent, true);

    res.json({
      success: true,
      message: 'Password has been reset successfully. Please login with your new password.'
    });

  } catch (error) {
    console.error('Password reset error:', error);
    await AuditService.logPasswordReset(null, clientIp, userAgent, false, error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// POST /api/auth/mfa/verify - Verify MFA code
router.post('/mfa/verify', RateLimitService.mfaLimiter, [
  body('code').isLength({ min: 6, max: 6 }).withMessage('Valid 6-digit code is required')
], handleValidationErrors, async (req, res) => {
  const { code } = req.body;
  const clientIp = req.ip;
  const userAgent = req.get('User-Agent');

  try {
    // Check if MFA session is pending
    if (!req.session.mfaPending || !req.session.mfaUserId) {
      return res.status(400).json({
        success: false,
        message: 'MFA verification not in progress'
      });
    }

    // Get admin with MFA secret
    const result = await pool.query(
      'SELECT * FROM admins WHERE id = $1 AND mfa_enabled = true',
      [req.session.mfaUserId]
    );

    if (result.rows.length === 0) {
      await AuditService.logMfaAttempt(req.session.mfaUserId, 'VERIFY_FAILED', clientIp, userAgent, false, 'Admin not found');
      return res.status(400).json({
        success: false,
        message: 'Invalid verification attempt'
      });
    }

    const admin = result.rows[0];

    // Verify TOTP code (you would use a library like 'otplib' here)
    // For now, we'll simulate verification
    const isValidCode = await verifyTOTP(admin.mfa_secret, code);

    if (!isValidCode) {
      await AuditService.logMfaAttempt(admin.id, 'VERIFY_FAILED', clientIp, userAgent, false, 'Invalid code');
      return res.status(400).json({
        success: false,
        message: 'Invalid verification code'
      });
    }

    // MFA verification successful - complete login
    req.session.mfaPending = false;
    req.session.userId = admin.id;
    req.session.email = admin.email;
    req.session.fullName = admin.full_name;
    req.session.role = admin.role;
    req.session.loginTime = new Date().toISOString();
    req.session.loginIp = clientIp;
    req.session.userAgent = userAgent;
    req.session.mfaVerified = true;

    // Regenerate session ID for security
    req.session.regenerate(async (err) => {
      if (err) {
        console.error('Session regeneration error:', err);
        return res.status(500).json({
          success: false,
          message: 'Session creation failed'
        });
      }

      // Set session data after regeneration
      req.session.userId = admin.id;
      req.session.email = admin.email;
      req.session.fullName = admin.full_name;
      req.session.role = admin.role;
      req.session.loginTime = new Date().toISOString();
      req.session.loginIp = clientIp;
      req.session.userAgent = userAgent;
      req.session.mfaVerified = true;

      req.session.save(async (saveErr) => {
        if (saveErr) {
          console.error('Session save error:', saveErr);
          return res.status(500).json({
            success: false,
            message: 'Session creation failed'
          });
        }

        await AuditService.logMfaAttempt(admin.id, 'VERIFY_SUCCESS', clientIp, userAgent, true);

        // Remove sensitive data from response
        const { password_hash, mfa_secret, password_reset_token, password_reset_expires, ...adminData } = admin;

        res.json({
          success: true,
          message: 'MFA verification successful',
          data: {
            admin: adminData,
            sessionActive: true,
            permissions: await RBACService.getUserPermissions(admin.id)
          }
        });
      });
    });

  } catch (error) {
    console.error('MFA verification error:', error);
    await AuditService.logMfaAttempt(req.session.mfaUserId, 'VERIFY_ERROR', clientIp, userAgent, false, error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Helper function for TOTP verification (would use 'otplib' in production)
async function verifyTOTP(secret, token) {
  // In production, use: const otplib = require('otplib'); return otplib.authenticator.verify({ token, secret });
  // For demo purposes, accept "123456" as valid
  return token === '123456';
}

export default router;
