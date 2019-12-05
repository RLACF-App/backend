const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const volunteer = require('../users/volunteers/volunteer-model');

passport.use(new LocalStrategy(
  (username, password, done) => {
    volunteer.findByUsername(username).then((user) => {
      // if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      done(null, user)
    })
      .catch((err) => {
        console.log(err);
      });
  },
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  // console.log(`id: ${id}`);
  volunteer.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});

module.exports = passport;
