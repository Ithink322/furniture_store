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

module.exports = router;
