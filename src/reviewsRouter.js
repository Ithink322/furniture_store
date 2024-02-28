const express = require("express");
const router = express.Router();
const Review = require("./models/Review");

router.post("/create", async (req, res) => {
  try {
    const {
      userId,
      productId,
      avatar,
      name,
      description,
      selectedRating,
      date,
    } = req.body;

    const newReview = new Review({
      userId,
      productId,
      avatar,
      name,
      description,
      selectedRating,
      date,
    });
    console.log("newReview:", newReview);

    await newReview.save();
    res.status(200).json({ message: "Review was created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating review" });
  }
});

router.get("/collect", async (req, res) => {
  try {
    const productId = req.query.productId;
    const reviews = await Review.find({ productId: productId });
    if (reviews) {
      return res.json(reviews);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

module.exports = router;
