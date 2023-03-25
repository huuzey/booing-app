const mongoose = require("mongoose");
const placeModel = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  chechIn: Number,
  checkOut: Number,
  maxGuest: Number,
});
const PlaceSchema = mongoose.model("Place", placeModel);
module.exports = PlaceSchema;
