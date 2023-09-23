const Search = require("../model/search");
const Solution = require("../model/solution");

/* const getSearchs = ((req, res) => {
    Search.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
}) */

const postSearchs = async (req, res) => {
  const request = req.body;
  Search.create(req.body);
  const solutions = await Solution.find({});
  console.log(solutions);
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
    for (let index = 0; index < request.compatibility.fonctions.length; index++) {
      const element = request.compatibility.fonctions[index];
      if (element.value) {
        solutions.filter((item) => {
          item.compatibility.features[element.value] === true;
        });
      }
    }
  }
  

  console.log(solutions);

  res.send({
    message: "Mise à jour de la Boutique  !!",
  });
  res.status(200);
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

module.exports = {
  postSearchs,
  getSearch,
  updateSearch,
  deleteSearch,
};
