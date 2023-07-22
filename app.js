const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

const client_routes = require('./route/client')
const cclient_routes = require('./route/cClient')
const solution_routes = require('./route/solution')

require('dotenv').config()


var corsOptions = {
 // origin: ['https://app.silverligne.com/', 'https://api.silverligne.com/']
  origin: '*'
};

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error))

app.use(express.json())
app.use('/api/v1/clients', client_routes)
app.use('/api/v1/cclients', cclient_routes)
app.use('/api/v1/solutions', solution_routes)