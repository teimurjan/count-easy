import {Router} from 'express'
import jwt from 'jsonwebtoken'
import c from 'config'
import Pathes from '../consts/pathes'
import {findByLogin, createUser} from '../models/user'
import {comparePasswords, encryptPassword} from '../utils/auth'
import {response, error} from '../utils/controller'
import UnauthorizedHttpException from '../exceptions/UnauthorizedHttpException'
import ConflictHttpException from '../exceptions/ConflictHttpException'

const USER_NOT_FOUND = 'User not found';
const PASSWORD_DO_NOT_MATCH = 'Passwords do not match';

const USER_EXISTS = 'User with this login already exists';

const usersRoutes = Router();
const jwtSecret = c.get('jwtSecret');

usersRoutes.post(Pathes.Users.Login, async (req, res) => {
  const {login, password} = req.body;
  const user = await findByLogin(login);
  if (!user) {
    error(res, new UnauthorizedHttpException(USER_NOT_FOUND))
  }
  const isPasswordCorrect = await comparePasswords(password, user.password);
  if (!isPasswordCorrect) {
    error(res, new UnauthorizedHttpException(PASSWORD_DO_NOT_MATCH))
  } else {
    const payload = {id: user.id};
    const token = jwt.sign(payload, payload);
    response(res, {token})
  }
});

usersRoutes.post(Pathes.Users.Register, async (req, res) => {
  const {login, password} = req.body;
  if (await findByLogin(login)) {
    error(res, new ConflictHttpException(USER_EXISTS))
  }
  const encryptedPassword = await encryptPassword(password);
  const user = await createUser({login, password: encryptedPassword});
  const payload = {id: user.id};
  const token = jwt.sign(payload, payload);
  response(res, {token})
});