const express = require("express");

const {
  improveSummaryController,
  improveExperienceController,
  optimizeResumeController,
} = require("../controllers/aiController");

const router = express.Router();


// Improve Summary
router.post(
  "/improve-summary",
  improveSummaryController
);


// Improve Experience
router.post(
  "/improve-experience",
  improveExperienceController
);


// Optimize Entire Resume
router.post(
  "/optimize-resume",
  optimizeResumeController
);


module.exports = router;