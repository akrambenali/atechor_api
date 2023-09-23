const express = require('express')
const router = express.Router()

const  { 
    getSearchs,
    getSearch,
    createSearch,
    updateSearch,
    deleteSearch
} = require('../controller/search')

router.post('/', getSearchs)

router.get('/:SearchID', getSearch)

router.post('/', createSearch) 

router.put('/:SearchID', updateSearch) 

router.delete('/:SearchID', deleteSearch)

module.exports = router