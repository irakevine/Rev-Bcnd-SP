const dotenv = require ('dotenv');
// dotenv.config();

// const { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT,DB_URL } = process.env;
module.exports = {
  development: {
      // use_env_variable:"DB_URL",
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // database_url: process.env.DB_URL,
      port: process.env.DB_PORT,
      host:process.env.DB_HOST,
      dialectOptions: {},
      dialect: "postgres",
      logging:false
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    database_url: DB_URL,
    port: DB_PORT,
    host:DB_HOST,
    dialect: "postgres"
}
  
}
