const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')

connectToMongo();

const app = express()
const port = 3006

app.use(cors())
app.use(express.json())

//Available Routes
//app.use('/api/auth', require('./routes/auth'))
//app.use('/api/notes', require('./routes/notes'))
app.use('/api/food', require('./routes/food'))

app.get('/', (req, res) => {
  res.send('Connected to Backend from Frontend....')
})

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})