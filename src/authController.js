const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const { name, email, username, password } = req.body;

      if (password.length < 4 || password.length > 21) {
        return res
          .status(400)
          .json({ message: "Password must be between 4 and 21 characters" });
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
      const token = generateAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
}

module.exports = new authController();
