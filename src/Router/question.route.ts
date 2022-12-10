import { Router } from 'express';
import { questions } from '../Controller/question.controller';
import { protect } from '../Controller/auth.controller';

const router = Router();

router.route('/').get(protect, questions);
export default router;
