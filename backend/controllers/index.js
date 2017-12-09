import {Router} from 'express'
import Pathes from '../consts/pathes'
import UsersRouter from './users'

const router = Router();
router.use(Pathes.Users.Root, UsersRouter);
export default router;