exports.up = (knex) => knex.schema.createTable('volunteers', (tbl) => {
  tbl.increments('id');
  tbl.text('username').notNullable().unique();
  tbl.text('password').notNullable();
});

exports.down = (knex) => knex.schema.dropTableIfExists('volunteers');
