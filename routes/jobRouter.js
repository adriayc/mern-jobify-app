import { Router } from 'express';
// Custom middlewares
import { validateJobInput } from '../middleware/validationMiddleware.js';
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
  .get(getSingleJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
