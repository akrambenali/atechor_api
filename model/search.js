const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({
  compatibility: {
    secteur: {
      type: ["Mixed"],
    },
    size: {
      A: {
        type: "Boolean",
      },
      B: {
        type: "Boolean",
      },
      C: {
        type: "Boolean",
      },
      D: {
        type: "Boolean",
      },
      E: {
        type: "Boolean",
      },
      F: {
        type: "Boolean",
      },
    },
    companySize: {
      A: {
        type: "Boolean",
      },
      B: {
        type: "Boolean",
      },
      C: {
        type: "Boolean",
      },
      D: {
        type: "Boolean",
      },
      E: {
        type: "Boolean",
      },
      F: {
        type: "Boolean",
      },
    },
    fonctions: {
      type: ["Mixed"],
    },
    usersNumber: {
      A: {
        type: "Boolean",
      },
      B: {
        type: "Boolean",
      },
      C: {
        type: "Boolean",
      },
      D: {
        type: "Boolean",
      },
      E: {
        type: "Boolean",
      },
      F: {
        type: "Boolean",
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
    reason: {
      sao: {
        type: "Boolean",
      },
      mf: {
        type: "Boolean",
      },
      pi: {
        type: "Boolean",
      },
      in: {
        type: "Boolean",
      },
      vt: {
        type: "Boolean",
      },
      other: {
        type: "Boolean",
      },
    },
    coefficients: {
      software: {
        type: "Number",
      },
      price: {
        type: "Number",
      },
      vendor: {
        type: "Number",
      },
      Compatibility: {
        type: "Number",
      },
      postion: {
        type: "Number",
      },
    },
  },
  navigationId: {
    type: "Number",
  },
  clientBusiness: {
    b2b: {
      type: "Boolean",
    },
    b2c: {
      type: "Boolean",
    },
    both: {
      type: "Boolean",
    },
  },
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
  connexion: {
    type: "Boolean",
  },
});

const Searches = mongoose.model("Searches", SearchSchema);

module.exports = Searches;