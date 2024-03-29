// routes/postsRoutes.js
import express from 'express';
import postsController from '../controllers/postsController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const { createPost } = postsController;

const router = express.Router();

// Create a new blog post
router.post('/', authenticateToken, createPost);

export default router;
