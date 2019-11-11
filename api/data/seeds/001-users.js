
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'josh', password: 'pass', type: 'organization'},
        {id: 2, username: 'john', password: 'pass', type: 'volunteer'},
        {id: 3, username: 'apple', password: 'pass', type: 'volunteer'},
      ]);
    });
};
