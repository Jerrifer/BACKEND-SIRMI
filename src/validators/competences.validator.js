const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const competenceModel = require("../models/competence.model");

const validateCompetence = [
  check("labor_competence_code").exists().isLength({ max: 20 }),

  check("labor_competition").exists(),

  check("labor_competition_version").exists().isLength({ max: 10 }),

  check("duration").exists().isLength({ max: 10 }),

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

const validateCompetenceByCode = [
  check("labor_competence_code").exists().isLength({ max: 20 }).custom((value) => {
    return competenceModel.find({labor_competence_code: value}).then((competence) => {
      if (competence[0]) {
        return Promise.reject("Ya existe una competencia con el mismo código");
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCompetence, validateCompetenceById, validateCompetenceByCode };
