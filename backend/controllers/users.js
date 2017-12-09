import {Router} from 'express'
import c from 'config'
import Pathes from '../consts/pathes'
import {signin, signup} from '../services/users'
import {response, error} from '../utils/controller'

const usersRoutes = Router();
const jwtSecret = c.get('auth.jwtSecret');

usersRoutes.post(Pathes.Users.Login, (req, res) => {
  const {login, password} = req.body;
  return signin(login, password)
    .then(user => response(res, user))
    .catch(err => error(res, err))
});

usersRoutes.post(Pathes.Users.Register, (req, res) => {
  const {login, password} = req.body;
  return signup(login, password)
    .then(user => response(res, user))
    .catch(err => error(res, err))
});

export default usersRoutes;