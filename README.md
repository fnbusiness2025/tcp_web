# TCP Malawi - Admin and Client Sides

This project has been divided into two separate applications:

## 📁 Project Structure

```
tcp/
├── admin/          # Admin panel (runs on port 5174)
├── client/         # Client website (runs on port 5173)
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Admin Panel Setup

1. Navigate to the admin directory:
```bash
cd admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to: `http://localhost:5174`

**Default Login Credentials:**
- Email: `admin@tcpmalawi.com`
- Password: `admin123`

### Client Website Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to: `http://localhost:5173`

## 📋 Available Scripts

### Admin Panel
- `npm run dev` - Start development server on port 5174
- `npm run build` - Build for production
- `npm run preview` - Preview production build on port 4174

### Client Website
- `npm run dev` - Start development server on port 5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build on port 4173

## 🎯 Features

### Admin Panel
- ✅ Secure login system
- ✅ Dashboard with statistics
- ✅ Recent activities tracking
- ✅ Quick action buttons
- ✅ Responsive design

### Client Website
- ✅ Property listings
- ✅ Services showcase
- ✅ About us page
- ✅ Contact form
- ✅ Responsive design

## 🔧 Development Notes

- Both applications run independently on different ports
- Admin panel uses localStorage for authentication (for demo purposes)
- In production, implement proper server-side authentication
- Both applications share the same TCP Malawi branding

## 📝 Next Steps

To enhance the admin panel, consider adding:
- User management system
- Property CRUD operations
- Client management
- Report generation
- Database integration

To enhance the client website, consider adding:
- Property search functionality
- Online booking system
- Client portal
- Payment integration
