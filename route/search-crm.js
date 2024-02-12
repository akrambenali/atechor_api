const express = require("express");
const router = express.Router();

const {
  getSearchsCrm,
  postSearchsCrm,
  getSearchCrm,
  updateSearchCrm,
  deleteSearchCrm
} = require("../controller/search-crm");

router.post("/", postSearchsCrm);

router.get("/", getSearchsCrm);

router.get("/:SearchID", getSearchCrm);

router.put("/:SearchID", updateSearchCrm);

router.delete("/:SearchID", deleteSearchCrm);

module.exports = router;