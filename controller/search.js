const Search = require("../model/search");
const Solution = require("../model/solution");
const Client = require("../model/client");
const Scores = require("../model/scores");
const Score = require("../model/score");
const Notification = require("../handlebars");
const uuid = require("uuid");
require("dotenv").config();

const getSearchs = (req, res) => {
  Search.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const postSearchs = async (req, res) => {
  const request = req.body;
  Search.create(request)
    .then({ msg: "search OK" })
    .catch((error) => res.status(404).json({ msg: "Search not found" }));
  const solutions = await Solution.find({})
    .then({ msg: "Solutions  OK" })
    .catch((error) => res.status(404).json({ msg: "Search not found" }));
  if (request.internationnalBusiness.national)
    solutions.filter((item) => {
      item.internationnalBusiness.national === true;
    });
  if (request.internationnalBusiness.international)
    solutions.filter((item) => {
      item.internationnalBusiness.international === true;
    });
  if (request.internationnalBusiness.both)
    solutions.filter((item) => {
      item.internationnalBusiness.both === true;
    });
  if (request.hosting.cloud)
    solutions.filter((item) => {
      item.hosting.cloud === true;
    });
  if (request.hosting.onPremise)
    solutions.filter((item) => {
      item.hosting.onPremise === true;
    });
  if (request.hosting.hybrid)
    solutions.filter((item) => {
      item.hosting.hybrid === true;
    });
  if (request.hosting.saas)
    solutions.filter((item) => {
      item.hosting.saas === true;
    });
  if (request.hosting.any)
    solutions.filter((item) => {
      item.hosting.any === true;
    });
  if (request.dev.low)
    solutions.filter((item) => {
      item.dev.low === true;
    });
  if (request.dev.high)
    solutions.filter((item) => {
      item.dev.high === true;
    });
  if (request.dev.none)
    solutions.filter((item) => {
      item.dev.none === true;
    });
  if (request.compatibility.implemntation.M1)
    solutions.filter((item) => {
      item.compatibility.implemntation.M1 === true;
    });
  if (request.compatibility.implemntation.M6)
    solutions.filter((item) => {
      item.compatibility.implemntation.M6 === true;
    });
  if (request.compatibility.implemntation.A1)
    solutions.filter((item) => {
      item.compatibility.implemntation.A1 === true;
    });
  if (request.compatibility.implemntation.A100)
    solutions.filter((item) => {
      item.compatibility.implemntation.A100 === true;
    });
  if (request.compatibility.implemntation.any)
    solutions.filter((item) => {
      item.compatibility.implemntation.any === true;
    });
  if (request.compatibility.fonctions) {
    for (
      let index = 0;
      index < request.compatibility.fonctions.length;
      index++
    ) {
      const element = request.compatibility.fonctions[index];
      if (element.value) {
        solutions.filter((item) => {
          item.compatibility.features[element.value] === true;
        });
      }
    }
  }

  let scoreItems = [];
  if (solutions.length > 0) {
    for (let index = 0; index < solutions.length; index++) {
      const element = solutions[index];
      let score = calculateScore(element, req.body.compatibility);
      if (score) {
        scoreItems.push(score);
      }
    }
  }
  if (scoreItems.length > 0) {
    let result;
    result.urlId = uuid.v4();
    let url = process.env.APP_URI + result.urlId;
    result.scores = scoreItems;
    result.history = request;
    Scores.create(result);

    let client = await Client.findOne().sort({ created_at: -1 }).lean().exec();
    Notification.sendNotifEmailClient(
      client.email,
      client.lastName,
      client.firstName,
      url
    );
    Notification.sendNotifEmailAtechor(
      client.lastName,
      client.firstName,
      client.company,
      url
    );

    res.send({
      message: "Resultat de la recherche!",
      result,
    });
    res.status(200);
  }
};

const getSearch = (req, res) => {
  Search.findOne({ _id: req.params.SearchID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Search not found" }));
};

const updateSearch = (req, res) => {
  Search.findOneAndUpdate({ _id: req.params.SearchID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Search not found" }));
};

const deleteSearch = (req, res) => {
  Search.findOneAndDelete({ _id: req.params.SearchID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Search not found" }));
};

function average(array) {
  return array.reduce((x, y) => x + y) / array.length;
}

function calculateScore(solution, request) {
  let itemScore = Score;
  let position =
    solution.compatibility.position * request.coefficients.position; 
  let valueForMoney =
    solution.compatibility.valueForMoney * request.coefficients.price;
  let application = solution.application.total * request.coefficients.software;
  let editeur = solution.software.total * request.coefficients.vendor;
  let companySize = getCompanySize(request.size, solution.compatibility.size);
  let secteur = getSecteur(request.secteur, solution.compatibility.secteur);
  secteur.push(companySize);
  let compatibilite = average(secteur) * request.coefficients.Compatibility;
  let score =
    (position + valueForMoney + application + editeur + compatibilite) /
    calculateSumCoefficients(request.coefficients);
  if (score > 6) {
    itemScore.urlImage = solution.brandImg;
    itemScore.title = solution.solutionName;
    itemScore.Score = score;
    itemScore.software = application;
    itemScore.price = valueForMoney;
    itemScore.provider = editeur;
    itemScore.compatibility = compatibilite;
    itemScore.positionning = position;
    itemScore.urlCompany = solution.urlCompany;
  }
  return itemScore;
}

function getCompanySize(requestCompany, solution) {
  const keys = Object.keys(requestCompany);
  let size = 0;
  for (let i = 0; i < keys.length; i++) {
    const element = requestCompany[keys[i]];
    if (element) {
      size = solution[keys[i]];
    }
  }

  return size;
}

function getSecteur(requestSecteur, solution) {
  let secteur = [];
  for (let i = 0; i < requestSecteur.length; i++) {
    const element = requestSecteur[i];
    if (element.value === true) {
      secteur.push(solution[element.codeSecteur]);
    }
  }
  return secteur;
}

function calculateSumCoefficients(coefficients) {
  const keys = Object.keys(coefficients);
  let sum = 0;
  for (let i = 0; i < keys.length; i++) {
    sum += coefficients[keys[i]];
  }

  return sum;
}

function sum(arr) {
  const reducer = (accumulator, curr) => accumulator + curr;
  return arr.reduce(reducer);
}

module.exports = {
  getSearchs,
  postSearchs,
  getSearch,
  updateSearch,
  deleteSearch,
};
