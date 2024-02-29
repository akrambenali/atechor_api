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
  let SolutionsFiltred = [];
  let secteurFiltred = [];
  let sizeFiltred = [];
  Search.create(request)
    .then({ msg: "search OK" })
    .catch((error) => res.status(404).json({ msg: "Search not found" }));
  const solutions = await Solution.find({})
    .then({ msg: "Solutions  OK" })
    .catch((error) => res.status(404).json({ msg: "Search not found" }));
  if (request.internationnalBusiness.national)
    solutions.filter((item) => {
      return item.internationnalBusiness.national === true;
    });
  if (request.internationnalBusiness.international)
    solutions.filter((item) => {
      return item.internationnalBusiness.international === true;
    });
  if (request.internationnalBusiness.both)
    solutions.filter((item) => {
      return item.internationnalBusiness.both === true;
    });

  if (request.hosting.cloud)
    solutions.filter((item) => {
      return item.hosting.cloud === true;
    });
  if (request.hosting.onPremise)
    solutions.filter((item) => {
      return item.hosting.onPremise === true;
    });
  if (request.hosting.hybrid)
    solutions.filter((item) => {
      return item.hosting.hybrid === true;
    });
  if (request.hosting.saas)
    solutions.filter((item) => {
      return item.hosting.saas === true;
    });
  if (request.hosting.any)
    solutions.filter((item) => {
      return item.hosting.any === true;
    });

  if (request.dev.low)
    solutions.filter((item) => {
      return item.dev.low === true;
    });
  if (request.dev.high)
    solutions.filter((item) => {
      return item.dev.high === true;
    });
  if (request.dev.none)
    solutions.filter((item) => {
      return item.dev.none === true;
    });
  if (request.compatibility.implemntation.M1)
    solutions.filter((item) => {
      return item.compatibility.implemntation.M1 === true;
    });
  if (request.compatibility.implemntation.M6)
    solutions.filter((item) => {
      return item.compatibility.implemntation.M6 === true;
    });
  if (request.compatibility.implemntation.A1)
    solutions.filter((item) => {
      return item.compatibility.implemntation.A1 === true;
    });
  if (request.compatibility.implemntation.A100)
    solutions.filter((item) => {
      return item.compatibility.implemntation.A100 === true;
    });
  if (request.compatibility.implemntation.any)
    solutions.filter((item) => {
      return item.compatibility.implemntation.any === true;
    });
  if (request.compatibility.size.A === true) {
    sizeFiltred = solutions.filter((item) => {
      return item.compatibility.size.A > 0;
    });
  }
  if (request.compatibility.size.B === true) {
    sizeFiltred = solutions.filter((item) => {
      return item.compatibility.size.B > 0;
    });
  }
  if (request.compatibility.size.C === true) {
    sizeFiltred = solutions.filter((item) => {
      return item.compatibility.size.C > 0;
    });
  }
  if (request.compatibility.size.D === true) {
    sizeFiltred = solutions.filter((item) => {
      return item.compatibility.size.D > 0;
    });
  }
  if (request.compatibility.size.E === true) {
    sizeFiltred = solutions.filter((item) => {
      return item.compatibility.size.E > 0;
    });
  }
  if (request.compatibility.size.F === true) {
    sizeFiltred = solutions.filter((item) => {
      return item.compatibility.size.F > 0;
    });
  }
  if (request.compatibility.fonctions) {
    for (let index = 0; index < sizeFiltred.length; index++) {
      const solution = sizeFiltred[index];
      const res = solution.compatibility.features.filter(function (o1) {
        // filter out (!) items in result2
        return request.compatibility.fonctions.some(function (o2) {
          return o1.code === o2.code && o1.value === true && o2.value === true; // assumes unique id
        });
      });
      if (res.length === request.compatibility.fonctions.length) {
        SolutionsFiltred.push(solution);
      }
    }
  }

  if (request.compatibility.secteur) {
    secteurFiltred = SolutionsFiltred.filter((item) => {
      const codeSecteur = request.compatibility.secteur.codeSecteur;

      return (
        item.compatibility.secteur.hasOwnProperty(codeSecteur) &&
        item.compatibility.secteur[codeSecteur] > 0
      );
    });
  }

  let scoreItems = [];
  if (secteurFiltred.length > 0) {
    scoreItems = calculateScore(secteurFiltred, req.body.compatibility);
  }
  if (scoreItems.length > 0) {
    let result = {};
    result.urlId = uuid.v4();
    let url = process.env.APP_URI_ERP + result.urlId;
    result.scores = scoreItems;
    result.history = request;
    let client = await Client.findOne().sort({ created_at: -1 }).lean().exec();
    result.iScontact = client.contactOk;
    Scores.create(result);
    Notification.sendNotifEmailClient(
      client.email,
      client.lastName,
      client.firstName,
      url,
      'ERP'
    );
    Notification.sendNotifEmailAtechor(
      client.lastName,
      client.firstName,
      client.company,
      url,
      client.email,
      client.role,
      client.contactOk,
      client.phoneNumber,
      'ERP'
    );

    res.status(200).json({
      message: "Resultat de la recherche!",
      result,
    });
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

function calculateScore(solutions, request) {
  let scores = [];
  for (let index = 0; index < solutions.length; index++) {
    let solution = solutions[index];
    let itemScore = {};
    let position =
      solution.compatibility.position * request.coefficients.position;
    let valueForMoney =
      solution.compatibility.valueForMoney * request.coefficients.price;
    let application =
      solution.application.total * request.coefficients.software;
    let editeur = solution.software.total * request.coefficients.vendor;
    let companySize = getCompanySize(request.size, solution.compatibility.size);
    if (companySize === 0) {
      continue;
    } else {
      let secteur = getSecteur(request.secteur, solution.compatibility.secteur);
      secteur.push(companySize);
      let compatibilite = average(secteur) * request.coefficients.Compatibility;
      let score =
        (position + valueForMoney + application + editeur + compatibilite) /
        calculateSumCoefficients(request.coefficients);
      if (score >= 6) {
        itemScore.urlImage = solution.brandImg;
        itemScore.title = solution.solutionName;
        itemScore.Score = score;
        itemScore.software = solution.application.total;
        itemScore.price = solution.compatibility.valueForMoney;
        itemScore.provider = solution.software.total;
        itemScore.compatibility = average(secteur);
        itemScore.positionning = solution.compatibility.position;
        itemScore.urlCompany = solution.urlCompany;
      }
      scores.push(itemScore);
    }
  }
  scores = scores.sort((a, b) => parseFloat(b.Score) - parseFloat(a.Score));

  return scores.slice(0, 6);
}

function getCompanySize(requestCompany, solution) {
  const keys = Object.keys(requestCompany);
  let size = 0;
  for (let i = 0; i < keys.length; i++) {
    const element = requestCompany[keys[i]];
    if (element && solution[keys[i]] > 0) {
      size = solution[keys[i]];
    }
  }

  return size;
}

function getSecteur(requestSecteur, solution) {
  let secteur = [];

  if (
    requestSecteur.value === true &&
    solution[requestSecteur.codeSecteur] > 0
  ) {
    secteur.push(solution[requestSecteur.codeSecteur]);
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
