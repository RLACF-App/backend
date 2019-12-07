const express = require('express');
const passport = require('./localstrategy');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/generateToken');

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = generateToken(req.user); // TODO
  res.status(200).json({ message: 'login successful', token });
});

module.exports = router;
