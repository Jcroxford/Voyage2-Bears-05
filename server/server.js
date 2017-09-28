const bodyParser = require('body-parser')
const cors       = require('cors')
const express    = require('express')
const helmet     = require('helmet')
const logger     = require('morgan')

const app = express()

// load custom .env variables
require('./config/config')

// load db config
const mongoose = require('./db/mongoose')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
if(process.env.NODE_ENV === 'development') {
  db.once('open', () => console.log('db connected successfully'))
}

// load middlewares
app.use(helmet())
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

// attach routes to app
require('./routes')(app)

const port = process.env.PORT
app.listen(port, () => {
  if(process.env.NODE_ENV === 'development') {
    console.log(`server listening on http://localhost:${port}`)
  }
})

// app export is for integration testing
module.exports = app
