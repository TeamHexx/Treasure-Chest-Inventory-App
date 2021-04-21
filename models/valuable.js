const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    serialNumber: Number,
    description: String,
    color: String,
    countryOrigin: String,
    year: Number,
    Warranty: Boolean,
    
}, {
  timestamps: true
});

const valuableSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  valuableType: {
    type: String,
      },
  datePurchased: Date,
  details: [detailSchema]

}, {
  timestamps: true
});

module.exports = mongoose.model("Valuable", valuableSchema);