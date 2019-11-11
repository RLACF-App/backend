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
      directory: './api/data/seeds',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: './api/data/migrations',
    },
    seeds: {
      directory: './api/data/seeds',
    },
  },
};
