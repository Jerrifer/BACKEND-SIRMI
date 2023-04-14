const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const competenceModel = require("../models/competence.model");

const validateCompetence = [
  check("labor_competence_code")
    .exists().withMessage("Debe ingresar el código de la competencia laboral")
    .isLength({ max: 20 }).withMessage("El código de la competencia laboral no puede tener más de 20 digitos"),

  check("labor_competition")
    .exists().withMessage("Debe ingresar una competencia laboral"),

  check("labor_competition_version")
    .exists().withMessage("Debe ingresar la versión de la competencia laboral")
    .isLength({ max: 10 }).withMessage("La versión de la competencia laboral no puede tener más de 10 digitos"),

  check("duration")
    .exists().withMessage("Debe ingresar una duración estimada para la competencia laboral")
    .isInt().withMessage("La duración estimada deben ser datos númericos")
    .isLength({ max: 10 }).withMessage("La duración estimada no puede tener más de 10 digitos"),

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
