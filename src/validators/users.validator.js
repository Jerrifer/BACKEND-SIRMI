const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const UserModel = require("../models/user.model");
const TrainingCenterModel = require("../models/trainingCenter.model");

const validateUser = [

  check("first_name")
    .exists().withMessage("Debe ingresar el nombre del usuario"),

  check("last_name")
    .exists().withMessage("Debe ingresar los apellidos del usuario"),

  check("password")
    .exists().withMessage("Debe ingresar una contraseña"),

  check("email")
    .exists().withMessage("Debe ingresar un correo electrónico")
    .isEmail().withMessage("Debe ser un correo electrónico"),

  check("contact_number")
    .exists().withMessage("Debe ingresar un número de contacto"),

  check("document_number")
    .exists().withMessage("Debe ingresar un número de identificación"),

  check("training_center")
    .exists().withMessage("Debe seleccionar un centro de formación")
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
