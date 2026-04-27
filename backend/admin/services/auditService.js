import { pool } from '../config/database.js';

export class AuditService {
  static async log({
    adminId,
    action,
    resource = null,
    details = null,
    ipAddress = null,
    userAgent = null,
    success = true,
    errorMessage = null
  }) {
    try {
      const query = `
        INSERT INTO audit_logs (admin_id, action, resource, details, ip_address, user_agent, success, error_message)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, created_at
      `;
      
      const values = [adminId, action, resource, details, ipAddress, userAgent, success, errorMessage];
      const result = await pool.query(query, values);
      
      console.log(`🔍 Audit log created: ${action} - ${success ? 'SUCCESS' : 'FAILURE'} - ID: ${result.rows[0].id}`);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to create audit log:', error);
      // Don't throw error to avoid breaking main flow
    }
  }

  static async logLoginAttempt(email, ipAddress, userAgent, success, adminId = null, errorMessage = null) {
    return this.log({
      adminId,
      action: 'LOGIN_ATTEMPT',
      resource: 'auth',
      details: { email },
      ipAddress,
      userAgent,
      success,
      errorMessage
    });
  }

  static async logLogout(adminId, ipAddress, userAgent) {
    return this.log({
      adminId,
      action: 'LOGOUT',
      resource: 'auth',
      ipAddress,
      userAgent,
      success: true
    });
  }

  static async logPasswordChange(adminId, ipAddress, userAgent, success, errorMessage = null) {
    return this.log({
      adminId,
      action: 'PASSWORD_CHANGE',
      resource: 'auth',
      ipAddress,
      userAgent,
      success,
      errorMessage
    });
  }

  static async logPasswordReset(adminId, ipAddress, userAgent, success, errorMessage = null) {
    return this.log({
      adminId,
      action: 'PASSWORD_RESET',
      resource: 'auth',
      ipAddress,
      userAgent,
      success,
      errorMessage
    });
  }

  static async logMfaAttempt(adminId, action, ipAddress, userAgent, success, errorMessage = null) {
    return this.log({
      adminId,
      action: `MFA_${action}`,
      resource: 'auth',
      ipAddress,
      userAgent,
      success,
      errorMessage
    });
  }

  static async logAccessDenied(adminId, resource, action, ipAddress, userAgent, reason) {
    return this.log({
      adminId,
      action: 'ACCESS_DENIED',
      resource,
      details: { action, reason },
      ipAddress,
      userAgent,
      success: false,
      errorMessage: reason
    });
  }

  static async logSessionActivity(adminId, action, ipAddress, userAgent, success, details = null) {
    return this.log({
      adminId,
      action: `SESSION_${action}`,
      resource: 'session',
      details,
      ipAddress,
      userAgent,
      success
    });
  }

  static async getAuditLogs(filters = {}) {
    try {
      let query = `
        SELECT al.*, a.full_name, a.email
        FROM audit_logs al
        LEFT JOIN admins a ON al.admin_id = a.id
        WHERE 1=1
      `;
      const values = [];
      let paramIndex = 1;

      if (filters.adminId) {
        query += ` AND al.admin_id = $${paramIndex++}`;
        values.push(filters.adminId);
      }

      if (filters.action) {
        query += ` AND al.action = $${paramIndex++}`;
        values.push(filters.action);
      }

      if (filters.success !== undefined) {
        query += ` AND al.success = $${paramIndex++}`;
        values.push(filters.success);
      }

      if (filters.startDate) {
        query += ` AND al.created_at >= $${paramIndex++}`;
        values.push(filters.startDate);
      }

      if (filters.endDate) {
        query += ` AND al.created_at <= $${paramIndex++}`;
        values.push(filters.endDate);
      }

      query += ` ORDER BY al.created_at DESC`;

      if (filters.limit) {
        query += ` LIMIT $${paramIndex++}`;
        values.push(filters.limit);
      }

      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Failed to get audit logs:', error);
      throw error;
    }
  }

  static async getSecurityMetrics(startDate = null) {
    try {
      const query = `
        SELECT 
          COUNT(*) as total_events,
          COUNT(*) FILTER (WHERE success = true) as successful_events,
          COUNT(*) FILTER (WHERE success = false) as failed_events,
          COUNT(*) FILTER (WHERE action = 'LOGIN_ATTEMPT') as login_attempts,
          COUNT(*) FILTER (WHERE action = 'LOGIN_ATTEMPT' AND success = false) as failed_logins,
          COUNT(*) FILTER (WHERE action = 'ACCESS_DENIED') as access_denied,
          COUNT(DISTINCT admin_id) as unique_admins,
          COUNT(DISTINCT ip_address) as unique_ips
        FROM audit_logs
        ${startDate ? 'WHERE created_at >= $1' : ''}
      `;
      
      const result = await pool.query(startDate ? [startDate] : []);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to get security metrics:', error);
      throw error;
    }
  }
}
