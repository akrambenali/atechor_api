const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

const client_routes = require('./route/client')
const cclient_routes = require('./route/cClient')
const solution_routes = require('./route/solution')
const search_routes = require('./route/search')
const scores_routes = require('./route/scores')


require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/clients', client_routes)
app.use('/api/v1/cclients', cclient_routes)
app.use('/api/v1/solutions', solution_routes)
app.use('/api/v1/search', search_routes)
app.use('/api/v1/scores', scores_routes)

// set port, listen for requests
const PORT = process.env.PORT;
const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
    app.listen(PORT, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();


