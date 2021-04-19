const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detialSchema = new Schema({
    serialNumber: Number,
    description: String,
    color: String,
    countryOrigin: String,
    yearMade: Number,
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
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  },
  datePurchased: Date,
  // cast: [String],
  
  details: [reviewSchema]

}, {
  timestamps: true
});

module.exports = mongoose.model("Valuable", valuableSchema);