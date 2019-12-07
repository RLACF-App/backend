exports.up = (knex) => knex.schema.createTable('volunteer_opportunity', (tbl) => {
  tbl.increments('id');
  tbl
    .integer('volunteer_id')
    .references('id')
    .inTable('volunteers')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  tbl
    .integer('opportunity_id')
    .references('id')
    .inTable('opportunities')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
});

exports.down = (knex) => knex.schema.dropTableIfExists('volunteer_opportunity');
