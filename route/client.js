const express = require('express')
const router = express.Router()

const  { 
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
} = require('../controller/client')

router.get('/', getClients)

router.get('/:clientID', getClient)

router.post('/', createClient) 

router.put('/:clientID', updateClient) 

router.delete('/:clientID', deleteClient)

module.exports = router