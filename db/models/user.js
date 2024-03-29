// User model definition
import { Sequelize } from 'sequelize';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user', // Default role is 'user'. You might have 'admin' as another role.
    }
  });

  return User;
};
