const express = require("express");
const router = express.Router();
const Question = require("./models/Question");

router.post("/create", async (req, res) => {
  try {
    const { userId, productId, avatar, name, description, date } = req.body;

    const newQuestion = new Question({
      userId,
      productId,
      avatar,
      name,
      description,
      date,
    });
    console.log("newQuestion:", newQuestion);

    await newQuestion.save();
    res.status(200).json({ message: "Question was created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating question" });
  }
});

router.get("/collect", async (req, res) => {
  try {
    const productId = req.query.productId;
    const questions = await Question.find({ productId: productId });
    if (questions) {
      return res.json(questions);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching questions" });
  }
});

module.exports = router;
