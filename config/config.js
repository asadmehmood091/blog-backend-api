// config/config.js
import dotenv from 'dotenv';

dotenv.config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  // Add more development-specific settings
};

const production = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  // Production settings typically include more secure and performant options
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  // You might also use different database names, hosts, etc. for production
};

const config = {
  development,
  production,
};

export default config[process.env.NODE_ENV || 'development'];
