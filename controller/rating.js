const Rating = require('../model/rating')

const getRatings = ((req, res) => {
    Rating.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getRating = ((req, res) => {
    Rating.findOne({ _id: req.params.RatingID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Rating not found'}))
})

const createRating = ((req, res) => {
    Rating.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateRating = ((req, res) => {
    Rating.findOneAndUpdate({ _id: req.params.RatingID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rating not found' }))
})

const deleteRating = ((req, res) => {
    Rating.findOneAndDelete({ _id: req.params.RatingID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rating not found' }))
})

module.exports = {
    getRatings,
    getRating,
    createRating,
    updateRating,
    deleteRating
}
