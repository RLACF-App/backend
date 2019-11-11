const express = require('express');
const opportunites = require('./opportunities-model');

const router = express.Router();

router.get('/', (req, res) => {
  opportunites.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json('Server Error');
    });
});

module.exports = router;
