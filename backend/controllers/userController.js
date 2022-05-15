const asyncHandler = require('express-async-handler')

// @desc    Register a new user
// @route   /api/users
// @access  admin
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //validation
  if (!email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  res.send('Register Route')
})
// @desc    Login a user
// @route   /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser,
}
