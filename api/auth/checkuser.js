const express = require('express');
const volunteer = require('../users/volunteers/volunteer-model');

const router = express.Router();

router.get('/', (req, res) => {
  volunteer.findById(req.authInfo.sub)
    .then((user) => {
      res.status(200).json({ message: 'user check successful' });
    });
});

module.exports = router;
