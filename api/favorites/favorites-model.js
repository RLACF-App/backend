const db = require('../data/dbConfig');


function findById(id) {
  return db('volunteer_opportunity').where({ volunteer_id: id });
}

module.exports = {
  findById,
};
