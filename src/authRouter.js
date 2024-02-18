const Router = require("express");
const router = new Router();
const controller = require("./authController");

router.post("/registration", async (req, res) => {
  await controller.registration(req, res);
});
router.post("/login", async (req, res) => {
  await controller.login(req, res);
});
router.post("/upload-avatar", async (req, res) => {
  await controller.uploadAvatar(req, res);
});

module.exports = router;
