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
    .first()
    .select('id');
}

function findByUsername(username) {
  return db('volunteers')
    .where({ username })
    .first();
}

module.exports = {
  add,
  getAll,
  findById,
  findByUsername,
};
