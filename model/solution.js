const uuid = require('uuid');
const mongoose = require("mongoose");


const SolutionSchema = new mongoose.Schema({
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
    companyOldness: {
      type: "Number",
    },
    revenuePerClient: {
      type: "Number",
    },
    innovations: {
      type: "Number",
    },
    TerritoryMesh: {
      type: "Number",
    },
    userRate: {
      type: "Number",
    },
    siteWebQuality: {
      type: "Number",
    },
    partnershipEchoSystem: {
      type: "Number",
    },
    numberOfEmployes: {
      type: "Number",
    },
    support: {
      type: "Number",
    },
    RSE: {
      type: "Number",
    },
    eventOrganisation: {
      type: "Number",
    },
    ResourcesMadeAvailable: {
      type: "Number",
    },
    fame: {
      type: "Number",
    },
    total: {
      type:  "Number",
    }
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
    features: {
      finance: {
        type: "Boolean",
      },
      CRM: {
        type: "Boolean",
      },
      vente: {
        type: "Boolean",
      },
      RH: {
        type: "Boolean",
      },
      projets: {
        type: "Boolean",
      },
      achats: {
        type: "Boolean",
      },
      production: {
        type: "Boolean",
      },
      logistique: {
        type: "Boolean",
      },
      services: {
        type: "Boolean",
      },
      actifs: {
        type: "Boolean",
      },
      rnd: {
        type: "Boolean",
      },
    },
    position: {
      type: "Number",
    },
    valueForMoney: {
      type: "Number",
    }
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
    userRate: {
      type: "Number",
    },
    expertRate: {
      type: "Number",
    },
    solutionPopularty: {
      type: "Number",
    },
    uiux: {
      type: "Number",
    },
    featuresCoverage: {
      type: "Number",
    },
    security: {
      type: "Number",
    },
    performance: {
      type: "Number",
    },
    connectivity: {
      type: "Number",
    },
    total: {
      type: "Number"
    }
  },
});

const Solution = mongoose.model("Solution", SolutionSchema);

module.exports = Solution;
