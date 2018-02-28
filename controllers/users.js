import { Router } from 'express';
import Paths from '../consts/paths';
import { signIn, signUp } from '../services/users';
import { response, error } from '../utils/controller';
import checkForRequiredFields from '../utils/validators';

const usersRoutes = Router();

usersRoutes.post(Paths.Users.Login, async (req, res) => {
  try {
    checkForRequiredFields(req.body, ['login', 'password']);
    const { login, password } = req.body;
    const data = await signIn(login, password);
    return response(res, data);
  } catch (err) {
    return error(res, err);
  }
});

usersRoutes.post(Paths.Users.Register, async (req, res) => {
  try {
    checkForRequiredFields(req.body, ['login', 'password']);
    const { login, password } = req.body;
    const data = await signUp(login, password);
    return response(res, data);
  } catch (err) {
    return error(res, err);
  }
});

export default usersRoutes;