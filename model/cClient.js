const mongoose = require('mongoose')

const CclientSchema = new mongoose.Schema({
    firstName: String,
    lastName:  String,
    office: String,
    endClient: String,
    role: String,
    email: String,


})

const Cclient = mongoose.model('Cclient', CclientSchema)

module.exports = Cclient