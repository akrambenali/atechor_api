const express = require('express')
const router = express.Router()

const  { 
    getAdvisors,
    getAdvisor,
    createAdvisor,
    updateAdvisor,
    deleteAdvisor
} = require('../controller/advisor')

router.get('/', getAdvisors)

router.get('/:solutionName', getAdvisor)

router.post('/', createAdvisor) 

router.put('/:advisorID', updateAdvisor) 

router.delete('/:advisorID', deleteAdvisor)

module.exports = router