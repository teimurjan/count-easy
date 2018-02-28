import jwt from 'jsonwebtoken';
import c from 'config';
import { findByLogin, createUser } from '../models/user';
import { comparePasswords, encryptPassword } from '../utils/auth';
import UnauthorizedHttpException from '../exceptions/UnauthorizedHttpException';
import ConflictHttpException from '../exceptions/ConflictHttpException';

const USER_NOT_FOUND = 'User not found';
const PASSWORD_DO_NOT_MATCH = 'Passwords do not match';
const USER_EXISTS = 'User with this login already exists';

const jwtSecret = c.get('auth.jwtSecret');

export const signIn = async (login, password) => {
  const user = await findByLogin(login);
  if (!user) {
    throw new UnauthorizedHttpException(USER_NOT_FOUND);
  }
  const isPasswordCorrect = await comparePasswords(password, user.password);
  if (!isPasswordCorrect) {
    throw new UnauthorizedHttpException(PASSWORD_DO_NOT_MATCH);
  } else {
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtSecret);
    return { token };
  }
};

export const signUp = async (login, password) => {
  if (await findByLogin(login)) {
    throw new ConflictHttpException(USER_EXISTS);
  }
  const encryptedPassword = await encryptPassword(password);
  const user = await createUser({ login, password: encryptedPassword });
  const payload = { id: user.id };
  const token = jwt.sign(payload, jwtSecret);
  return { token };
};
