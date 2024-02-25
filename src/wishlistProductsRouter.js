const express = require("express");
const router = express.Router();
const WishlistProduct = require("./models/WishlistProduct");

router.post("/add", async (req, res) => {
  try {
    const existingProduct = await WishlistProduct.findOne({
      productId: req.body.productId,
      userId: req.body.userId,
    });

    if (existingProduct) {
      res.json({ message: "Product has already been added to the wishlist" });
    } else {
      const newProduct = new WishlistProduct({
        userId: req.body.userId,
        productId: req.body.productId,
        hero: req.body.hero,
        title: req.body.title,
        category: req.body.category,
        startColor: req.body.startColor,
        currentPrice: req.body.currentPrice,
        previousPrice: req.body.previousPrice,
        qty: 1,
        description: req.body.description,
        colors: req.body.colors,
        measurements: req.body.measurements,
      });
      await newProduct.save();
      res.json({ message: "Product added to the wishlist successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product to the whishlist" });
  }
});

router.delete("/delete/:productId/:userId", async (req, res) => {
  try {
    const deletedProduct = await WishlistProduct.findOneAndDelete({
      productId: req.params.productId,
      userId: req.params.userId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully from the whishlist" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting product from the whishlist" });
  }
});

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
router.get("/get", async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.log("Invalid userId:", userId);
      return res.status(400).json({ message: "Invalid userId" });
    }
    const userIdObjectId = new ObjectId(userId);
    const products = await WishlistProduct.find({ userId: userIdObjectId });
    if (products) {
      return res.json(products);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error fetching wishlist products" });
  }
});

module.exports = router;
