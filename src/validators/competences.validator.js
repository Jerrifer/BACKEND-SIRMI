const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const competenceModel = require("../models/competence.model");

const validateCompetence = [
  check("labor_competence_code").exists().isLength({ max: 5 }),

  check("labor_competition").exists(),

  check("labor_competition_version").exists().isLength({ max: 5 }),

  check("duration").exists().isLength({ max: 5 }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateCompetenceById = [
  param("id").custom((value) => {
    return competenceModel.findById(value).then((competence) => {
      if (!competence) {
        return Promise.reject("La competencia que buscas no está registrada");
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCompetence, validateCompetenceById };
