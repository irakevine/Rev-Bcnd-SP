const { Sequelize } = require('sequelize');

// Connection
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect:  'postgres' 
});
