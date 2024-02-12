const uuid = require("uuid");
const mongoose = require("mongoose");

const SolutionCrmSchema = new mongoose.Schema(
  {
    urlId: { type: "String", required: true, default: () => uuid.v4() },
    internationnalBusiness: {
      national: {
        type: "Boolean",
      },
      international: {
        type: "Boolean",
      },
      both: {
        type: "Boolean",
      },
    },
    hosting: {
      cloud: {
        type: "Boolean",
      },
      onPremise: {
        type: "Boolean",
      },
      hybrid: {
        type: "Boolean",
      },
      saas: {
        type: "Boolean",
      },
      any: {
        type: "Boolean",
      },
    },
    dev: {
      low: {
        type: "Boolean",
      },
      high: {
        type: "Boolean",
      },
      none: {
        type: "Boolean",
      },
    },
    software: {
      total: {
        type: "Number",
      },
    },
    compatibility: {
      secteur: {
        services: {
          type: "Number",
        },
        manufacturing: {
          type: "Number",
        },
        construction: {
          type: "Number",
        },
        retail: {
          type: "Number",
        },
        finance: {
          type: "Number",
        },
        govNgo: {
          type: "Number",
        },
        energy: {
          type: "Number",
        },
        transport: {
          type: "Number",
        },
        aerospace: {
          type: "Number",
        },
      },
      size: {
        A: {
          type: "Number",
        },
        B: {
          type: "Number",
        },
        C: {
          type: "Number",
        },
        D: {
          type: "Number",
        },
        E: {
          type: "Number",
        },
        F: {
          type: "Number",
        },
      },
      implemntation: {
        M1: {
          type: "Boolean",
        },
        M6: {
          type: "Boolean",
        },
        A1: {
          type: "Boolean",
        },
        A100: {
          type: "Boolean",
        },
        any: {
          type: "Boolean",
        },
      },
      features: ["Mixed"],
      position: {
        type: "Number",
      },
      valueForMoney: {
        type: "Number",
      },
    },
    id: {
      type: "Date",
    },
    solutionName: {
      type: "String",
    },
    brandImg: {
      type: "String",
    },
    email: {
      type: "String",
    },
    urlCompany: {
      type: "String",
    },
    application: {
      total: {
        type: "Number",
      },
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const SolutionCrm = mongoose.model("Solution_CRM", SolutionCrmSchema);

module.exports = SolutionCrm;
