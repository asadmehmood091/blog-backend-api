// routes/adminRoutes.js
import express from 'express';
import { getAllUsers } from '../controllers/adminController.js';
import authorizeAdmin from '../middlewares/authorizeAdmin.js';
import authenticate from '../middlewares/authenticate.js'; // Your authentication middleware

const router = express.Router();

router.get('/users', authenticate, authorizeAdmin, getAllUsers);

export default router;
