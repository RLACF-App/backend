exports.up = (knex) => knex.schema.createTable('opportunities', (tbl) => {
  tbl.increments('id');
  tbl.string('name', 128).notNullable();
  tbl.text('description').notNullable();
  tbl.string('img', 128);
  tbl.integer('owner')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
});

exports.down = (knex) => knex.schema.dropTableIfExists('opportunities');
