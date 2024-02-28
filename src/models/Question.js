const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: Number, required: true },
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
