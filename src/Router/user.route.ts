import { Router } from 'express';
import { signup, updateUser } from '../Controller/user.controller';
import { login, protect } from '../Controller/auth.controller';

let router = Router();
router.route('/:teamNo').patch(protect, updateUser);
router.route('/login').post(login);
router.route('/signup').post(signup);

export default router;
