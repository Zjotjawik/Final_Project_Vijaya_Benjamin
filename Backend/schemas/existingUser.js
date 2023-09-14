const mongoose = require('mongoose');

const existingUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ExistingUser = mongoose.model('ExistingUser', existingUserSchema);

module.exports = ExistingUser;
