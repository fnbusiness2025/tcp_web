import database from '../config/database.js';
import bcrypt from 'bcrypt';

class User {
  static async create(userData) {
    // Hash password before storing
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const user = await database.createUser({
      ...userData,
      password: hashedPassword
    });
    
    // Remove password from returned user object
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  static async findByEmail(email) {
    const user = await database.findUserByEmail(email);
    return user;
  }

  static async findById(id) {
    const user = await database.findUserById(id);
    if (user) {
      // Remove password from returned user object
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  static async validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  static async update(id, updateData) {
    // If password is being updated, hash it
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    
    const user = await database.updateUser(id, updateData);
    if (user) {
      // Remove password from returned user object
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  static async delete(id) {
    return await database.deleteUser(id);
  }

  static async findAll() {
    const users = await database.getAllUsers();
    // Remove passwords from all users
    return users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }
}

export default User;
