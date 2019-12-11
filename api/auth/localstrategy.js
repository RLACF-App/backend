const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const volunteer = require('../users/volunteers/volunteer-model');

passport.use(new LocalStrategy(
  (username, password, done) => {
    volunteer.findByUsername(username).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      return done(null, user);
    })
      .catch((err) => {
        throw new Error('Validation Failed');
      });
  },
));


// TODO remove
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  volunteer.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});

module.exports = passport;
