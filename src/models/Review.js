const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: Number, required: true },
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  selectedRating: { type: Number, required: true },
  date: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
