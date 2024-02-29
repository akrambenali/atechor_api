const Advisor = require('../model/advisor')

const getAdvisors = ((req, res) => {
    Advisor.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getAdvisor = ((req, res) => {
    Advisor.findOne({ solutionName: req.params.solutionName })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Advisor not found'}))
})

const createAdvisor = ((req, res) => {
    Advisor.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateAdvisor = ((req, res) => {
    Advisor.findOneAndUpdate({ _id: req.params.AdvisorID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Advisor not found' }))
})

const deleteAdvisor = ((req, res) => {
    Advisor.findOneAndDelete({ _id: req.params.AdvisorID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Advisor not found' }))
})

module.exports = {
    getAdvisors,
    getAdvisor,
    createAdvisor,
    updateAdvisor,
    deleteAdvisor
}
