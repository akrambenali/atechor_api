const Scores = require('../model/scores')

const getScoress = ((req, res) => {
    Scores.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getScore = ((req, res) => {
    Scores.findOne({ urlId: req.params.ScoresID })
        .then(result => res.status(200).send(result))
        .catch(() => res.status(404).json({msg: 'Scores not found'}))
})

const createScores = ((req, res) => {
    Scores.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateScores = ((req, res) => {
    Scores.findOneAndUpdate({ _id: req.params.ScoresID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Scores not found' }))
})

const deleteScores = ((req, res) => {
    Scores.findOneAndDelete({ _id: req.params.ScoresID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Scores not found' }))
})

module.exports = {
    getScoress,
    getScore,
    createScores,
    updateScores,
    deleteScores
}


