const express = require("express");

const {
  improveProjectController,
} = require("../controllers/projectController");

const router = express.Router();

router.post("/improve", improveProjectController);

module.exports = router;