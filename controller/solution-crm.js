const SolutionCrm = require("../model/solution-crm");

const getSolutionsCrm = (req, res) => {
  SolutionCrm.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getSolutionCrm = (req, res) => {
  SolutionCrm.findOne({ _id: req.params.solutionID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Solution not found" }));
};

const createSolutionCrm = (req, res) => {
  SolutionCrm.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateSolutionCrm = (req, res) => {
  SolutionCrm.findOneAndUpdate({ _id: req.params.SolutionID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Solution not found" }));
};

const deleteSolutionCrm = (req, res) => {
  SolutionCrm.findOneAndDelete({ _id: req.params.SolutionID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Solution not found" }));
};

module.exports = {
  getSolutionsCrm,
  getSolutionCrm,
  createSolutionCrm,
  updateSolutionCrm,
  deleteSolutionCrm,
};
