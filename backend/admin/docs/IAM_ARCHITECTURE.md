# 🏗️ Production IAM Architecture

## 📋 Overview

This is a clean, enterprise-grade Identity and Access Management (IAM) system designed for scalability, maintainability, and security. The architecture follows clean code principles with proper service separation and clear boundaries.

## 🎯 Architecture Goals

- **Service Separation**: Each service has a single responsibility
- **Clean Boundaries**: Clear interfaces between services
- **Scalability**: Easy to extend and maintain
- **Security**: Enterprise-grade security with proper audit trails
- **Testability**: Each service can be tested independently

## 📁 Folder Structure

```
backend/admin/
├── controllers/           # Request/Response orchestration
│   └── AuthController.js
├── services/
│   ├── iam/              # Core IAM services
│   │   ├── AuthService.js
│   │   ├── SessionService.js
│   │   └── SecurityService.js
│   ├── auditService.js   # Audit logging
│   ├── rbacService.js    # Role-based access control
│   └── rateLimitService.js # Rate limiting
├── routes/
│   ├── auth.js           # Legacy routes (v1)
│   └── authV2.js         # Clean architecture routes (v2)
├── config/
│   ├── database.js       # Database configuration
│   └── session.js        # Session configuration
└── docs/
    └── IAM_ARCHITECTURE.md
```

## 🔄 Request Lifecycle

### 1. Login Request Flow

```
Client Request
    ↓
Rate Limiting Middleware
    ↓
Input Validation
    ↓
AuthController.login()
    ↓
AuthService.authenticate()
    ↓
SecurityService.validateUserSecurity()
    ↓
Password Verification
    ↓
MFA Check (if enabled)
    ↓
SessionService.createSession()
    ↓
RBACService.getUserPermissions()
    ↓
Audit Logging
    ↓
Response with Session + CSRF Token
```

### 2. Protected Request Flow

```
Client Request (with Session Cookie)
    ↓
Rate Limiting
    ↓
Session Validation
    ↓
CSRF Token Validation (for state changes)
    ↓
RBAC Permission Check
    ↓
Controller Action
    ↓
Service Layer
    ↓
Audit Logging
    ↓
Response
```

## 🛡️ Security Features

### Authentication
- **Session-based authentication** with HttpOnly cookies
- **Session fixation protection** via session regeneration
- **Account lockout** after failed attempts
- **MFA support** with TOTP
- **Secure password reset** with single-use tokens

### Authorization
- **Role-Based Access Control (RBAC)** with granular permissions
- **Permission middleware** for route protection
- **Resource-level access control**

### Security Layers
- **Rate limiting** per route and per user
- **CSRF protection** for state-changing requests
- **Input validation** and sanitization
- **Security headers** via Helmet
- **Comprehensive audit logging**

## 🔧 Service Responsibilities

### AuthService
- User authentication orchestration
- Password verification
- MFA workflow management
- Password reset coordination
- Clean error handling with custom exceptions

### SessionService
- Session creation and management
- Session validation and cleanup
- MFA pending sessions
- Session invalidation
- Sliding expiration handling

### SecurityService
- User security validation
- Failed attempt tracking
- Account lockout management
- Password strength validation
- CSRF token generation/validation
- Suspicious activity detection

### AuthController
- Request/response handling
- Service orchestration
- Error mapping to HTTP status codes
- CSRF token distribution
- Clean delegation to services

## 🚀 API Endpoints (v2)

### Authentication
- `POST /api/v2/auth/login` - Login with MFA support
- `POST /api/v2/auth/mfa/verify` - Verify MFA code
- `POST /api/v2/auth/logout` - Secure logout
- `GET /api/v2/auth/check` - Session validation
- `POST /api/v2/auth/refresh` - Session refresh

### Password Management
- `POST /api/v2/auth/request-password-reset` - Request reset
- `POST /api/v2/auth/reset-password` - Reset password

### User Management
- `GET /api/v2/auth/profile` - Get user profile

### Protected Examples
- `GET /api/v2/auth/admin/users` - RBAC protected route
- `POST /api/v2/auth/admin/properties` - Multi-permission route

## 🔒 Security Best Practices Implemented

### Session Security
- HttpOnly, Secure cookies
- Session regeneration on login
- Sliding expiration
- Automatic cleanup of expired sessions

### CSRF Protection
- CSRF tokens generated per session
- Required for all state-changing requests
- Validation middleware

### Rate Limiting
- Per-route rate limits
- IP + email combination for login
- User-specific limits for authenticated routes
- Audit logging of violations

### Audit Trail
- All authentication events logged
- Security events tracked
- IP and user agent capture
- Failed attempt monitoring

## 🧪 Testing Strategy

### Unit Testing
- Each service can be tested independently
- Mock external dependencies
- Test error scenarios and edge cases

### Integration Testing
- Test service interactions
- Session lifecycle testing
- End-to-end authentication flows

### Security Testing
- Penetration testing scenarios
- Rate limiting effectiveness
- CSRF token validation
- Session security validation

## 📈 Scalability Considerations

### Database
- Indexed audit logs
- Efficient session storage
- Connection pooling

### Performance
- Service layer caching (if needed)
- Optimized queries
- Minimal session data

### Monitoring
- Security metrics
- Performance monitoring
- Error tracking

## 🔮 Future Enhancements

### Multi-tenant Support
- Tenant isolation
- Per-tenant configurations
- Cross-tenant access control

### Advanced Security
- Biometric authentication
- Hardware security keys
- Advanced threat detection

### API Features
- GraphQL support
- API versioning strategy
- OpenAPI documentation

## 🚨 Migration Guide

### From v1 to v2
1. Update frontend to use `/api/v2/auth/*` endpoints
2. Implement CSRF token handling
3. Update error handling for new error format
4. Test all authentication flows

### Backward Compatibility
- v1 routes remain available at `/api/auth/*`
- Gradual migration possible
- Feature flags for gradual rollout

## 📞 Support

For issues or questions about the IAM architecture:
1. Check audit logs for security events
2. Review service logs for errors
3. Validate configuration settings
4. Test with clean session state

---

**Version**: 2.0.0  
**Last Updated**: 2026-04-23  
**Architecture**: Clean IAM with Service Separation
