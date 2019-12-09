const express = require('express');
const passport = require('./localstrategy');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/generateToken');
const volunteer = require('../users/volunteers/volunteer-model');
const { loginSanitation, registerSanitation, validate } = require('../middleware/validate');
const { check, validationResult } = require('express-validator');
const checkRecaptcha = require('../middleware/recpatcha');

const router = express.Router();

router.post('/login', loginSanitation(), validate, passport.authenticate('local', { session: false }), (req, res) => {
  const token = generateToken(req.user); // TODO
  res.status(200).json({ message: 'login successful', token });
});

router.post('/register', registerSanitation(), validate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422);
  }
  const user = { username: req.body.username, password: bcrypt.hashSync(req.body.password, 8) };
  volunteer.add(user)
    .then((newUser) => {
      const token = generateToken(newUser);
      res.status(200).json({ message: 'login successful', token });
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
