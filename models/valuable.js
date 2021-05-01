const {
  urlencoded
} = require("express");
const mongoose = require("mongoose");
const valuables = require("../controllers/valuables");

const Schema = mongoose.Schema;

const detailSchema = new Schema({
  serialNumber: String,
  description: String,
  color: String,
  countryOrigin: String,
  year: Number,
  pictures: String,


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