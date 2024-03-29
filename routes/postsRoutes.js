// routes/postsRoutes.js
import express from 'express';
import postsController from '../controllers/postsController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const { createPost, getAllPosts,getPostById,updatePost,deletePost } = postsController;


const router = express.Router();

// Create a new blog post
router.post('/createPost', authenticateToken, createPost);
router.get('/getAllPosts', authenticateToken, getAllPosts);
router.get('/getPostById/:id', authenticateToken, getPostById);
router.post('/updatePost/:id', authenticateToken, updatePost);
router.post('/deletePost/:id', authenticateToken, deletePost);

export default router;
