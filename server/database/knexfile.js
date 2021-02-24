// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "syamsulzaman",
      database: "tripstation" 
    },
    //connection: {
      //host: process.env.DATABASE_HOST,
      //user: process.env.DATABASE_USER,
      //password: process.env.DATABASE_PASSWORD,
      //database: process.env.DATABASE_NAME 
    //},
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
