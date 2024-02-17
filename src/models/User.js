const { Schema, model } = require("mongoose");

const User = new Schema({
  name: { type: String },
  email: { type: String },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = model("User", User);
