const express = require('express');
const passport = require('../auth/jwtstrategy');

const router = express.Router();

router.use('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  next();
});

module.exports = router;
