
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteer_opportunity').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer_opportunity').insert([
        {id: 1, volunteer_id: 1, opportunity_id: 2},
        {id: 2, volunteer_id: 3, opportunity_id: 7},
        {id: 3, volunteer_id: 2, opportunity_id: 4},
        {id: 4, volunteer_id: 1, opportunity_id: 3},
        {id: 5, volunteer_id: 1, opportunity_id: 4},
        {id: 6, volunteer_id: 1, opportunity_id: 5},
      ]);
    });
};
