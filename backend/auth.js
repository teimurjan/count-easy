import {ExtractJwt, Strategy as JwtStrategy} from 'passport-jwt';
import c from 'config';
import {findById} from './models/user';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: c.get('auth.jwtSecret')
};

export const jwtStrategy = new JwtStrategy(jwtOptions, (payload, next) => {
  const user = findById(payload.id);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});