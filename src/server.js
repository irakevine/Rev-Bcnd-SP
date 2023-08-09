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
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})



