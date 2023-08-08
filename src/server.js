import express from 'express'
import dotenv from 'dotenv';


// CONFIGURE DOTENV
dotenv.config();

const app = express()
const { PORT } = process.env;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// CREATE EXPRESS SERVER
const server = app.listen(PORT);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})



