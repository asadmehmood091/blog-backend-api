# Blog Application API

This is a simple blog application API built with Node.js and Express, using Sequelize as the ORM for PostgreSQL database management. It supports CRUD operations for blog posts and includes features for user authentication.

## Prerequisites

Node.js (v14 or later recommended)
PostgreSQL
npm (comes with Node.js)

## Installation

Clone the repository to your local machine:

git clone <repository-url>
Navigate to the project directory:

cd blog
Install the required dependencies:


npm install
Set up your PostgreSQL database and ensure it's running.

Create a .env file in the root of your project and fill in your database and environment details as per the .env.example provided.

## Running the Application

To start the server in development mode with live reloading, run:

npm run dev
To start the server in production mode, run:

npm start
The application will be accessible at http://localhost:3000 by default. Adjust the port in your .env file if necessary.

## Features

User authentication (signup and login) with JWT tokens.
CRUD operations for blog posts.
Basic error handling and API response formatting.

`
blog-application/
├── config/
│   └── config.js              # Database and environment configuration
├── controllers/
│   ├── authController.js      # Handles authentication logic
│   └── postsController.js     # Handles blog post logic
├── db/
│   └── models/
│       ├── index.js           # Initializes and exports Sequelize models
│       └── post.js            # Defines the Post model
├── middlewares/
│   └── authenticateToken.js   # Middleware for JWT authentication
├── routes/
│   ├── authRoutes.js          # Routes for authentication
│   └── postsRoutes.js         # Routes for blog post operations
├── .env.example               # Example environment variables
├── app.js                     # Express app setup
├── index.js                   # Entry point, starts the server
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation

`
