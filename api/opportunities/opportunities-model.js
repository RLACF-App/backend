const db = require('../data/dbConfig');

function find() {
  return db('opportunities');
}

function findById(id) {
  return db('opportunities').where({ id }).first();
}

module.exports = {
  find,
  findById,
};
