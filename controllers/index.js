import { Router } from 'express';
import passport from 'passport';
import Paths from '../consts/paths';
import UsersRouter from './users';
import CategoriesRouter from './categories';
import PaymentsRouter from './payments';

const router = Router();
router.use(Paths.Users.Root, UsersRouter);

const authenticatedRouter = Router();
authenticatedRouter.use(passport.authenticate('jwt', { session: false }));

authenticatedRouter.use(Paths.Categories.Root, CategoriesRouter);
authenticatedRouter.use(Paths.Payments.Root, PaymentsRouter);

router.use(authenticatedRouter);
export default router;