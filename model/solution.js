const mongoose = require('mongoose')

const SolutionSchema = new mongoose.Schema({
   
    userRate: string ,
    expertRate: string,
    solutionPopularty: string ,
    interface: string,
    featuresCoverage: string,
    security: string,
    performance: string,
    connectivity: string,
    internationnalBusiness : {
      national: boolean,
      international: boolean,
      both: boolean
    },
     hosting : {
      cloud: boolean,
      onPremise: boolean,
      hybrid: boolean,
      saas: boolean,
      any: boolean
    },
    dev: {
      low:  boolean,
      high:  boolean,
      none:  boolean
    },
    valueForMoney: string,
    software: {
      companyOldness: string ,
      revenuePerClient: string,
      innovations: string ,
      TerritoryMesh: string,
      userRate: string ,
      siteWebQuality: string,
      partnershipEchoSystem: string ,
      numberOfCommercialPerClient: string,
      SAV: string ,
      RSE: string,
      eventOrganisation: string ,
      ResourcesMadeAvailable: string
      
    },
    compatibility: {
      secteur: {
        services: string,
        manufacturing: string,
        construction: string,
        retail: string,
        finance: string,
        govNgo: string,
        energy: string,
        transport: string,
        aerospace: string
      },
      size: {
        A: string,
        B: string,
        C: string,
        D: string,
        E: string,
        F: string
      },
      
      implemntation: {
        M1: boolean,
        M6: boolean,
        A1: boolean,
        A100: boolean,
        any: boolean
      },
      position: 8
    }


})

const Solution = mongoose.model('Solution', SolutionSchema)

module.exports = Solution