const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  hindiName: {
    type: [String],
    required: true,
  },
  englishName: {
    type: [String],
    required: true,
  },
  picture: {
    type: String, // You can store the URL to the picture here
    required: false, // It's not required, but you can make it required if necessary
  },
  medicalUses: {
    type: [String],
    required: true,
  },
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;
