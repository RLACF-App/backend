const bcrypt = require('bcryptjs')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, username: 'josh', password: bcrypt.hashSync('pass', 8)},
        {id: 2, username: 'john', password: bcrypt.hashSync('pass', 8)},
        {id: 3, username: 'apple', password: bcrypt.hashSync('pass', 8)},
      ]);
    });
};
