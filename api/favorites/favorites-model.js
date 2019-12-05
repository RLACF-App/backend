const db = require('../data/dbConfig');


function findById(id) {
  return db('volunteer_opportunity')
    .leftJoin('opportunities as o', 'volunteer_opportunity.opportunity_id', 'o.id')
    .where({ volunteer_id: id });
}

function addFav(favorite) {
  console.log(favorite)
  return db('volunteer_opportunity')
    .insert(favorite);
}

function removeFav(volunteerId, oppId) {
  return db('volunteer_opportunity')
    .where({ volunteer_id: volunteerId, opportunity_id: oppId })
    .first()
    .delete();
}

module.exports = {
  findById,
  addFav,
  removeFav,
};
