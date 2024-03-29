// db/models/index.js
import { Sequelize } from 'sequelize';
import config from '../../config/config.js';
import userModel from './user.js'; 
import postModel from './post.js';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
});

const User = userModel(sequelize, Sequelize.DataTypes);
const Post = postModel(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
  Post,
};

export { User, Post };
export default db;