const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// CREATE JSON WEB TOKEN
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)

    // CREATE ACCESS TOKEN
    const token = createToken(user._id)
    res.status(200).json({ email, token })

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// SIGNUP USER
const signupUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)

    // CREATE ACCESS TOKEN
    const token = createToken(user._id)
    res.status(200).json({ email, token })

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { loginUser, signupUser }