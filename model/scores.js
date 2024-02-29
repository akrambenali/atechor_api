const mongoose = require("mongoose");
const { Score } = require("./score");

const ScoresSchema = new mongoose.Schema(
  {
    urlId: { type: "String" },
    scores: ["Mixed"],
    history: {
      type: ["Mixed"],
    },
    iScontact: { type: "Boolean" },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Scores = mongoose.model("Scores", ScoresSchema);

module.exports = Scores;