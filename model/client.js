const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    firstName: { type: "String" },
    lastName: { type: "String" },
    company: { type: "String" },
    role: { type: "String" },
    email: { type: "String" },
    phoneNumber: { type: "String" },
    acceptTerms: { type: "Boolean" },
    contactOk: { type: "Boolean" },
    type: { type: "string" }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
