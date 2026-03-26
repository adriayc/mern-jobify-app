import { Router } from 'express';
// Custom middlewares
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
// Controllers
import {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

const router = Router();

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(validateIdParam, getSingleJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
