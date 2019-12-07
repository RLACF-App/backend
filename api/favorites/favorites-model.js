const db = require('../data/dbConfig');


function findById(userid) {
  return db('volunteer_opportunity')
    .innerJoin('opportunities as o', 'volunteer_opportunity.opportunity_id', 'o.id')
    .where({ volunteer_id: userid })
    // .select('o.id', 'o.name', 'o.description', 'o.img', 'o.owner')
}

function addFav(favorite) {
  return db('volunteer_opportunity')
    .insert(favorite, 'id')
    .then(([id]) => {
      return db('volunteer_opportunity')
        .where({ id })
        .first();
    });
}

function removeFav(volunteerId, oppId) {
  return db('volunteer_opportunity')
    .where({ volunteer_id: volunteerId, opportunity_id: oppId })
    .then(([fav]) => {
      return db('volunteer_opportunity')
        .where({ id: fav.id })
        .delete();
    });
}

module.exports = {
  findById,
  addFav,
  removeFav,
};
