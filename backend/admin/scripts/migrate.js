import { Pool } from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'tcp_db',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 5432,
});

async function migrate() {
  try {
    console.log('Starting database migration...');

    // Create admins table with enhanced RBAC
    const createAdminsTable = `
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        permissions JSONB DEFAULT '[]',
        mfa_enabled BOOLEAN DEFAULT false,
        mfa_secret VARCHAR(255),
        is_active BOOLEAN DEFAULT true,
        failed_login_attempts INTEGER DEFAULT 0,
        locked_until TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP,
        last_login_ip INET,
        password_reset_token VARCHAR(255),
        password_reset_expires TIMESTAMP
      );
    `;

    await pool.query(createAdminsTable);
    console.log('✓ Admins table created successfully');

    // Create roles table for RBAC
    const createRolesTable = `
      CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        permissions JSONB NOT NULL DEFAULT '[]',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(createRolesTable);
    console.log('✓ Roles table created successfully');

    // Create audit logs table
    const createAuditLogsTable = `
      CREATE TABLE IF NOT EXISTS audit_logs (
        id SERIAL PRIMARY KEY,
        admin_id INTEGER REFERENCES admins(id),
        action VARCHAR(100) NOT NULL,
        resource VARCHAR(100),
        details JSONB,
        ip_address INET,
        user_agent TEXT,
        success BOOLEAN NOT NULL,
        error_message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(createAuditLogsTable);
    console.log('✓ Audit logs table created successfully');

    // Create sessions table
    const createSessionsTable = `
      CREATE TABLE IF NOT EXISTS sessions (
        sid VARCHAR NOT NULL PRIMARY KEY,
        sess JSON NOT NULL,
        expire TIMESTAMP NOT NULL
      );
    `;

    await pool.query(createSessionsTable);
    console.log('✓ Sessions table created successfully');

    // Create password reset tokens table
    const createPasswordResetTable = `
      CREATE TABLE IF NOT EXISTS password_reset_tokens (
        id SERIAL PRIMARY KEY,
        admin_id INTEGER REFERENCES admins(id),
        token VARCHAR(255) UNIQUE NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        used BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(createPasswordResetTable);
    console.log('✓ Password reset tokens table created successfully');

    // Create indexes
    await pool.query('CREATE INDEX IF NOT EXISTS idx_sessions_expire ON sessions (expire);');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_audit_logs_admin_id ON audit_logs(admin_id);');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON audit_logs(action);');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_password_reset_token ON password_reset_tokens(token);');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_password_reset_expires ON password_reset_tokens(expires_at);');
    console.log('✓ Indexes created successfully');

    // Create updated_at trigger
    const createTrigger = `
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ language 'plpgsql';

      DROP TRIGGER IF EXISTS update_admins_updated_at ON admins;
      CREATE TRIGGER update_admins_updated_at
        BEFORE UPDATE ON admins
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();

      DROP TRIGGER IF EXISTS update_roles_updated_at ON roles;
      CREATE TRIGGER update_roles_updated_at
        BEFORE UPDATE ON roles
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `;

    await pool.query(createTrigger);
    console.log('✓ Updated at triggers created successfully');

    // Insert default roles
    await pool.query(`
      INSERT INTO roles (name, description, permissions) VALUES
      ('super_admin', 'Full system access', '["*"]'),
      ('admin', 'Administrative access', '["users:read", "users:write", "properties:read", "properties:write", "reports:read"]'),
      ('viewer', 'Read-only access', '["users:read", "properties:read", "reports:read"]')
      ON CONFLICT (name) DO NOTHING
    `);
    console.log('✓ Default roles inserted successfully');

    console.log('Migration completed successfully!');

  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
