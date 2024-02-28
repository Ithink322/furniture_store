const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRouter = require("./authRouter");
const questionsRouter = require("./questionsRouter");
const reviewsRouter = require("./reviewsRouter");
const ordersRouter = require("./ordersRouter");
const cartProductsRouter = require("./cartProductsRouter");
const wishlistProductsRouter = require("./wishlistProductsRouter");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use("/auth", authRouter);
app.use("/questions", questionsRouter);
app.use("/reviews", reviewsRouter);
app.use("/orders", ordersRouter);
app.use("/cart", cartProductsRouter);
app.use("/wishlist", wishlistProductsRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ithink322:Lyblumamy_17z@cluster0.sjcmrdo.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
