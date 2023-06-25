const express = require('express')
const router = express.Router()

const  { 
    getCclients,
    getCclient,
    createCclient,
    updateCclient,
    deleteCclient
} = require('../controller/cclient')

router.get('/', getCclients)

router.get('/:CclientID', getCclient)

router.post('/', createCclient) 

router.put('/:CclientID', updateCclient) 

router.delete('/:CclientID', deleteCclient)

module.exports = router