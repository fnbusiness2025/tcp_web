import session from 'express-session';
import ConnectPgSimple from 'connect-pg-simple';
import { pool } from './database.js';

const PostgresStore = ConnectPgSimple(session);

export const sessionConfig = {
  store: new PostgresStore({
    pool,
    tableName: 'sessions',
    createTableIfMissing: false,
    // Clean up expired sessions
    pruneSessionInterval: 60 * 60 * 1000, // 1 hour
  }),
  secret: process.env.SESSION_SECRET || 'your-super-secret-session-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  name: 'tcp_admin_session',
  cookie: {
    maxAge: 8 * 60 * 60 * 1000, // 8 hours
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  },
  rolling: true, // Reset expiration on every request (sliding expiration)
  proxy: process.env.NODE_ENV === 'production', // Trust reverse proxy in production
  
  // Session validation and security
  unset: 'destroy',
  
  // Custom session validation
  checkExpirationInterval: 15 * 60 * 1000, // Check for expired sessions every 15 minutes
  
  // Session ID regeneration on login for security
  genid: (req) => {
    // Generate cryptographically secure session ID
    require('crypto').randomBytes(32).toString('hex');
  }
};

export default session(sessionConfig);
