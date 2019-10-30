const db = require('../../data/dbConfig');

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(([id]) => db('users')
      .where({ id })
      .first());
}

module.exports = {
  add,
};
