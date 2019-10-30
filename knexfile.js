require('dotenv').config();

const dbConnection = process.env.DATABASE_URL;
const tables = {
  dev: 'rlacfdev',
  test: 'test',
};


module.exports = {

  development: {
    client: 'pg',
    connection: `${dbConnection}/${tables.dev}`,
    migrations: {
      directory: './api/data/migrations',
      tableName: 'knex_migrations',
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
  },

};
