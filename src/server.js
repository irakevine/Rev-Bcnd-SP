import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import express from 'express';
import db from '../database/models/index.js';


dotenv.config()
const app = express();
console.log('hell');
const {DB_NAME,DB_USER,DB_PASSWORD,DB_PORT,PORT}=process.env
const server = app.listen(PORT);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});
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
