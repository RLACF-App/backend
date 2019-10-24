const express = require('express');

const router = express.Router();


const mockOpportunities = {
  1: 'first opportunity',
};

router.get('/', (req, res) => {
  res.json(mockOpportunities);
});

module.exports = router;
