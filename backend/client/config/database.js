// Database configuration
// PostgreSQL database connection setup with in-memory fallback

import pkg from 'pg';
import dotenv from 'dotenv';
import crypto from 'crypto';
const { Pool } = pkg;

dotenv.config();

// Database connection configuration
const pool = new Pool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'tcp_db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 5000, // How long to wait when connecting a new client
  ssl: false // Disable SSL for local connections
});

class Database {
  constructor() {
    this.pool = pool;
    this.usePostgreSQL = false;
    this.users = [];
    this.initialized = this.initDatabase();
  }

  // Initialize database tables
  async initDatabase() {
    try {
      // Test PostgreSQL connection first
      await this.pool.query('SELECT NOW()');
      
      // Create users table if it doesn't exist
      const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          phone VARCHAR(20) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;

      await this.pool.query(createUsersTable);
      this.usePostgreSQL = true;
      console.log('✅ PostgreSQL database connected and tables initialized');
    } catch (error) {
      console.error('❌ PostgreSQL connection error:', error);
      console.warn('⚠️  PostgreSQL not available, falling back to in-memory storage');
      this.usePostgreSQL = false;
      console.log('✅ In-memory storage initialized');
    }
  }

  // User methods
  async createUser(userData) {
    const { firstName, lastName, phone, email, password } = userData;
    
    if (this.usePostgreSQL) {
      const query = `
        INSERT INTO users (first_name, last_name, phone, email, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, first_name, last_name, phone, email, created_at, updated_at;
      `;
      
      const values = [firstName, lastName, phone, email, password];
      
      try {
        const result = await this.pool.query(query, values);
        return result.rows[0];
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    } else {
      // In-memory storage
      const user = {
        id: crypto.randomUUID(),
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
        password: password,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      this.users.push(user);
      return user;
    }
  }

  async findUserByEmail(email) {
    if (this.usePostgreSQL) {
      const query = 'SELECT * FROM users WHERE email = $1';
      
      try {
        const result = await this.pool.query(query, [email]);
        return result.rows[0] || null;
      } catch (error) {
        console.error('Error finding user by email:', error);
        throw error;
      }
    } else {
      // In-memory storage
      return this.users.find(user => user.email === email) || null;
    }
  }

  async findUserById(id) {
    if (this.usePostgreSQL) {
      const query = 'SELECT id, first_name, last_name, phone, email, created_at, updated_at FROM users WHERE id = $1';
      
      try {
        const result = await this.pool.query(query, [id]);
        return result.rows[0] || null;
      } catch (error) {
        console.error('Error finding user by ID:', error);
        throw error;
      }
    } else {
      // In-memory storage
      const user = this.users.find(user => user.id === id);
      if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
      return null;
    }
  }

  async updateUser(id, updateData) {
    if (this.usePostgreSQL) {
      const { firstName, lastName, phone, email, password } = updateData;
      
      // Build dynamic update query
      const updateFields = [];
      const values = [];
      let paramIndex = 1;

      if (firstName !== undefined) {
        updateFields.push(`first_name = $${paramIndex++}`);
        values.push(firstName);
      }
      if (lastName !== undefined) {
        updateFields.push(`last_name = $${paramIndex++}`);
        values.push(lastName);
      }
      if (phone !== undefined) {
        updateFields.push(`phone = $${paramIndex++}`);
        values.push(phone);
      }
      if (email !== undefined) {
        updateFields.push(`email = $${paramIndex++}`);
        values.push(email);
      }
      if (password !== undefined) {
        updateFields.push(`password = $${paramIndex++}`);
        values.push(password);
      }

      updateFields.push(`updated_at = CURRENT_TIMESTAMP`);
      values.push(id);

      const query = `
        UPDATE users 
        SET ${updateFields.join(', ')}
        WHERE id = $${paramIndex}
        RETURNING id, first_name, last_name, phone, email, created_at, updated_at;
      `;

      try {
        const result = await this.pool.query(query, values);
        return result.rows[0] || null;
      } catch (error) {
        console.error('Error updating user:', error);
        throw error;
      }
    } else {
      // In-memory storage
      const userIndex = this.users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        this.users[userIndex] = {
          ...this.users[userIndex],
          ...updateData,
          updated_at: new Date().toISOString()
        };
        const { password, ...userWithoutPassword } = this.users[userIndex];
        return userWithoutPassword;
      }
      return null;
    }
  }

  async deleteUser(id) {
    if (this.usePostgreSQL) {
      const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
      
      try {
        const result = await this.pool.query(query, [id]);
        return result.rows[0] || null;
      } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
      }
    } else {
      // In-memory storage
      const userIndex = this.users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        return this.users.splice(userIndex, 1)[0];
      }
      return null;
    }
  }

  async getAllUsers() {
    if (this.usePostgreSQL) {
      const query = 'SELECT id, first_name, last_name, phone, email, created_at, updated_at FROM users ORDER BY created_at DESC';
      
      try {
        const result = await this.pool.query(query);
        return result.rows;
      } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
      }
    } else {
      // In-memory storage
      return this.users.map(user => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }).reverse(); // Reverse to show newest first
    }
  }

  // Test database connection
  async testConnection() {
    await this.initialized;
    if (this.usePostgreSQL) {
      try {
        const result = await this.pool.query('SELECT NOW()');
        console.log('✅ PostgreSQL connected successfully');
        return true;
      } catch (error) {
        console.error('❌ PostgreSQL connection failed:', error);
        return false;
      }
    } else {
      console.log('✅ Using in-memory storage (PostgreSQL not available)');
      return true;
    }
  }

  // General query method
  async query(text, params) {
    if (this.usePostgreSQL) {
      return this.pool.query(text, params);
    } else {
      console.warn('⚠️  Attempting to run SQL query on in-memory storage. Not supported for custom queries.');
      return { rows: [] };
    }
  }

  // Close database connection
  async close() {
    await this.pool.end();
    console.log('Database connection closed');
  }
}

export default new Database();
