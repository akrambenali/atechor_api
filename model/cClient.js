const mongoose = require("mongoose");

const CclientSchema = new mongoose.Schema(
  {
    firstName: { type: "String" },
    lastName: { type: "String" },
    office: { type: "String" },
    endClient: { type: "String" },
    role: { type: "String" },
    email: { type: "String" },
    acceptTerms: { type: "Boolean" },
    contactOk: { type: "Boolean" }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Cclient = mongoose.model("Cclient", CclientSchema);

module.exports = Cclient;
