import AuthService from '../services/AuthService.js';

class AuthController {
  // Sign Up
  static async signup(req, res) {
    try {
      const result = await AuthService.signup(req.body);
      
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: result
      });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(400).json({
        success: false,
        message: error.message || 'Signup failed'
      });
    }
  }

  // Sign In
  static async signin(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.signin(email, password);
      
      res.json({
        success: true,
        message: 'Sign in successful',
        data: result
      });
    } catch (error) {
      console.error('Signin error:', error);
      res.status(401).json({
        success: false,
        message: error.message || 'Sign in failed'
      });
    }
  }

  // Get current user profile
  static async getProfile(req, res) {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      const user = await AuthService.getProfile(userId);
      
      res.json({
        success: true,
        message: 'Profile retrieved successfully',
        data: { user }
      });
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(404).json({
        success: false,
        message: error.message || 'Profile not found'
      });
    }
  }

  // Update profile
  static async updateProfile(req, res) {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      const updatedUser = await AuthService.updateProfile(userId, req.body);
      
      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: { user: updatedUser }
      });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(400).json({
        success: false,
        message: error.message || 'Profile update failed'
      });
    }
  }

  // Change password
  static async changePassword(req, res) {
    try {
      const userId = req.user?.id;
      const { currentPassword, newPassword } = req.body;
      
      if (!userId) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      const result = await AuthService.changePassword(userId, currentPassword, newPassword);
      
      res.json({
        success: true,
        message: result.message,
        data: result
      });
    } catch (error) {
      console.error('Change password error:', error);
      res.status(400).json({
        success: false,
        message: error.message || 'Password change failed'
      });
    }
  }
}

export default AuthController;
