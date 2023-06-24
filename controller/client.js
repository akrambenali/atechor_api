const Client = require('../model/client')

const getClients = ((req, res) => {
    Client.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getClient = ((req, res) => {
    Client.findOne({ _id: req.params.clientID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Client not found'}))
})

const createClient = ((req, res) => {
    Client.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateClient = ((req, res) => {
    Client.findOneAndUpdate({ _id: req.params.clientID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Client not found' }))
})

const deleteClient = ((req, res) => {
    Client.findOneAndDelete({ _id: req.params.clientID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Client not found' }))
})

module.exports = {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
}


/* id: Clients[index].id,
firstName: req.body.firstName, 
lastName: req.body.lastName, 
company: req.body.company, 
country: req.body.country,
role: req.body.role,
email: req.body.email */