import { Sequelize } from 'sequelize'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from '../database/models/index.js'
const app = express();
dotenv.config()
app.use(cors({ origin: '*' }));
const {DB_NAME,DB_USER,DB_PASSWORD,DB_PORT,PORT}=process.env
const server = app.listen(PORT);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
}); // Ibi ntago biba bikenwe muri entry file yawe, wabishyira muri /models/index.js
const dbCon = async () => {
  try {
    await db.sequelize.authenticate();
  } catch (error) {
    console.log(`db error: ${error.message}`);
  }
};

Promise.all([dbCon(), server]).then(() => {
  console.log(`Server listening on port:${PORT}`);
  console.log('DB connection successful');
});
