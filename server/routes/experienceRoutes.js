const express = require("express");
const {
  improveExperienceController,
} = require("../controllers/experienceController");

const router = express.Router();

router.post("/improve", improveExperienceController);

module.exports = router;