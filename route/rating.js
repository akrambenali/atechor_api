const express = require('express')
const router = express.Router()

const  { 
    getRatings,
    getRating,
    createRating,
    updateRating,
    deleteRating
} = require('../controller/rating')

router.get('/', getRatings)

router.get('/:RatingID', getRating)

router.post('/', createRating) 

router.put('/:RatingID', updateRating) 

router.delete('/:RatingID', deleteRating)

module.exports = router