// db/models/index.js
import { Sequelize } from "sequelize";
import config from "../../config/config.js";
import userModel from "./user.js";
import postModel from "./post.js";
import bcrypt from "bcrypt";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
  }
);

const User = userModel(sequelize, Sequelize.DataTypes);
const Post = postModel(sequelize, Sequelize.DataTypes);

const createAdminUser = async () => {
  try {
    // Check if the admin user already exists
    const existingUser = await User.findOne({
      where: { username: process.env.ADMIN_USERNAME || "adminUser" },
    });

    if (existingUser) {
      console.log("Admin user already exists");
      return; // Exit if user exists
    }
    const adminPassword = process.env.ADMIN_PASSWORD || "adminPassword";
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await User.create({
      username: process.env.ADMIN_USERNAME || "adminUser",
      password: hashedPassword,
      role: "admin", 
    });

    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

createAdminUser();
const db = {
  sequelize,
  Sequelize,
  User,
  Post,
};

export { User, Post };
export default db;
