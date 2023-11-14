const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {
    rate: { type: "String" },
    comment: { type: "String" },
   
  },
  { timestamps: { createdAt: "created_at" } }
);

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;
