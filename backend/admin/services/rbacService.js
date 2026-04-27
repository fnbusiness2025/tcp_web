import { pool } from '../config/database.js';
import { AuditService } from './auditService.js';

export class RBACService {
  // Permission format: "resource:action" (e.g., "users:read", "properties:write")
  static PERMISSIONS = {
    // User management
    'users:read': 'View user information',
    'users:write': 'Create, update, delete users',
    'users:admin': 'Manage user roles and permissions',
    
    // Property management
    'properties:read': 'View property information',
    'properties:write': 'Create, update, delete properties',
    'properties:admin': 'Manage property settings',
    
    // Reports and analytics
    'reports:read': 'View reports and analytics',
    'reports:write': 'Create and modify reports',
    'reports:admin': 'Manage report settings',
    
    // System administration
    'system:read': 'View system settings',
    'system:write': 'Modify system settings',
    'system:admin': 'Full system administration',
    
    // Audit and security
    'audit:read': 'View audit logs',
    'audit:write': 'Manage audit settings',
    'security:admin': 'Manage security settings',
    
    // Super admin (wildcard permission)
    '*': 'Full system access'
  };

  static async getUserPermissions(userId) {
    try {
      const query = `
        SELECT 
          a.id,
          a.email,
          a.role,
          a.permissions as user_permissions,
          r.permissions as role_permissions,
          r.is_active as role_active
        FROM admins a
        LEFT JOIN roles r ON a.role = r.name
        WHERE a.id = $1 AND a.is_active = true
      `;
      
      const result = await pool.query(query, [userId]);
      
      if (result.rows.length === 0) {
        return [];
      }

      const user = result.rows[0];
      let permissions = [];

      // Add role permissions if role is active
      if (user.role_active && user.role_permissions) {
        permissions = [...permissions, ...user.role_permissions];
      }

      // Add user-specific permissions
      if (user.user_permissions) {
        permissions = [...permissions, ...user.user_permissions];
      }

      // Remove duplicates and check for wildcard
      if (permissions.includes('*')) {
        return ['*']; // Super admin has all permissions
      }

      return [...new Set(permissions)];
    } catch (error) {
      console.error('Failed to get user permissions:', error);
      return [];
    }
  }

  static async hasPermission(userId, requiredPermission) {
    try {
      const permissions = await this.getUserPermissions(userId);
      
      // Super admin has all permissions
      if (permissions.includes('*')) {
        return true;
      }

      // Check exact permission match
      if (permissions.includes(requiredPermission)) {
        return true;
      }

      // Check wildcard resource permissions (e.g., "users:*" matches "users:read")
      const [resource] = requiredPermission.split(':');
      const wildcardPermission = `${resource}:*`;
      if (permissions.includes(wildcardPermission)) {
        return true;
      }

      return false;
    } catch (error) {
      console.error('Failed to check permission:', error);
      return false;
    }
  }

  static async hasAnyPermission(userId, requiredPermissions) {
    try {
      const permissions = await this.getUserPermissions(userId);
      
      // Super admin has all permissions
      if (permissions.includes('*')) {
        return true;
      }

      // Check if user has any of the required permissions
      return requiredPermissions.some(permission => {
        if (permissions.includes(permission)) {
          return true;
        }
        
        // Check wildcard permissions
        const [resource] = permission.split(':');
        const wildcardPermission = `${resource}:*`;
        return permissions.includes(wildcardPermission);
      });
    } catch (error) {
      console.error('Failed to check permissions:', error);
      return false;
    }
  }

  static async hasAllPermissions(userId, requiredPermissions) {
    try {
      const permissions = await this.getUserPermissions(userId);
      
      // Super admin has all permissions
      if (permissions.includes('*')) {
        return true;
      }

      // Check if user has all required permissions
      return requiredPermissions.every(permission => {
        if (permissions.includes(permission)) {
          return true;
        }
        
        // Check wildcard permissions
        const [resource] = permission.split(':');
        const wildcardPermission = `${resource}:*`;
        return permissions.includes(wildcardPermission);
      });
    } catch (error) {
      console.error('Failed to check permissions:', error);
      return false;
    }
  }

