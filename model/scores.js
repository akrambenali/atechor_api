const mongoose = require('mongoose')
const { Score } = require('./score')
const uuid = require('uuid');

const SearchSchema = new mongoose.Schema({
    "id": { type: String, default: uuid.v4 },
    scores: [Score] ,
    "coefficients": {
        "software": {
          "type": "String"
        },
        "price": {
          "type": "String"
        },
        "provider": {
          "type": "String"
        },
        "compatibility": {
            "type": "String"
          },
          "positionning": {
            "type": "String"
          }
      },
})

const Scores = mongoose.model('Scores', SearchSchema)

module.exports = Scores