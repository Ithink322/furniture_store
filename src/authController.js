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
      const name = user.name;
      return res.json({ token, name });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async uploadAvatar(req, res) {
    try {
      const user = await User.findById(req._id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: "No files were uploaded" });
      }

      const avatar = req.files.avatar;
      const avatarData = avatar.data.toString("base64");
      const avatarContentType = avatar.mimetype;

      user.avatar = {
        data: Buffer.from(avatarData, "base64"),
        contentType: avatarContentType,
      };

      await user.save();

      return res.json({ message: "Avatar uploaded successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error uploading avatar" });
    }
  }
}

module.exports = new authController();
