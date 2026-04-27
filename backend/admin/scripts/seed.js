import { Pool } from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'tcp_admin',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 5432,
});

async function seed() {
  try {
    console.log('Starting database seeding...');

    // Check if admin already exists
    const existingAdmin = await pool.query(
      'SELECT id FROM admins WHERE email = $1',
      ['admin@tcpmalawi.com']
    );

    if (existingAdmin.rows.length > 0) {
      console.log('✓ Default admin already exists');
      return;
    }

    // Hash the default password
    const defaultPassword = 'admin123';
    const passwordHash = await bcrypt.hash(defaultPassword, 12);

    // Insert default admin
    const result = await pool.query(
      `INSERT INTO admins (email, password_hash, full_name, role, is_active) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, email, full_name, role`,
      ['admin@tcpmalawi.com', passwordHash, 'System Administrator', 'super_admin', true]
    );

    console.log('✓ Default admin created successfully:');
    console.log(`  Email: admin@tcpmalawi.com`);
    console.log(`  Password: ${defaultPassword}`);
    console.log(`  Name: ${result.rows[0].full_name}`);
    console.log(`  Role: ${result.rows[0].role}`);

    console.log('Seeding completed successfully!');

  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seed();
