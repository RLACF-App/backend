const passport = require('passport');
const passportGoogle = require('passport-google-oauth');

const volunteers = require('../users/volunteers/volunteer-model');

const passportConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/authentication/google/redirect'
};

if (passportConfig.clientID) {
  passport.use(new passportGoogle.OAuth2Strategy(passportConfig, (request, accessToken, refreshToken, profile, done) => {
    // See if this user already exists
    let volunteer = volunteers.findByUsername(parseInt(payload.sub));

    if (!volunteer) {
      // They don't, so register them
      volunteer = volunteer.createUser(profile.displayName, 'google', profile.id);
    }
    return done(null, volunteer);
  }));
}