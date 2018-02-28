import {Router} from 'express'
import passport from 'passport'
import Pathes from '../consts/paths'
import UsersRouter from './users'
import CategoriesRouter from './categories'
import PaymentsRouter from './payments'

const router = Router();
router.use(Pathes.Users.Root, UsersRouter);

const authenticatedRouter = Router();
authenticatedRouter.use(passport.authenticate('jwt', {session: false}));

authenticatedRouter.use(Pathes.Categories.Root, CategoriesRouter);
authenticatedRouter.use(Pathes.Payments.Root, PaymentsRouter);

router.use(authenticatedRouter);
export default router;