const express = require('express');
const volunteer = require('../users/volunteers/volunteer-model');

const router = express.Router();

router.get('/', (req, res) => {
  volunteer.findById(req.authInfo.sub)
    .then((user) => {
      res.status(200).json({ user: user });
    });
});

module.exports = router;
