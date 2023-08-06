import { Router } from 'express';
const router = Router();
import resourceRoute from './resource';
import { checkAuthToken } from '../middleware/auth';
import userRoute from './user';
import postsRoute from './posts';
import githubRouter from './github';

// All routes for api
router.use('/user', userRoute);
router.use('/resource', checkAuthToken, resourceRoute);
router.use('/posts', postsRoute);
router.use('/github', githubRouter);

export default router;
