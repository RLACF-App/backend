
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('opportunities').del()
    .then(function () {
      // Inserts seed entries
      return knex('opportunities').insert([
        {
          id: 1,
          name: 'Roosevelt Center',
          description: 'Volunteers have helped make the Roosevelt Center a vibrant home for arts and culture.  People like you have donated their time, talents, energy, and enthusiasm to help the staff and the Center function as a  community asset and resource.  There are many ways to contribute to the Center and we are always willing to explore new and different opportunities for volunteers.  To become a part of this exciting work or for more information simply complete the volunteer application and the volunteer coordinator will contact you, call 406 446-2820 or e-mail betty@rlacf.org.  We look forward to having you on our team. Thanks for your support!',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 2,
          name: 'Lorem Center',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: 'https://images.unsplash.com/photo-1537877853655-34bdcda5e833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          owner: 1,
        },
      ]);
    });
};
