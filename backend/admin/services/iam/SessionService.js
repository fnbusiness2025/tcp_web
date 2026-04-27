import crypto from 'crypto';
import { AuditService } from '../auditService.js';

export class SessionService {
  /**
   * Create a new authenticated session
   * Handles all session-related logic with proper error handling
   */
  static async createSession(user, context) {
    const { ip, userAgent } = context;
    
    try {
      // Generate secure session data
      const sessionData = {
        userId: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
        loginTime: new Date().toISOString(),
        loginIp: ip,
        userAgent: userAgent,
        sessionId: crypto.randomUUID(),
        mfaVerified: true
      };

      // Store session with proper error handling
      const session = await this._storeSession(sessionData);
      
      await AuditService.logSessionActivity(user.id, 'CREATE', ip, userAgent, true, {
        sessionId: sessionData.sessionId
      });

      return {
        id: sessionData.sessionId,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.full_name,
          role: user.role
        },
        createdAt: sessionData.loginTime,
        expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours
      };

    } catch (error) {
      console.error('Session creation error:', error);
      await AuditService.logSessionActivity(user.id, 'CREATE_FAILED', ip, userAgent, false, {
        error: error.message
      });
      throw new SessionError('Failed to create session', 'SESSION_CREATE_FAILED');
    }
  }

  /**
   * Create pending MFA session
   * Temporary session state for MFA verification
   */
  static async createPendingMFASession(user, context) {
    const { ip, userAgent } = context;
    
    try {
      const mfaSessionData = {
        mfaPending: true,
        mfaUserId: user.id,
        mfaEmail: user.email,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
        sessionId: crypto.randomUUID()
      };

      await this._storeTemporarySession(mfaSessionData);

      await AuditService.logSessionActivity(user.id, 'MFA_PENDING', ip, userAgent, true, {
        sessionId: mfaSessionData.sessionId
      });

      return {
        id: mfaSessionData.sessionId,
        userId: user.id,
        expiresAt: mfaSessionData.expiresAt
      };

    } catch (error) {
      console.error('MFA session creation error:', error);
      throw new SessionError('Failed to create MFA session', 'MFA_SESSION_FAILED');
    }
  }

  /**
   * Validate and retrieve session
   */
  static async validateSession(sessionId, context) {
    const { ip, userAgent } = context;

    try {
      const session = await this._getSession(sessionId);
      
      if (!session) {
        await AuditService.logSessionActivity(null, 'VALIDATE_FAILED', ip, userAgent, false, {
          reason: 'Session not found',
          sessionId
        });
        return null;
      }

      // Check expiration
      if (this._isSessionExpired(session)) {
        await this.destroySession(sessionId, context);
        return null;
      }

      // Update last activity (sliding expiration)
      await this._updateSessionActivity(sessionId);

      return session;

    } catch (error) {
      console.error('Session validation error:', error);
      return null;
    }
  }

  /**
   * Destroy a specific session
   */
  static async destroySession(sessionId, context) {
    const { ip, userAgent } = context;
    
    try {
      const session = await this._getSession(sessionId);
      
      if (session) {
        await this._removeSession(sessionId);
        
        await AuditService.logSessionActivity(
          session.userId || session.mfaUserId, 
          'DESTROY', 
          ip, 
          userAgent, 
          true,
          { sessionId }
        );
      }

      return true;

    } catch (error) {
      console.error('Session destruction error:', error);
      throw new SessionError('Failed to destroy session', 'SESSION_DESTROY_FAILED');
    }
  }

  /**
   * Invalidate all sessions for a user
   */
  static async invalidateAllUserSessions(userId, context = {}) {
    const { ip, userAgent } = context;
    
    try {
      const sessions = await this._getUserSessions(userId);
      const sessionIds = sessions.map(s => s.sessionId);

      for (const sessionId of sessionIds) {
        await this._removeSession(sessionId);
      }

      await AuditService.logSessionActivity(userId, 'INVALIDATE_ALL', ip, userAgent, true, {
        sessionsInvalidated: sessionIds.length
      });

      return { invalidatedCount: sessionIds.length };

    } catch (error) {
      console.error('Session invalidation error:', error);
      throw new SessionError('Failed to invalidate sessions', 'SESSION_INVALIDATE_FAILED');
    }
  }

  /**
   * Refresh session (sliding expiration)
   */
  static async refreshSession(sessionId, context) {
    const { ip, userAgent } = context;

    try {
      const session = await this.validateSession(sessionId, context);
      
      if (!session) {
        throw new SessionError('Session not found or expired', 'SESSION_NOT_FOUND');
      }

      await this._updateSessionActivity(sessionId);
      
      await AuditService.logSessionActivity(session.userId, 'REFRESH', ip, userAgent, true, {
        sessionId
      });

      return {
        success: true,
        expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000)
      };

    } catch (error) {
      if (error instanceof SessionError) {
        throw error;
      }
      console.error('Session refresh error:', error);
      throw new SessionError('Failed to refresh session', 'SESSION_REFRESH_FAILED');
    }
  }

  /**
   * Clean up expired sessions
   * Should be run periodically (e.g., every hour)
   */
  static async cleanupExpiredSessions() {
    try {
      const expiredSessions = await this._getExpiredSessions();
      let cleanedCount = 0;

      for (const session of expiredSessions) {
        await this._removeSession(session.sessionId);
        cleanedCount++;
      }

      console.log(`Cleaned up ${cleanedCount} expired sessions`);
      return cleanedCount;

    } catch (error) {
      console.error('Session cleanup error:', error);
      return 0;
    }
  }

  // Private helper methods

  static async _storeSession(sessionData) {
    // This would interface with your session store
    // For now, we'll simulate the storage
    return sessionData;
  }

  static async _storeTemporarySession(sessionData) {
    // Store temporary MFA session
    return sessionData;
  }

  static async _getSession(sessionId) {
    // Retrieve session from storage
    // This would interface with your session store
    return null; // Placeholder
  }

  static async _removeSession(sessionId) {
    // Remove session from storage
    return true;
  }

  static async _getUserSessions(userId) {
    // Get all sessions for a user
    return [];
  }

  static async _getExpiredSessions() {
    // Get all expired sessions
    return [];
  }

  static async _updateSessionActivity(sessionId) {
    // Update session last activity time
    return true;
  }

  static _isSessionExpired(session) {
    if (!session.expiresAt) return false;
    return new Date(session.expiresAt) < new Date();
  }
}

export class SessionError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'SessionError';
    this.code = code;
  }
}
