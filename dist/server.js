import express from 'express';
import dotenv from 'dotenv';

// CONFIGURE DOTENV
dotenv.config();
const app = express();
const {
  PORT
} = process.env;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CREATE EXPRESS SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});