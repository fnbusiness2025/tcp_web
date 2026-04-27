import express from 'express';
import { body, validationResult } from 'express-validator';
import { AuthController } from '../controllers/AuthController.js';
import { RateLimitService } from '../services/rateLimitService.js';
import { RBACService } from '../services/rbacService.js';
import { SecurityService } from '../services/iam/SecurityService.js';

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

// CSRF protection middleware for state-changing requests
const requireCSRF = (req, res, next) => {
  if (req.method === 'GET') return next(); // GET requests don't need CSRF
  
  const csrfToken = req.headers['x-csrf-token'];
  const sessionCSRF = req.session?.csrfToken;
  
  if (!SecurityService.validateCSRFToken(csrfToken, sessionCSRF)) {
    return res.status(403).json({
      success: false,
      message: 'Invalid CSRF token'
    });
  }
  
  next();
};

// Authentication middleware
const requireAuth = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }
  next();
};

// Routes with clean controller delegation

// POST /api/auth/login - Login with enterprise security
router.post('/login', 
  RateLimitService.loginLimiter,
  [
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  handleValidationErrors,
  AuthController.login
);

// POST /api/auth/mfa/verify - Verify MFA code
router.post('/mfa/verify',
  RateLimitService.mfaLimiter,
  [
    body('code').isLength({ min: 6, max: 6 }).withMessage('Valid 6-digit code is required')
  ],
  handleValidationErrors,
  AuthController.verifyMFA
);

// POST /api/auth/logout - Logout
router.post('/logout',
  RateLimitService.authLimiter,
  requireAuth,
  requireCSRF,
  AuthController.logout
);

// GET /api/auth/check - Check session status
router.get('/check',
  RateLimitService.authLimiter,
  AuthController.checkSession
);

// POST /api/auth/refresh - Refresh session
router.post('/refresh',
  RateLimitService.sessionLimiter,
  requireAuth,
  requireCSRF,
  AuthController.refreshSession
);

// GET /api/auth/profile - Get user profile
router.get('/profile',
  RateLimitService.profileLimiter,
  requireAuth,
  AuthController.getProfile
);

// POST /api/auth/request-password-reset - Request password reset
router.post('/request-password-reset',
  RateLimitService.passwordResetLimiter,
  [
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required')
  ],
  handleValidationErrors,
  AuthController.requestPasswordReset
);

// POST /api/auth/reset-password - Reset password
router.post('/reset-password',
  RateLimitService.passwordResetLimiter,
  [
    body('token').isLength({ min: 32 }).withMessage('Valid reset token is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match');
      }
      return true;
    })
  ],
  handleValidationErrors,
  AuthController.resetPassword
);

// Protected routes with RBAC

// Example of RBAC-protected route
router.get('/admin/users',
  RateLimitService.profileLimiter,
  requireAuth,
  RBACService.requirePermission('users:read'),
  requireCSRF,
  async (req, res) => {
    // This would be handled by a UserController
    res.json({
      success: true,
      message: 'Access granted to user management',
      data: {
        users: [] // Placeholder
      }
    });
  }
);

// Example of multi-permission route
router.post('/admin/properties',
  RateLimitService.profileLimiter,
  requireAuth,
  RBACService.requireAnyPermission(['properties:write', 'properties:admin']),
  requireCSRF,
  async (req, res) => {
    // This would be handled by a PropertyController
    res.json({
      success: true,
      message: 'Access granted to property creation'
    });
  }
);

export default router;
