const express = require('express');
const passport = require('../auth/jwtstrategy');
const favorites = require('./favorites-model');

const router = express.Router();

router.get('/', (req, res) => {
  favorites.findById(req.authInfo.sub)
    .then((favs) => {
      res.status(200).json({ favorites: favs });
    });
});

router.post('/addfavorite', (req, res) => {
  const newFav = { volunteer_id: req.authInfo.sub, opportunity_id: req.body.favId };
  favorites.addFav(newFav)
    .then((fav) => {
      res.status(200).json({ fav });
    })
    .catch((err) => {
      console.log(err)
    });
});

router.delete('/removeFavorite', (req, res) => {
  favorites.removeFav(req.authInfo.sub, req.body.favId)
    .then((fav) => {
      res.status(200).json({ fav });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
