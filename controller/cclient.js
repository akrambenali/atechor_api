const Cclient = require('../model/cClient')

const getCclients = ((req, res) => {
    Cclient.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getCclient = ((req, res) => {
    Cclient.findOne({ _id: req.params.CclientID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Cclient not found'}))
})

const createCclient = ((req, res) => {
    Cclient.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateCclient = ((req, res) => {
    Cclient.findOneAndUpdate({ _id: req.params.CclientID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Cclient not found' }))
})

const deleteCclient = ((req, res) => {
    Cclient.findOneAndDelete({ _id: req.params.CclientID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Cclient not found' }))
})

module.exports = {
    getCclients,
    getCclient,
    createCclient,
    updateCclient,
    deleteCclient
}


/* id: Cclients[index].id,
firstName: req.body.firstName, 
lastName: req.body.lastName, 
company: req.body.company, 
country: req.body.country,
role: req.body.role,
email: req.body.email */