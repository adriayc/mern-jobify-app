import { Router } from 'express';
// Controllers
import { register, login, logout } from '../controllers/authController.js';
// Custom middlewares
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.delete('/logout', logout);

export default router;
