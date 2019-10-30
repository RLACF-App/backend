const express = require('express');
const bcrypt = require('bcryptjs');

const Volunteer = require('../users/volunteers/volunteer-model');
const generateToken = require('../config/generateToken');

const router = express.Router();

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Volunteer.add(user)
    .then(() => {
      const token = generateToken(user);
      res.status(201).json({ user, token });
    })
    .catch((error) => {
      console.log(error); //eslint-disable-line
      res.status(500).json(error);
    });
});

module.exports = router;
