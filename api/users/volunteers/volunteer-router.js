const express = require('express');
const volunteers = require('./volunteer-model');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.user)
  volunteers.findById()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json('Server Error');
    });
});

router.get('/:id', (req, res) => {
  volunteers.findById(req.params.id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: 'Volunteer not found.' });
      }
    })
    .catch((error) => {
      res.status(500).json('Server Error');
    });
});

// router.post('/form', checkRecaptcha, userSantitation(), validate, (req, res) => {
//   res.status(200).json({ message: 'Success' });
//   mail(req.body.firstname, req.body.lastname, req.body.phone, req.body.email, req.body.opportunity);
// });

module.exports = router;
