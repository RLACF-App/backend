const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const JwtSecret = require('../config/secrets');
const volunteers = require('../users/volunteers/volunteer-model');

const jwtOptions = {
  // Get the JWT from the "Authorization" header.
  // By default this looks for a "JWT " prefix
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  // The secret that was used to sign the JWT
  secretOrKey: JwtSecret.jwtSecret,
  // // The issuer stored in the JWT
  // issuer: config.get('authentication.token.issuer'),
  // // The audience stored in the JWT
  // audience: config.get('authentication.token.audience')
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  console.log('payload', payload)
  const volunteer = volunteers.findByUsername(parseInt(payload.sub));
  if (volunteer) {
    return done(null, volunteer, payload);
  }
  return done();
}));

module.exports = passport;
