import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import c from 'config';
import { findById } from './models/user';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: c.get('auth.jwtSecret'),
};

export default new JwtStrategy(jwtOptions, async (payload, next) => {
  const user = await findById(payload.id);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
