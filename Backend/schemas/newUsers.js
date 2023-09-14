const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmedPassword: {
    type: String,
    required: true,
  },
});

const NewUser = mongoose.model('NewUser', newUserSchema);

module.exports = NewUser;
