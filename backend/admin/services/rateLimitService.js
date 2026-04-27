import rateLimit from 'express-rate-limit';
import { AuditService } from './auditService.js';

export class RateLimitService {
  // Very strict login rate limiting
  static loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per 15 minutes per IP
    message: {
      success: false,
      message: 'Too many login attempts. Please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
      // Rate limit by IP and email combination for login
      const email = req.body?.email || 'unknown';
      return `login:${req.ip}:${email}`;
    },
    handler: async (req, res) => {
      // Log rate limit violation
      await AuditService.log({
        adminId: null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'auth',
        details: { 
          endpoint: '/api/auth/login',
          email: req.body?.email,
          userAgent: req.get('User-Agent')
        },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'Login rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many login attempts. Please try again later.',
        retryAfter: '15 minutes'
      });
    }
  });

  // Password reset rate limiting
  static passwordResetLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 password reset requests per hour per IP
    message: {
      success: false,
      message: 'Too many password reset attempts. Please try again later.',
      retryAfter: '1 hour'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => `password-reset:${req.ip}`,
    handler: async (req, res) => {
      await AuditService.log({
        adminId: null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'auth',
        details: { endpoint: '/api/auth/reset-password' },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'Password reset rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many password reset attempts. Please try again later.',
        retryAfter: '1 hour'
      });
    }
  });

  // MFA rate limiting
  static mfaLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // 10 MFA attempts per 15 minutes
    message: {
      success: false,
      message: 'Too many MFA attempts. Please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => `mfa:${req.ip}`,
    handler: async (req, res) => {
      await AuditService.log({
        adminId: req.session?.userId || null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'auth',
        details: { endpoint: req.path },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'MFA rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many MFA attempts. Please try again later.',
        retryAfter: '15 minutes'
      });
    }
  });

  // General auth endpoints rate limiting
  static authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per 15 minutes per IP
    message: {
      success: false,
      message: 'Too many authentication requests. Please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => `auth:${req.ip}`,
    handler: async (req, res) => {
      await AuditService.log({
        adminId: req.session?.userId || null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'auth',
        details: { endpoint: req.path },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'General auth rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many authentication requests. Please try again later.',
        retryAfter: '15 minutes'
      });
    }
  });

  // Profile and settings rate limiting (more restrictive for authenticated users)
  static profileLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 20, // 20 profile requests per 5 minutes per user
    message: {
      success: false,
      message: 'Too many profile requests. Please try again later.',
      retryAfter: '5 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
      // Rate limit by authenticated user ID
      return `profile:${req.session?.userId || req.ip}`;
    },
    handler: async (req, res) => {
      await AuditService.log({
        adminId: req.session?.userId || null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'profile',
        details: { endpoint: req.path },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'Profile rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many profile requests. Please try again later.',
        retryAfter: '5 minutes'
      });
    }
  });

  // Session management rate limiting
  static sessionLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // 50 session requests per 15 minutes per user
    message: {
      success: false,
      message: 'Too many session requests. Please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => `session:${req.session?.userId || req.ip}`,
    handler: async (req, res) => {
      await AuditService.log({
        adminId: req.session?.userId || null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'session',
        details: { endpoint: req.path },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'Session rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many session requests. Please try again later.',
        retryAfter: '15 minutes'
      });
    }
  });

  // API rate limiting for non-authenticated requests
  static apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // 1000 requests per 15 minutes per IP
    message: {
      success: false,
      message: 'Too many API requests. Please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip rate limiting for authenticated users on most endpoints
      return req.session?.userId && !req.path.startsWith('/api/auth');
    },
    keyGenerator: (req) => `api:${req.ip}`,
    handler: async (req, res) => {
      await AuditService.log({
        adminId: req.session?.userId || null,
        action: 'RATE_LIMIT_EXCEEDED',
        resource: 'api',
        details: { endpoint: req.path },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        success: false,
        errorMessage: 'API rate limit exceeded'
      });

      res.status(429).json({
        success: false,
        message: 'Too many API requests. Please try again later.',
        retryAfter: '15 minutes'
      });
    }
  });
}
