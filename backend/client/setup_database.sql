-- Create extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create users table for TCP Malawi authentication
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

-- Create function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price BIGINT NOT NULL,
    type VARCHAR(50) NOT NULL,
    listing_type VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    image TEXT,
    beds INTEGER DEFAULT 0,
    baths INTEGER DEFAULT 0,
    sqft INTEGER DEFAULT 0,
    badge VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger for properties updated_at
DROP TRIGGER IF EXISTS update_properties_updated_at ON properties;
CREATE TRIGGER update_properties_updated_at 
    BEFORE UPDATE ON properties 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample properties (data from frontend)
INSERT INTO properties (title, location, price, type, listing_type, city, district, image, beds, baths, sqft, badge)
VALUES 
('Modern City Apartment', 'Lilongwe City Center', 45000000, 'Residential', 'For Sale', 'Lilongwe', 'Lilongwe', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', 3, 2, 1200, 'Featured'),
('Commercial Office Space', 'Blantyre Commercial', 32500000, 'Commercial', 'For Lease', 'Blantyre', 'Blantyre', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop', 0, 3, 2500, 'Hot Deal'),
('Lakefront Property', 'Lake Malawi Shore', 28750000, 'Residential', 'For Sale', 'Mangochi', 'Mangochi', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop', 5, 4, 3200, 'New'),
('Industrial Warehouse', 'Lilongwe Industrial', 55000000, 'Industrial', 'For Sale', 'Lilongwe', 'Lilongwe', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', 0, 2, 5000, 'Featured'),
('Agricultural Land', 'Rural Blantyre', 15000000, 'Agricultural', 'For Sale', 'Blantyre', 'Blantyre', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', 0, 0, 10000, 'New'),
('Luxury Villa', 'Mzuzu Heights', 75000000, 'Residential', 'For Rent', 'Mzuzu', 'Mzimba', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 6, 5, 4500, 'Hot Deal'),
('Downtown Apartment', 'Blantyre City Center', 25000000, 'Residential', 'For Rent', 'Blantyre', 'Blantyre', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop', 2, 1, 800, 'New'),
('Beach House', 'Senga Bay', 35000000, 'Residential', 'For Sale', 'Salima', 'Salima', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop', 4, 3, 2800, 'Featured'),
('Shop Space', 'Zomba Town', 8000000, 'Commercial', 'For Lease', 'Zomba', 'Zomba', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', 0, 1, 600, 'Hot Deal')
ON CONFLICT DO NOTHING;
