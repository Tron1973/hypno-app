require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const noteRoutes = require('./routes/notes')
const userRoutes = require('./routes/user')

// EXPRESS APP
const app = express()

// MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});

// ROUTES
app.use('/api/notes', noteRoutes)
app.use('/api/user', userRoutes)

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to database and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

