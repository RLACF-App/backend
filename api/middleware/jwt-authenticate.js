const express = require('express');
const passport = require('../auth/jwtstrategy');

// const router = express.Router();
module.exports = () => { return passport.authenticate('jwt', { session: false }) }

// router.use('/', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.status(200).json({ message: 'success' });
// });

// module.exports = router;
