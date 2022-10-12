const User = require('../models/userModel')

// LOGIN USER
const loginUser = async (req, res) => {
  res.json({ mssg: 'login user' })
}



// SIGNUP USER
const signupUser = async (req, res) => {
  res.json({ mssg: 'signup user' })
}

module.exports = { loginUser, signupUser }