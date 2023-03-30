const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const learningResultModel = require("../models/learningResult.model");

const validateLearningResult = [
  check("learning_result").exists().isLength({ max: 100 }),

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
