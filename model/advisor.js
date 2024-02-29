const mongoose = require("mongoose");

const AdvisoSchema = new mongoose.Schema(
  {
    solutionName: { type: "String" },
    advisor: { type: "String" },
    link: { type: "String" },
    logo: { type: "String" },
    status: { type: "Boolean" },
    rules: {
      type: ["Mixed"],
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Advisor = mongoose.model("Advisor", AdvisoSchema);

module.exports = Advisor;
