const db = require('../../data/dbConfig');

// function add(user) {
//   return db('volunteers')
//     .insert(user, 'id')
//     .then(([id]) => db('volunteers')
//       .where({ id })
//       .first());
// }

function findById(id) {
  return db('volunteers')
    .where({ id })
    .first()
    .select('id');
}

function findByUsername(username) {
  return db('volunteers')
    .where({ username })
    .first();
}

module.exports = {
  findById,
  findByUsername,
};
