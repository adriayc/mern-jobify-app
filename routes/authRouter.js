import { Router } from 'express';
// Security package
import rateLimiter from 'express-rate-limit';
// Controllers
import { register, login, logout } from '../controllers/authController.js';
// Custom middlewares
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

const router = Router();

// Setup rate limiter (Security)
const apiLimiter = rateLimiter({
  windowMs: 1000 * 60 * 15, // 15 min
  max: 15,
  message: { msg: 'IP rate limit exceeded, retry in 15 minutes' },
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.delete('/logout', logout);

export default router;
