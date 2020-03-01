const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.resolve('./src/views'))

// Request parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Express router
app.use(router)

const rootPath = path.resolve('./dist')
app.use(express.static(rootPath))

// DB connection
require('./src/database/connection')
require('./src/boostrap')()

router.use((err, req, res, next) => {
  if (err) return res.send(err.message)
})

const PORT = 5000
app.listen(PORT, err => {
  if (err) return console.log(`Cannot listen on PORT: ${PORT}`)
  console.log(`Server is listening on: http://localhost:${PORT}`)
})
