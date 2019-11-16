const express = require('express');
const opportunites = require('./opportunities-model');

const router = express.Router();

router.get('/', (req, res) => {
  opportunites.find()
    .then((response) => {
      if (req.query.length) {
        const start = req.query.length;
        const end = parseInt(req.query.length, 10) + 10;
        res.status(200).json(response.slice(start, end));
      }
      else {
        res.status(200).json(response.slice(0, 10));
      }
    })
    .catch((error) => {
      res.status(500).json('Server Error');
    });
});

router.get('/:id', (req, res) => {
  opportunites.findById(req.params.id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: 'Opportunity not found.' });
      }
    })
    .catch((error) => {
      res.status(500).json('Server Error');
    });
});

router.post('/form', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

module.exports = router;
