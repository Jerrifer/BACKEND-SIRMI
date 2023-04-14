const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const learningResultModel = require("../models/learningResult.model");

const validateLearningResult = [
  check("learning_result")
    .exists().withMessage("Debe ingresar el resultado de aprendizaje")
    .isLength({ max: 100 }).withMessage("El resultado de aprendizaje no puede tener más de 100 caracteres"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateLearningResultById = [
  param("id").custom((value) => {
    return learningResultModel.findById(value).then((learningresult) => {
      if (!learningresult) {
        return Promise.reject(
          "El resultado de aprendizaje que buscas no está registrada"
        );
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateLearningResult, validateLearningResultById };
