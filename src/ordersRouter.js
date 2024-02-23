const express = require("express");
const router = express.Router();
const Order = require("./models/Order");

router.post("/create", async (req, res) => {
  try {
    const { userId, orderId, date, deliveryStatus, total, payment, name } =
      req.body;

    const newOrder = new Order({
      userId,
      orderId,
      date,
      deliveryStatus,
      total,
      payment,
      name,
    });
    console.log("newOrder:", newOrder);

    await newOrder.save();
    res.status(200).json({ message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating order" });
  }
});
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

router.get("/collect", async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.log("Invalid userId:", userId);
      return res.status(400).json({ message: "Invalid userId" });
    }
    const userIdObjectId = new ObjectId(userId);
    const orders = await Order.find({ userId: userIdObjectId });
    if (orders) {
      return res.json(orders);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

module.exports = router;
