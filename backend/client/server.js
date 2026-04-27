import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_PREFIX = process.env.API_PREFIX || '/api/v1';

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5174',
    process.env.ADMIN_FRONTEND_URL || 'http://localhost:5173'
  ],
  credentials: true
}));
app.use(express.json());

// Health check
app.get(`${API_PREFIX}/health`, (req, res) => {
  res.json({
    success: true,
    message: 'TCP Client Backend API is running',
    timestamp: new Date().toISOString(),
    port: PORT,
    version: '1.0.0'
  });
});

// Client-specific routes
app.get(`${API_PREFIX}/properties`, (req, res) => {
  res.json({
    success: true,
    message: 'Properties endpoint - Client Backend',
    data: {
      properties: [
        { id: 1, title: 'Sample Property 1', price: 150000 },
        { id: 2, title: 'Sample Property 2', price: 250000 }
      ]
    }
  });
});

app.get(`${API_PREFIX}/profile`, (req, res) => {
  res.json({
    success: true,
    message: 'Client profile endpoint',
    data: {
      client: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TCP Client Backend running on port ${PORT}`);
  console.log(`📡 API available at: http://localhost:${PORT}${API_PREFIX}`);
  console.log(`🔗 Health check: http://localhost:${PORT}${API_PREFIX}/health`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL}`);
});
