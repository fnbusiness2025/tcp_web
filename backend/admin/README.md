# TCP Admin Backend

Node.js Express backend for TCP Malawi Admin Panel with PostgreSQL database and JWT authentication.

## 🚀 Features

- ✅ JWT Authentication
- ✅ PostgreSQL Database
- ✅ Password Hashing with bcrypt
- ✅ Rate Limiting
- ✅ CORS Protection
- ✅ Input Validation
- ✅ Security Headers (Helmet)
- ✅ Environment Configuration

## 📋 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your database credentials:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=tcp_admin
   DB_USER=postgres
   DB_PASSWORD=your_password
   JWT_SECRET=your-super-secret-jwt-key
   ```

3. **Set up PostgreSQL database:**
   ```sql
   CREATE DATABASE tcp_admin;
   ```

4. **Run database migration:**
   ```bash
   npm run migrate
   ```

5. **Seed default admin user:**
   ```bash
   npm run seed
   ```

## 🏃‍♂️ Running the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:3000`

## 📡 API Endpoints

### Authentication

#### POST `/api/auth/login`
Login admin user

**Request:**
```json
{
  "email": "admin@tcpmalawi.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "admin": {
      "id": 1,
      "email": "admin@tcpmalawi.com",
      "full_name": "System Administrator",
      "role": "super_admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### GET `/api/auth/profile`
Get current admin profile (requires authentication)

**Headers:**
```
Authorization: Bearer <token>
```

#### POST `/api/auth/logout`
Logout admin user (requires authentication)

#### POST `/api/auth/change-password`
Change admin password (requires authentication)

**Request:**
```json
{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword"
}
```

### Health Check

#### GET `/api/health`
Check API health status

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Rate Limiting**: Prevents brute force attacks
- **CORS Protection**: Configured for frontend domain
- **Input Validation**: Express-validator for request sanitization
- **Security Headers**: Helmet for additional security

## 🗄️ Database Schema

### Admins Table
```sql
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP
);
```

## 🔧 Default Credentials

After running the seed script:

- **Email**: admin@tcpmalawi.com
- **Password**: admin123
- **Role**: super_admin

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| NODE_ENV | Environment | development |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 5432 |
| DB_NAME | Database name | tcp_admin |
| DB_USER | Database user | postgres |
| DB_PASSWORD | Database password | - |
| JWT_SECRET | JWT secret key | - |
| FRONTEND_URL | Frontend URL | http://localhost:5174 |

## 🚨 Important Notes

- Change the default admin password after first login
- Use strong JWT_SECRET in production
- Enable SSL in production
- Regularly update dependencies
- Use environment-specific configurations

## 🔄 Development Workflow

1. Make changes to code
2. Server auto-restarts with nodemon (in development)
3. Test API endpoints
4. Update migrations if needed
5. Update documentation

## 📱 Frontend Integration

The frontend should:
- Store JWT token securely (httpOnly cookies recommended)
- Include token in Authorization header for protected routes
- Handle token expiration gracefully
- Implement proper logout functionality
