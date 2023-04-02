const express = require("express");
const router = express.Router();
const competenceController = require("../controller/competence.controller");
const { validateCompetence, validateCompetenceById, validateCompetenceByCode } = require('../validators/competences.validator')

router.get("/", competenceController.getCompetences);

router.get("/:id", validateCompetenceById, competenceController.getCompetence);

router.post("/", validateCompetence, validateCompetenceByCode, competenceController.createCompetence);

router.put("/:id", validateCompetenceById, validateCompetence, competenceController.updateCompetence);

router.delete("/:id", validateCompetenceById, competenceController.deleteCompetence);

module.exports = router;