  // Middleware factory for permission checking
  static requirePermission(permission) {
    return async (req, res, next) => {
      try {
        if (!req.session || !req.session.userId) {
          return res.status(401).json({
            success: false,
            message: 'Authentication required'
          });
        }

        const hasPermission = await this.hasPermission(req.session.userId, permission);
        
        if (!hasPermission) {
          await AuditService.logAccessDenied(
            req.session.userId,
            req.path,
            'access',
            req.ip,
            req.get('User-Agent'),
            `Insufficient permissions. Required: ${permission}`
          );

          return res.status(403).json({
            success: false,
            message: 'Insufficient permissions',
            required: permission
          });
        }

        next();
      } catch (error) {
        console.error('Permission check error:', error);
        res.status(500).json({
          success: false,
          message: 'Permission check failed'
        });
      }
    };
  }

  // Middleware for requiring any of multiple permissions
  static requireAnyPermission(permissions) {
    return async (req, res, next) => {
      try {
        if (!req.session || !req.session.userId) {
          return res.status(401).json({
            success: false,
            message: 'Authentication required'
          });
        }

        const hasAnyPermission = await this.hasAnyPermission(req.session.userId, permissions);
        
        if (!hasAnyPermission) {
          await AuditService.logAccessDenied(
            req.session.userId,
            req.path,
            'access',
            req.ip,
            req.get('User-Agent'),
            `Insufficient permissions. Required any of: ${permissions.join(', ')}`
          );

          return res.status(403).json({
            success: false,
            message: 'Insufficient permissions',
            required: permissions
          });
        }

        next();
      } catch (error) {
        console.error('Permission check error:', error);
        res.status(500).json({
          success: false,
          message: 'Permission check failed'
        });
      }
    };
  }

  // Middleware for requiring all specified permissions
  static requireAllPermissions(permissions) {
    return async (req, res, next) => {
      try {
        if (!req.session || !req.session.userId) {
          return res.status(401).json({
            success: false,
            message: 'Authentication required'
          });
        }

        const hasAllPermissions = await this.hasAllPermissions(req.session.userId, permissions);
        
        if (!hasAllPermissions) {
          await AuditService.logAccessDenied(
            req.session.userId,
            req.path,
            'access',
            req.ip,
            req.get('User-Agent'),
            `Insufficient permissions. Required all of: ${permissions.join(', ')}`
          );

          return res.status(403).json({
            success: false,
            message: 'Insufficient permissions',
            required: permissions
          });
        }

        next();
      } catch (error) {
        console.error('Permission check error:', error);
        res.status(500).json({
          success: false,
          message: 'Permission check failed'
        });
      }
    };
  }

  // Role management functions
  static async createRole(name, description, permissions) {
    try {
      const query = `
        INSERT INTO roles (name, description, permissions)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      
      const result = await pool.query(query, [name, description, permissions]);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to create role:', error);
      throw error;
    }
  }

  static async updateRole(roleId, name, description, permissions) {
    try {
      const query = `
        UPDATE roles 
        SET name = $1, description = $2, permissions = $3, updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *
      `;
      
      const result = await pool.query(query, [name, description, permissions, roleId]);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to update role:', error);
      throw error;
    }
  }

  static async assignRole(userId, roleName) {
    try {
      const query = `
        UPDATE admins 
        SET role = $1, updated_at = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING *
      `;
      
      const result = await pool.query(query, [roleName, userId]);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to assign role:', error);
      throw error;
    }
  }

  static async grantUserPermission(userId, permission) {
    try {
      const query = `
        UPDATE admins 
        SET permissions = permissions || $1::jsonb,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $2 AND NOT ($1::jsonb <@ permissions)
        RETURNING *
      `;
      
      const result = await pool.query(query, [JSON.stringify([permission]), userId]);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to grant user permission:', error);
      throw error;
    }
  }

  static async revokeUserPermission(userId, permission) {
    try {
      const query = `
        UPDATE admins 
        SET permissions = (
          SELECT jsonb_agg(elem)
          FROM jsonb_array_elements(permissions) elem
          WHERE elem != $1::jsonb
        ),
        updated_at = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING *
      `;
      
      const result = await pool.query(query, [permission, userId]);
      return result.rows[0];
    } catch (error) {
      console.error('Failed to revoke user permission:', error);
      throw error;
    }
  }
}
