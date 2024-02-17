const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");

router.post(
  "/registration",
  [
    check("name", "Name cannot be empty").notEmpty(),
    check("email", "Invalid email").isEmail(),
    check("username", "User name cannot be empty").notEmpty(),
    check(
      "password",
      "Password must be greater than 4 and less than 21 characters"
    ).isLength({ min: 4, max: 21 }),
  ],
  async (req, res) => {
    await controller.registration(req, res);
  }
);
router.post("/login", async (req, res) => {
  await controller.login(req, res);
});

module.exports = router;
