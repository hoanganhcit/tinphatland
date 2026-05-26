import express from 'express';
import { login, getMe, createAdmin } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/login', login);
router.post('/create-admin', createAdmin);

// Protected routes
router.get('/me', authMiddleware, getMe);

export default router;
