import { AuthService, AuthError } from '../services/iam/AuthService.js';
import { SessionService, SessionError } from '../services/iam/SessionService.js';
import { SecurityService } from '../services/iam/SecurityService.js';
import { AuditService } from '../services/auditService.js';

export class AuthController {
  /**
   * Handle login request
   * Clean controller that orchestrates services
   */
  static async login(req, res) {
    const { email, password } = req.body;
    const context = {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      sessionId: req.sessionID
    };

    try {
      // Delegate to AuthService
      const authResult = await AuthService.authenticate({ email, password }, context);

      if (authResult.requiresMFA) {
        // MFA required - set pending session
        req.session.mfaPending = true;
        req.session.mfaUserId = authResult.userId;
        req.session.mfaSessionId = authResult.mfaSessionId;
        
        return res.json({
          success: true,
          message: 'Password verified. MFA required.',
          data: {
            mfaRequired: true,
            userId: authResult.userId
          }
        });
      }

      // Successful login - create session
      req.session.userId = authResult.user.id;
      req.session.email = authResult.user.email;
      req.session.fullName = authResult.user.fullName;
      req.session.role = authResult.user.role;
      req.session.loginTime = authResult.session.createdAt;
      req.session.loginIp = context.ip;
      req.session.userAgent = context.userAgent;

      // Generate CSRF token for this session
      const csrfToken = SecurityService.generateCSRFToken();
      req.session.csrfToken = csrfToken;

      await req.session.save();

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          admin: authResult.user,
          sessionActive: true,
          permissions: authResult.permissions,
          csrfToken // Send CSRF token to frontend
        }
      });

    } catch (error) {
      if (error instanceof AuthError) {
        return this._handleAuthError(error, res);
      }
      console.error('Login controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  /**
   * Handle MFA verification
   */
  static async verifyMFA(req, res) {
    const { code } = req.body;
    const context = {
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    try {
      // Validate MFA session state
      if (!req.session.mfaPending || !req.session.mfaUserId) {
        return res.status(400).json({
          success: false,
          message: 'MFA verification not in progress'
        });
      }

      // Delegate to AuthService
      const authResult = await AuthService.verifyMFA(req.session.mfaUserId, code, context);

      // Complete login
      req.session.mfaPending = false;
      req.session.userId = authResult.user.id;
      req.session.email = authResult.user.email;
      req.session.fullName = authResult.user.fullName;
      req.session.role = authResult.user.role;
      req.session.loginTime = authResult.session.createdAt;
      req.session.loginIp = context.ip;
      req.session.userAgent = context.userAgent;
      req.session.mfaVerified = true;

      // Generate CSRF token
      const csrfToken = SecurityService.generateCSRFToken();
      req.session.csrfToken = csrfToken;

      await req.session.save();

      res.json({
        success: true,
        message: 'MFA verification successful',
        data: {
          admin: authResult.user,
          sessionActive: true,
          permissions: authResult.permissions,
          csrfToken
        }
      });

    } catch (error) {
      if (error instanceof AuthError) {
        return this._handleAuthError(error, res);
      }
      console.error('MFA verification controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  /**
   * Handle logout
   */
  static async logout(req, res) {
    const context = {
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    try {
      // Delegate to SessionService
      await SessionService.destroySession(req.sessionID, context);

      // Clear session
      req.session.destroy((err) => {
        if (err) {
          console.error('Session destroy error:', err);
          return res.status(500).json({
            success: false,
            message: 'Logout failed'
          });
        }

        // Clear cookie
        res.clearCookie('tcp_admin_session');

        res.json({
          success: true,
          message: 'Logout successful'
        });
      });

    } catch (error) {
      console.error('Logout controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Logout failed'
      });
    }
  }

  /**
   * Check session status
   */
  static async checkSession(req, res) {
    try {
      if (!req.session || !req.session.userId) {
        return res.json({
          success: true,
          data: {
            authenticated: false
          }
        });
      }

      // Validate session with SessionService
      const session = await SessionService.validateSession(req.sessionID, {
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });

      if (!session) {
        // Session invalid - clear it
        req.session.destroy();
        return res.json({
          success: true,
          data: {
            authenticated: false
          }
        });
      }

      res.json({
        success: true,
        data: {
          authenticated: true,
          user: {
            id: req.session.userId,
            email: req.session.email,
            fullName: req.session.fullName,
            role: req.session.role
          },
          csrfToken: req.session.csrfToken
        }
      });

    } catch (error) {
      console.error('Session check controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Session check failed'
      });
    }
  }

  /**
   * Refresh session
   */
  static async refreshSession(req, res) {
    try {
      if (!req.session || !req.session.userId) {
        return res.status(401).json({
          success: false,
          message: 'No active session'
        });
      }

      const context = {
        ip: req.ip,
        userAgent: req.get('User-Agent')
      };

      // Delegate to SessionService
      const refreshResult = await SessionService.refreshSession(req.sessionID, context);

      // Touch session to update expiration
      req.session.touch();

      res.json({
        success: true,
        message: 'Session refreshed',
        data: {
          sessionActive: true,
          expiresAt: refreshResult.expiresAt
        }
      });

    } catch (error) {
      if (error instanceof SessionError) {
        return res.status(401).json({
          success: false,
          message: error.message
        });
      }
      console.error('Session refresh controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Session refresh failed'
      });
    }
  }

  /**
   * Request password reset
   */
  static async requestPasswordReset(req, res) {
    const { email } = req.body;
    const context = {
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    try {
      // Delegate to AuthService
      const result = await AuthService.requestPasswordReset(email, context);

      res.json(result);

    } catch (error) {
      if (error instanceof AuthError) {
        return this._handleAuthError(error, res);
      }
      console.error('Password reset request controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Password reset request failed'
      });
    }
  }

  /**
   * Reset password
   */
  static async resetPassword(req, res) {
    const { token, password } = req.body;
    const context = {
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    try {
      // Validate password strength
      const passwordValidation = SecurityService.validatePasswordStrength(password);
      if (!passwordValidation.isValid) {
        return res.status(400).json({
          success: false,
          message: 'Password does not meet security requirements',
          errors: passwordValidation.issues
        });
      }

      // Delegate to AuthService
      const result = await AuthService.resetPassword(token, password, context);

      res.json(result);

    } catch (error) {
      if (error instanceof AuthError) {
        return this._handleAuthError(error, res);
      }
      console.error('Password reset controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Password reset failed'
      });
    }
  }

  /**
   * Get user profile
   */
  static async getProfile(req, res) {
    try {
      if (!req.session || !req.session.userId) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      // This would typically use a UserService
      // For now, return session data
      res.json({
        success: true,
        data: {
          admin: {
            id: req.session.userId,
            email: req.session.email,
            fullName: req.session.fullName,
            role: req.session.role,
            loginTime: req.session.loginTime
          },
          sessionActive: true
        }
      });

    } catch (error) {
      console.error('Profile controller error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to get profile'
      });
    }
  }

  /**
   * Handle authentication errors consistently
   */
  static _handleAuthError(error, res) {
    const statusCode = this._getStatusCodeForError(error.code);
    
    return res.status(statusCode).json({
      success: false,
      message: error.message,
      ...(error.details && { details: error.details })
    });
  }

  /**
   * Map error codes to HTTP status codes
   */
  static _getStatusCodeForError(errorCode) {
    const statusMap = {
      'USER_NOT_FOUND': 401,
      'INVALID_PASSWORD': 401,
      'ACCOUNT_DEACTIVATED': 401,
      'ACCOUNT_LOCKED': 423,
      'INVALID_CREDENTIALS': 401,
      'INVALID_TOKEN': 400,
      'MFA_NOT_ENABLED': 400,
      'INVALID_MFA_CODE': 400,
      'SESSION_CREATE_FAILED': 500,
      'SESSION_DESTROY_FAILED': 500,
      'INTERNAL_ERROR': 500
    };

    return statusMap[errorCode] || 500;
  }
}
