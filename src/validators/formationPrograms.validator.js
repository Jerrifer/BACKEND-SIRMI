const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const programLevelModel = require("../models/programLevel.model");
const thematicLineModel = require("../models/thematicLine.model");
const TypeProgramModel = require("../models/typeProgram.model");
const FormationProgramModel = require("../models/formationProgram.model");

const validateFormationProgram = [
  check("program_name").exists(),

  check("program_code").exists(),

  check("total_duration").exists().isInt().withMessage('La duración estimada debe ser un dato numérico'),

  check("program_version").exists(),

  check("type_program")
    .exists().isIn(['T', 'C'])
    .withMessage('El tipo debe ser TITULADA o COMPLEMENTARIA')
    .custom((value) => {
      return TypeProgramModel.findById(value).then((type_program) => {
        if (!type_program) {
          return Promise.reject("El tipo de programa que ingresaste no existe");
        }
      });
    }),

  check("thematic_line")
    .exists()
    .custom((value) => {
      return thematicLineModel.findById(value).then((thematic_line) => {
        if (!thematic_line) {
          return Promise.reject("La línea tématica que ingresaste no existe");
        }
      });
    }),

  check("program_level")
    .exists()
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

module.exports = { validateFormationProgram, validateFormationProgramById, validateFormationProgramByCode };
