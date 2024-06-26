import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authMiddleware, (req, res) => {
  res.json({ message: 'Login successful', user: req.session.user });
});

export default router;
