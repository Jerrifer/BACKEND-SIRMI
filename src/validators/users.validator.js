const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const UserModel = require("../models/user.model");
const TrainingCenterModel = require("../models/trainingCenter.model");

const validateUser = [

  check("first_name").exists(),
  check("last_name").exists(),
  check("password").exists(),
  check("email").exists(),
  check("contact_number").exists(),
  check("document_number").exists(),
  check("training_center").exists(),


  check("training_center")
    .exists()
    .custom((value) => {
      return TrainingCenterModel.findById(value).then((trainingCenter) => {
        if (!trainingCenter) {
          return Promise.reject("El centro de formación que ingresaste no existe");
        }
      });
    }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUserById = [
  param("id").custom((value) => {
    return UserModel.findById(value).then((user) => {
      if (!user) {
        return Promise.reject(
          "El usuario que buscas no está registrado"
        );
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateUser, validateUserById };
