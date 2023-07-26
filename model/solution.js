const mongoose = require('mongoose')


const SolutionSchema = new mongoose.Schema({
  "solutionName": {
    "type": "String"
  },
  "brandImg": {
    "type": "String"
  },
  "email": {
    "type": "String"
  },
  "urlCompany": {
    "type": "String"
  },
  "userRate": {
    "type": "Number"
  },
  "expertRate": {
    "type": "Number"
  },
  "solutionPopularty": {
    "type": "Number"
  },
  "uiux": {
    "type": "Number"
  },
  "featuresCoverage": {
    "type": "Number"
  },
  "security": {
    "type": "Number"
  },
  "performance": {
    "type": "Number"
  },
  "connectivity": {
    "type": "Number"
  },
  "internationnalBusiness": {
    "national": {
      "type": "Boolean"
    },
    "international": {
      "type": "Boolean"
    },
    "both": {
      "type": "Boolean"
    }
  },
  "hosting": {
    "cloud": {
      "type": "Boolean"
    },
    "onPremise": {
      "type": "Boolean"
    },
    "hybrid": {
      "type": "Boolean"
    },
    "saas": {
      "type": "Boolean"
    },
    "any": {
      "type": "Boolean"
    }
  },
  "dev": {
    "low": {
      "type": "Boolean"
    },
    "high": {
      "type": "Boolean"
    },
    "none": {
      "type": "Boolean"
    }
  },
  "valueForMoney": {
    "type": "Number"
  },
  "software": {
    "companyOldness": {
      "type": "Number"
    },
    "revenuePerClient": {
      "type": "Number"
    },
    "innovations": {
      "type": "Number"
    },
    "TerritoryMesh": {
      "type": "Number"
    },
    "userRate": {
      "type": "Number"
    },
    "siteWebQuality": {
      "type": "Number"
    },
    "partnershipEchoSystem": {
      "type": "Number"
    },
    "numberOfEmployes": {
      "type": "Number"
    },
    "SAV": {
      "type": "Number"
    },
    "RSE": {
      "type": "Number"
    },
    "eventOrganisation": {
      "type": "Number"
    },
    "ResourcesMadeAvailable": {
      "type": "Number"
    }
  },
  "compatibility": {
    "secteur": {
      "services": {
        "type": "Number"
      },
      "manufacturing": {
        "type": "Number"
      },
      "construction": {
        "type": "Number"
      },
      "retail": {
        "type": "Number"
      },
      "finance": {
        "type": "Number"
      },
      "govNgo": {
        "type": "Number"
      },
      "energy": {
        "type": "Number"
      },
      "transport": {
        "type": "Number"
      },
      "aerospace": {
        "type": "Number"
      }
    },
    "size": {
      "A": {
        "type": "Number"
      },
      "B": {
        "type": "Number"
      },
      "C": {
        "type": "Number"
      },
      "D": {
        "type": "Number"
      },
      "E": {
        "type": "Number"
      },
      "F": {
        "type": "Number"
      }
    },
    "implemntation": {
      "M1": {
        "type": "Boolean"
      },
      "M6": {
        "type": "Boolean"
      },
      "A1": {
        "type": "Boolean"
      },
      "A100": {
        "type": "Boolean"
      },
      "any": {
        "type": "Boolean"
      }
    },
    "position": {
      "type": "Number"
    }
  }
})

const Solution = mongoose.model('Solution', SolutionSchema)

module.exports = Solution