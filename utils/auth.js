import bcrypt from 'bcryptjs';
import c from 'config';

const saltRounds = c.has('saltRounds') ? c.get('saltRounds') : 10;

export const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const comparePasswords = (password, hash) => bcrypt.compareSync(password, hash);
