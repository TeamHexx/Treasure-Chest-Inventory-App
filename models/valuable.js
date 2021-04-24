module.exports = {
  deleteOne,
}
function deleteOne(valuableIdx) {
  valuables.splice(valuableIdx, 1);
}

const mongoose = require("mongoose");
const valuables = require("../controllers/valuables");
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
  datePurchased: { 
    type: Date,
    default: new Date('01-13-1985')
  },
  details: [detailSchema],
  

  }, {
  timestamps: true
});

module.exports = mongoose.model("Valuable", valuableSchema);