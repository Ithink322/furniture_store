const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderId: { type: String, required: true },
  date: { type: String, required: true },
  deliveryStatus: { type: String, default: "Pending", required: true },
  total: { type: Number, required: true },
  payment: { type: String, required: true },
  name: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
