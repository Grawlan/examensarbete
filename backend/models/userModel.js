const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: [true, 'Email already in use'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    user_type: {
      type: String,
      required: true,
      default: 'user',
    },
    // company: {
    //   type: String,
    //   required: [true, 'Please add a company'],
    // },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
