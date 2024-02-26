const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
class authController {
  async registration(req, res) {
    try {
      const { name, email, username, password } = req.body;

      if (password.length < 4 || password.length > 21) {
        return res
          .status(400)
          .json({ message: "Password must be between 4 and 21 characters" });
      }
      const incorrectEmail = await User.findOne({ email });
      if (incorrectEmail) {
        return res
          .status(400)
          .json({ message: "User with this email already registered" });
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({ message: "Invalid email" });
      }

      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "User with this name already exists" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({
        name,
        email,
        username,
        password: hashPassword,
      });
      console.log("User successfully registered:", user);
      await user.save();
      return res.json({ message: "User was successfully registered" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: `User ${username} not found` });
      }
      if (password.length < 4 || password.length > 21) {
        return res
          .status(400)
          .json({ message: "Password must be between 4 and 21 characters" });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = generateAccessToken(user._id);
      return res.json({ token, name: user.name, userId: user._id });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async uploadAvatar(req, res) {
    try {
      const user = await User.findById(req.get("userId"));

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      user.avatar = req.file.buffer;
      await user.save();

      res.json({
        message: "Avatar uploaded successfully",
        avatar: user.avatar.toString("base64"),
      });
    } catch (error) {
      console.error("Error uploading avatar:", error);
      res.status(400).json({ message: "Error uploading avatar" });
    }
  }

  async getAvatar(req, res) {
    try {
      const userId = req.query.userId;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });
      if (!user) {
        return res.status(404).json({ message: "Avatar not found" });
      } else if (user.avatar) {
        return res.json({ avatar: user.avatar.toString("base64") });
      }
    } catch (error) {
      res.status(500).json({ message: "Error getting avatar", error });
    }
  }

  async updateBillingAddress(req, res) {
    try {
      const { userId, billingAddress } = req.body;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.billingAddress !== billingAddress) {
        user.billingAddress = billingAddress;
        await user.save();
        return res.json({ message: "Billing address updated successfully" });
      } else {
        console.log("Billing address is the same, no need to update");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating billing address" });
    }
  }

  async getBillingAddress(req, res) {
    try {
      const userId = req.query.userId;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });
      if (!user) {
        return res.status(404).json({ message: "Address not found" });
      } else if (user && user.billingAddress) {
        return res.json(user.billingAddress);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting billing address" });
    }
  }

  async updateShippingAddress(req, res) {
    try {
      const { userId, shippingAddress } = req.body;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.shippingAddress !== shippingAddress) {
        user.shippingAddress = shippingAddress;
        await user.save();
        return res.json({ message: "Shipping address updated successfully" });
      } else if (user && user.shippingAddress) {
        console.log("Billing address is the same, no need to update");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating shipping address" });
    }
  }

  async getShippingAddress(req, res) {
    try {
      const userId = req.query.userId;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });
      if (!user) {
        return res.status(404).json({ message: "Address not found" });
      } else {
        return res.json(user.shippingAddress);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting shipping address" });
    }
  }
}

module.exports = new authController();
