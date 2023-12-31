const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, "Minimum password length is 6 characters"]
  },
});

userSchema.post('save', function (doc, next) {

  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;
