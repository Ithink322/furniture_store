const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: Number, required: true },
  hero: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  startColor: { type: String, required: true },
  currentPrice: { type: String, required: true },
  previousPrice: { type: String, required: true },
  qty: { type: Number, required: true },
  description: { type: String, required: true },
  colors: { type: [String], required: true },
  measurements: { type: String, required: true },
});

const CartProduct = mongoose.model("CartProduct", cartProductSchema);

module.exports = CartProduct;
