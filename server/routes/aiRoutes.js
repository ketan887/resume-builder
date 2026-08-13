const express = require("express");
const {
  improveSummaryController,
} = require("../controllers/aiController");

const router = express.Router();

router.post("/improve-summary", improveSummaryController);

module.exports = router;