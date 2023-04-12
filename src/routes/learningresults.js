const express = require("express");
const router = express.Router();
const learningResultController = require("../controller/learningResult.controller");
const { validateLearningResult, validateLearningResultById } = require('../validators/learningResults.validator')

router.get("/", learningResultController.getLearningResults);

router.get("/:id", validateLearningResultById, learningResultController.getLearningResult);

router.post("/", validateLearningResult, learningResultController.createLearningResult);

router.put("/:id", validateLearningResultById, learningResultController.updateLearningResult);

router.delete("/:id", validateLearningResultById, learningResultController.deleteLearningResult);

router.get("/bycompetence/:id", learningResultController.LearningResultsByCompetence);


module.exports = router;
