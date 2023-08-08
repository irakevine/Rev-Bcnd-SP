import express from 'express'
import path from 'path';
const app = express()
const   PORT = 3000 || Process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})



