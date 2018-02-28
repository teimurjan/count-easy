import bcrypt from 'bcrypt';
import c from 'config';

const saltRounds = c.has('saltRounds') ? c.get('saltRounds') : null;

export const encryptPassword = (password) => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};