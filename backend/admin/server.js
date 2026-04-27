import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import mongoSanitize from 'express-mongo-sanitize';
import authRoutes from './routes/auth.js';
import authV2Routes from './routes/authV2.js';
import sessionMiddleware from './config/session.js';
import { RateLimitService } from './services/rateLimitService.js';
import { SessionService } from './services/iam/SessionService.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5174',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Session middleware (must be before other middleware)
app.use(sessionMiddleware);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Data sanitization
app.use(mongoSanitize());

// Apply general API rate limiting
app.use('/api/', RateLimitService.apiLimiter);

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'TCP Admin API is running',
    timestamp: new Date().toISOString(),
    version: '2.0.0'
  });
});

// Legacy auth routes (for backward compatibility)
app.use('/api/auth', authRoutes);

// New clean IAM architecture routes
app.use('/api/v2/auth', authV2Routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`TCP Admin Backend running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`API Version: 2.0.0 (Clean IAM Architecture)`);
  
  // Start session cleanup job
  startSessionCleanup();
});

// Session cleanup job
function startSessionCleanup() {
  // Clean expired sessions every hour
  setInterval(async () => {
    try {
      const cleanedCount = await SessionService.cleanupExpiredSessions();
      if (cleanedCount > 0) {
        console.log(`Session cleanup: Removed ${cleanedCount} expired sessions`);
      }
    } catch (error) {
      console.error('Session cleanup error:', error);
    }
  }, 60 * 60 * 1000); // 1 hour
  
  console.log('Session cleanup job started (runs every hour)');
}
