const express = require('express')

// CONTROLLER FUNCTIONS
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// LOGIN ROUTE
router.post('/login', loginUser)

// SIGNUP ROUTE
router.post('/signup', signupUser)


module.exports = router