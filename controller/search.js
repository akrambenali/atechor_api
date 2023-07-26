const Search = require('../model/search')

const getSearchs = ((req, res) => {
    Search.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getSearch = ((req, res) => {
    Search.findOne({ _id: req.params.SearchID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Search not found'}))
})

const createSearch = ((req, res) => {
    Search.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateSearch = ((req, res) => {
    Search.findOneAndUpdate({ _id: req.params.SearchID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Search not found' }))
})

const deleteSearch = ((req, res) => {
    Search.findOneAndDelete({ _id: req.params.SearchID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Search not found' }))
})

module.exports = {
    getSearchs,
    getSearch,
    createSearch,
    updateSearch,
    deleteSearch
}
