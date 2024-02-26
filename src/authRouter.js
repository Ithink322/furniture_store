const Router = require("express");
const router = new Router();
const controller = require("./authController");
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/registration", async (req, res) => {
  await controller.registration(req, res);
});
router.post("/login", async (req, res) => {
  await controller.login(req, res);
});
router.post("/upload-avatar", upload.single("avatar"), async (req, res) => {
  await controller.uploadAvatar(req, res);
});
router.get("/get-avatar", async (req, res) => {
  await controller.getAvatar(req, res);
});
router.post("/update-billing-address", async (req, res) => {
  await controller.updateBillingAddress(req, res);
});
router.get("/get-billing-address", async (req, res) => {
  await controller.getBillingAddress(req, res);
});
router.post("/update-shipping-address", async (req, res) => {
  await controller.updateShippingAddress(req, res);
});
router.get("/get-shipping-address", async (req, res) => {
  await controller.getShippingAddress(req, res);
});

module.exports = router;
