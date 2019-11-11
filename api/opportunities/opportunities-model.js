const db = require('../data/dbConfig');

function find() {
  return db('opportunities');
}

module.exports = {
  find,
};
