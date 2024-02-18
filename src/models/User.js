const { Schema, model } = require("mongoose");

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = model("User", User);
