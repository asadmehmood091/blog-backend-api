// controllers/adminController.js
import { User } from '../db/models/index.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(users);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching users', error: error.message });
  }
};
