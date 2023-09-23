const express = require('express')
const router = express.Router()

const  { 
    postSearchs,
    getSearch,
    updateSearch,
    deleteSearch
} = require('../controller/search')

router.post('/', postSearchs)

router.get('/:SearchID', getSearch)

router.put('/:SearchID', updateSearch) 

router.delete('/:SearchID', deleteSearch)

module.exports = router