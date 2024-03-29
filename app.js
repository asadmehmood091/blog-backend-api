// app.js
import express from 'express';
import dotenv from 'dotenv';
import { handleError } from './ErrorHandler.js';
import postsRoutes from './routes/postsRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/auth', authRoutes);
// A sample route to demonstrate success response
app.get('/api', (req, res) => {
  res.status(200).json({ message: "Welcome to blog API" });
});

// Fallback route for unmatched routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Global error handler
// app.use((err, req, res, next) => {
//   handleError(err, res);
// });

export default app;
