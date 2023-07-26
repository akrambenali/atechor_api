const mongoose = require('mongoose')
const { Score } = require('./score')

const SearchSchema = new mongoose.Schema({
    "id": {
        "type": "String"
      },
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

const Search = mongoose.model('Search', SearchSchema)

module.exports = Search