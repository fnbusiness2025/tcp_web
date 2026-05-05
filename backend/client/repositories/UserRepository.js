import database from '../config/database.js';

class UserRepository {
  // Create user
  async create(userData) {
    const user = await database.createUser(userData);
    return user;
  }

  // Find user by email
  async findByEmail(email) {
    const user = await database.findUserByEmail(email);
    return user;
  }

  // Find user by ID
  async findById(id) {
    const user = await database.findUserById(id);
    return user;
  }

  // Update user
  async update(id, updateData) {
    const user = await database.updateUser(id, updateData);
    return user;
  }

  // Delete user
  async delete(id) {
    const user = await database.deleteUser(id);
    return user;
  }

  // Get all users
  async findAll() {
    const users = await database.getAllUsers();
    return users;
  }

  // Check if user exists by email
  async existsByEmail(email) {
    const user = await this.findByEmail(email);
    return !!user;
  }

  // Get user count
  async count() {
    const users = await this.findAll();
    return users.length;
  }

  // Search users by name or email
  async search(query) {
    const users = await this.findAll();
    const lowerQuery = query.toLowerCase();
    return users.filter(user => 
      user.firstName.toLowerCase().includes(lowerQuery) ||
      user.lastName.toLowerCase().includes(lowerQuery) ||
      user.email.toLowerCase().includes(lowerQuery)
    );
  }
}

export default new UserRepository();
