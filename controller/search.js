const Search = require('../model/scores')
const Solution = require("../model/solution");

/* const getSearchs = ((req, res) => {
    Search.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
}) */

const getSearchs = (async (req, res) => {

    Search.create(req.body)
    const solutions = await Solution.find({});
    
    console.log("req body");
    console.log(req.body);
    res.send({
        message : 'Mise à jour de la Boutique  !!',
      });
    res.status(200)       
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
