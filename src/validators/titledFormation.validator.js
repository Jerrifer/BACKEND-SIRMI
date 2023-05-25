const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const UserModel = require("../models/user.model");
const FormationProgramModel = require("../models/formationProgram.model");
const CompetenceModel = require("../models/competence.model");

const validateTitledFormation = [

//   check("ficha")
//     .exists().withMessage("Debe ingresar el nombre del usuario"),

//   check("activity")
//     .exists().withMessage("Debe ingresar los apellidos del usuario"),

//   check("formation_program")
//     .exists().withMessage("Debe ingresar una contraseña"),

//   check("email")
//     .exists().withMessage("Debe ingresar un correo electrónico"),

//   check("competence")
//     .exists().withMessage("Debe ingresar un número de contacto"),

//   check("rmi")
//     .exists().withMessage("Debe ingresar un número de identificación"),

//   check("shared_event")
//     .exists().withMessage("Debe ingresar un número de identificación"),

//   check("workdays")
//     .exists().withMessage("Debe ingresar un número de identificación"),

//   check("schedule")
//     .exists().withMessage("Debe ingresar un número de identificación"),



//   check("formation_program")
//     .exists().withMessage("Debe seleccionar un programa de formación")
//     .custom((value) => {
//       return FormationProgramModel.findById(value).then((formationProgram) => {
//         if (!formationProgram) {
//           return Promise.reject("El programa de formación que ingresaste no existe");
//         }
//       });
//     }),

  check("competence.competence")
    .exists().withMessage("Debe seleccionar una competencia laboral")
    .isInt().withMessage("La competencia laboral debe ser un valor númerico")
    .custom((value) => {
      return CompetenceModel.findById(value).then((competence) => {
        if (!competence) {
          return Promise.reject("La competencia laboral que ingresaste no existe");
        }
      });
    }),

//   check("competence.learning_results")
//     .exists().withMessage("Debe seleccionar al menos un resultado de aprendizaje")
//     .isInt().withMessage("La competencia laboral debe ser un valor númerico")
//     .custom((value) => {
//       return CompetenceModel.findById(value).then((competence) => {
//         if (!competence) {
//           return Promise.reject("La competencia laboral que ingresaste no existe");
//         }
//       });
//     }),

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

module.exports = { validateTitledFormation, validateUserById };
