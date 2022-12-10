import { Router } from 'express';
import { signup } from '../Controller/user.controller';
import { login } from '../Controller/auth.controller';

let router = Router();

router.route('/login').post(login);
router.route('/signup').post(signup);

export default router;
