const express = require('express');
const passport = require('../auth/jwtstrategy');
const generateToken = require('../config/generateToken');

const router = express.Router();

router.use('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({ message: 'success' });
});

module.exports = router;
