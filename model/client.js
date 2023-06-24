const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    firstName: String,
    lastName:  String,
    company: String,
    country: String,
    role: String,
    email: String,


})

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client