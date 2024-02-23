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

  /* async uploadAvatar(req, res) {
    try {
      const userId = req.get("userId");
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });
      if (
        !req.files ||
        !req.files.avatar ||
        Object.keys(req.files).length === 0
      ) {
        return res.status(400).json({ message: "Avatar file is missing" });
      }

      const avatar = req.file;
      if (!avatar) {
        console.log("Avatar not found");
        return res.status(400).json({ message: "Avatar not found" });
      } else {
        console.log("Avatar exists:", avatar);
        // const avatarData = avatar.data;
        const fs = require("fs");
        const avatarData = fs.readFileSync(avatar.path);
        if (!avatarData) {
          console.log("Avatar data is empty");
          return res.status(400).json({ message: "Avatar data is empty" });
        }
        const avatarDataBase64 = avatarData.toString("base64");
        // console.log("Avatar data in base64:", avatarDataBase64);

        user.avatar = {
          data: avatarData,
          contentType: avatar.mimetype,
        };
        console.log("user.avatar:", user.avatar);
        console.log("Saved avatar data as Buffer:", user.avatar.data);

        await user.save();

        return res.json({
          message: "Avatar uploaded successfully",
          avatar: user.avatar,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error uploading avatar" });
    }
  } */
  async uploadAvatar(req, res) {
    try {
      const userId = req.get("userId");
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
      }
      const userIdObjectId = new ObjectId(String(userId));
      const user = await User.findOne({ _id: userIdObjectId });
      console.log("user:", user);

      const avatar = req.file;
      if (!avatar) {
        return res.status(400).json({ message: "Avatar not found" });
      }

      const avatarData = avatar.buffer.toString("base64");
      user.avatar = {
        data: avatarData,
        contentType: avatar.mimetype,
      };

      await user.save();

      return res.json({
        message: "Avatar uploaded successfully",
        avatar: user.avatar,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error uploading avatar" });
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
