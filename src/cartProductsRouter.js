const express = require("express");
const router = express.Router();
const cartProduct = require("./models/CartProduct");

router.post("/add", async (req, res) => {
  try {
    const existingProduct = await cartProduct.findOne({
      productId: req.body.productId,
      userId: req.body.userId,
    });

    if (existingProduct) {
      existingProduct.qty += parseInt(req.body.qty);
      await existingProduct.save();
      res.json({
        message: "Product quantity updated in the cart successfully",
      });
    } else {
      const newProduct = new cartProduct({
        userId: req.body.userId,
        productId: req.body.productId,
        hero: req.body.hero,
        title: req.body.title,
        category: req.body.category,
        startColor: req.body.startColor,
        currentPrice: req.body.currentPrice,
        previousPrice: req.body.previousPrice,
        qty: parseInt(req.body.qty),
        description: req.body.description,
        colors: req.body.colors,
        measurements: req.body.measurements,
      });
      await newProduct.save();
      res.json({ message: "Product added to the cart successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product to the cart" });
  }
});

router.post("/changeCounter", async (req, res) => {
  try {
    const existingProduct = await cartProduct.findOne({
      productId: req.body.productId,
      userId: req.body.userId,
    });

    if (existingProduct) {
      existingProduct.qty = parseInt(req.body.qty);
      await existingProduct.save();
      res.json({ message: "Product quantity updated in cart successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product to the cart" });
  }
});

router.delete("/delete/:productId/:userId", async (req, res) => {
  try {
    const deletedProduct = await cartProduct.findOneAndDelete({
      productId: req.params.productId,
      userId: req.params.userId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully from the cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting product from the cart" });
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
    const products = await cartProduct.find({ userId: userIdObjectId });
    if (products) {
      return res.json(products);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error fetching cart products" });
  }
});

module.exports = router;
