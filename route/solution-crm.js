const express = require('express')
const router = express.Router()

const  { 
    getSolutionsCrm,
    getSolutionCrm,
    createSolutionCrm,
    updateSolutionCrm,
    deleteSolutionCrm
} = require('../controller/solution-crm')

router.get('/', getSolutionsCrm)

router.get('/:solutionID', getSolutionCrm)

router.post('/', createSolutionCrm) 

router.put('/:solutionID', updateSolutionCrm) 

router.delete('/:solutionID', deleteSolutionCrm)

module.exports = router