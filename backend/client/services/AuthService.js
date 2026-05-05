import UserRepository from '../repositories/UserRepository.js';
import { generateToken } from '../utils/jwt.js';
import bcrypt from 'bcrypt';

class AuthService {
  // Sign up service
  async signup(userData) {
    const { firstName, lastName, phone, email, password } = userData;

    // Validate input
    this.validateSignupInput(userData);

    // Check if user already exists
    const existingUser = await UserRepository.existsByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await UserRepository.create({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    // Generate JWT token
    const token = generateToken({
      userId: newUser.id,
      email: newUser.email
    });

    return {
      user: userWithoutPassword,
      token
    };
  }

  // Sign in service
  async signin(email, password) {
    // Validate input
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Find user
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email
    });

    return {
      user: userWithoutPassword,
      token
    };
  }

  // Get user profile service
  async getProfile(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  // Update user profile service
  async updateProfile(userId, updateData) {
    // Hash password if it's being updated
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await UserRepository.update(userId, updateData);
    if (!updatedUser) {
      throw new Error('User not found');
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }

  // Change password service
  async changePassword(userId, currentPassword, newPassword) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      throw new Error('Current password is incorrect');
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await UserRepository.update(userId, { password: hashedNewPassword });

    return { message: 'Password updated successfully' };
  }

  // Private validation methods
  validateSignupInput(userData) {
    const { firstName, lastName, phone, email, password } = userData;

    if (!firstName || !lastName || !phone || !email || !password) {
      throw new Error('All fields are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Validate password length
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Validate phone format (basic validation)
    if (phone.length < 10) {
      throw new Error('Invalid phone number');
    }
  }
}

export default new AuthService();
