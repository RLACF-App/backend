const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const JwtSecret = require('../config/secrets');
const volunteers = require('../users/volunteers/volunteer-model');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: JwtSecret.jwtSecret,
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  const volunteer = volunteers.findByUsername(parseInt(payload.sub));
  if (volunteer) {
    return done(null, volunteer, payload);
  }
  return done();
}));

module.exports = passport;
