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
    type: String,
    required: false,
  },
  medicalUses: {
    type: [Object],
    required: true,
  },
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;

// {
//   "_id": "ObjectId('')",
//   "hindiName": "Joe Karlsson",
//   "englishName": "MongoDB",
//   "picture": "www.guacvsdousdegv.vasivubsa/bktacsfcu",
//   "medicalUses": [
//       { "symptom": "Fever", "description": "temperatures between 40 and 45 degrees" },  
//       { "symptom": "Nausea",  "description": "Lost of consiusness" }
//   ]
// }
