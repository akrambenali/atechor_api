const express = require("express");
const router = express.Router();

const {
  getScoress,
  getScore,
  createScores,
  updateScores,
  deleteScores
} = require("../controller/scores");

router.get("/", getScoress);

router.get("/:ScoresID", getScore);

router.post("/", createScores);

router.put("/:ScoresID", updateScores);

router.delete("/:ScoresID", deleteScores);

module.exports = router;
