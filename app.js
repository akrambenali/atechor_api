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

/* var allowedOrigins = ['http://13.36.147.168/','https://13.36.147.168/',
                      'http://app.atechor.com', 'https://app.atechor.com', 'http://localhost/' , 'http://13.36.147.168'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
})); */

/* 
mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error)) */

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


