const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const programLevelModel = require("../models/programLevel.model");
const thematicLineModel = require("../models/thematicLine.model");
const TypeProgramModel = require("../models/typeProgram.model");
const FormationProgramModel = require("../models/formationProgram.model");

const validateFormationProgram = [
  check("program_name")
      .exists().withMessage('Debe ingresar el nombre del programa'),

  check("total_duration")
      .exists().withMessage('Debe ingresar la duración total')
      .isInt().withMessage('La duración estimada deben ser datos numéricos'),

  check("program_version")
    .exists().withMessage('Debe ingresar la versión del programa'),

  check("type_program")
    .exists().withMessage("Debe seleccionar un tipo de programa")
    .isIn(['T', 'C']).withMessage('El tipo del programa debe ser TITULADA o COMPLEMENTARIA')
    .custom((value) => {
      return TypeProgramModel.findById(value).then((type_program) => {
        if (!type_program) {
          return Promise.reject("El tipo de programa que ingresaste no existe");
        }
      });
    }),

  check("thematic_line")
    .exists().withMessage("Debe seleccionar una línea tématica")
    .custom((value) => {
      return thematicLineModel.findById(value).then((thematic_line) => {
        if (!thematic_line) {
          return Promise.reject("La línea tématica que ingresaste no existe");
        }
      });
    }),

  check("program_level")
    .exists().withMessage("Debe seleccionar un título del programa")
    .custom((value) => {
      return programLevelModel.findById(value).then((program_level) => {
        if (!program_level) {
          return Promise.reject(
            "El nivel del programa que ingresaste no existe"
          );
        }
      });
    }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateProgramCode = [

  check("program_code")
      .exists().withMessage('Debe ingresar el código del programa'),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateFormationProgramById = [
  param("id").custom((value) => {
    return FormationProgramModel.findById(value).then((formationProgram) => {
      if (!formationProgram) {
        return Promise.reject(
          "El programa de formación que buscas no está registrado"
        );
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateFormationProgramByCode = [
  check("program_code").exists().custom((value) => {
    return FormationProgramModel.find({program_code: value}).then((formationProgram) => {
      if (formationProgram[0]) {
        return Promise.reject("Ya existe un programa de formación con el mismo código");
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateFormationProgram, validateFormationProgramById, validateFormationProgramByCode, validateProgramCode };
