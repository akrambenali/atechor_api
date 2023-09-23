const mongoose = require('mongoose')
const uuid = require('uuid');
const { Score } = require('./score')
const { Searches} =  require('./search')


const SearchSchema = new mongoose.Schema({
    urlId: { type: "String", required: true, default: () => uuid.v4() },
    scores: [Score] ,
    history: Searches
   
})

const Scores = mongoose.model('Scores', SearchSchema)

module.exports = Scores