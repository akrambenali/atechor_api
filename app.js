const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const client_routes = require("./route/client");
const solution_routes = require("./route/solution");
const solution_crm_routes = require("./route/solution-crm");
const search_routes = require("./route/search");
const search_routes_crm = require("./route/search-crm");
const scores_routes = require("./route/scores");
const rating_routes = require("./route/rating");
const advisor_routes = require("./route/advisor");

require("dotenv").config();

// enabling CORS for some specific origins only. 
let corsOptions = { 
  origin : ['http://localhost:4200', 'https://app.atechor.com',], 
} 
 
app.use(cors(corsOptions)) 

app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); */
app.use("/api/v1/clients", client_routes);
app.use("/api/v1/solutions", solution_routes);
app.use("/api/v1/search", search_routes);
app.use("/api/v1/scores", scores_routes);
app.use("/api/v1/rating", rating_routes);
app.use("/api/v1/solutionsCrm", solution_crm_routes);
app.use("/api/v1/searchCrm", search_routes_crm);
app.use("/api/v1/advisor",  advisor_routes);

// set port, listen for requests
const PORT = process.env.PORT;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
