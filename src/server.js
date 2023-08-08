import express from 'express'

const app = express()
const   PORT = 3000 || Process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})



/////////////////////////////////////////////////////////////////////
const { Sequelize } = require('sequelize');

// Connection 
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect:  'postgres' 
});
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }