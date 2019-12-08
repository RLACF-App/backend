const express = require('express');
const passport = require('../auth/jwtstrategy');

const router = express.Router();
// module.exports = passport.authenticate('jwt', { session: false });

router.use('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  // res.status(200).json({ message: 'success' });
  next();
});

module.exports = router;
