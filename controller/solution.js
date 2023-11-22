const Solution = require("../model/solution");

const getSolutions = (req, res) => {
  Solution.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getSolution = (req, res) => {
  Solution.findOne({ _id: req.params.solutionID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Solution not found" }));
};

const createSolution = (req, res) => {
  Solution.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateSolution = (req, res) => {
  Solution.findOneAndUpdate({ _id: req.params.SolutionID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Solution not found" }));
};

const deleteSolution = (req, res) => {
  Solution.findOneAndDelete({ _id: req.params.SolutionID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Solution not found" }));
};

module.exports = {
  getSolutions,
  getSolution,
  createSolution,
  updateSolution,
  deleteSolution,
};
