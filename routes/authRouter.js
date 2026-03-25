import { Router } from 'express';
// Controllers
import { register, login } from '../controllers/authController.js';
// Custom middlewares
import { validateRegisterInput } from '../middleware/validationMiddleware.js';

const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', login);

export default router;
