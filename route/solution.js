const express = require('express')
const router = express.Router()

const  { 
    getSolutions,
    getSolution,
    createSolution,
    updateSolution,
    deleteSolution
} = require('../controller/solution')

router.get('/', getSolutions)

router.get('/:solutionID', getSolution)

router.post('/', createSolution) 

router.put('/:solutionID', updateSolution) 

router.delete('/:solutionID', deleteSolution)

module.exports = router