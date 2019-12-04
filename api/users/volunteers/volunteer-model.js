const db = require('../../data/dbConfig');

function add(user) {
  return db('volunteers')
    .insert(user, 'id')
    .then(([id]) => db('volunteers')
      .where({ id })
      .first());
}

function getAll(user) {
  return db('volunteers');
}

function findById(id) {
  return db('volunteers')
    .where({ id })
}

module.exports = {
  add,
  getAll,
  findById,
};
