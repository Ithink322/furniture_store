const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const ordersRouter = require("./ordersRouter");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(fileUpload());
app.use("/auth", authRouter);
app.use("/orders", ordersRouter);

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
