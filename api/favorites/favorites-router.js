const express = require('express');
const passport = require('../auth/jwtstrategy');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({ message: 'favorites' });
});

module.exports = router;
