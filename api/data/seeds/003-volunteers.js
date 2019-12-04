
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, username: 'josh', password: 'pass'},
        {id: 2, username: 'john', password: 'pass'},
        {id: 3, username: 'apple', password: 'pass'},
      ]);
    });
};
