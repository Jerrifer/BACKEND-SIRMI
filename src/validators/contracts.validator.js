const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const contractModel = require("../models/contract.model");

const validateContract = [

  check("contract_number")
    .exists().withMessage("Debe ingresar el número del contrato"),

  check("object")
    .exists().withMessage("Debe ingresar el objeto del contrato"),

  check("pay")
    .exists().withMessage("Debe ingresar el valor y forma de pago"),

  // check("supervisor")
  //   .exists().withMessage("Debe ingresar el nombre del supervisor"),

  check("start_date")
    .exists().withMessage("Debe ingresar la fecha de inicio del contrato"),

  check("end_date")
    .exists().withMessage("Debe ingresar la fecha de finalización del contrato"),

  check("type_contract")
    .exists().withMessage("Debe ingresar el tipo del contrato"),

  check("thematic_line")
    .exists().withMessage("Debe seleccionar a que línea tématica fue asignado por la entidad contratante"),


  check("user")
    .exists().withMessage("Debe haber indicado a que usuario le registrará el contrato")
    .custom((value) => {
      return contractModel.findOne({user: value, status: true}).then((contract) => {
        if (contract) {
          return Promise.reject("El usuario ya tiene un contrato activo");
        }
      });
    }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateContractById = [
  param("id").custom((value) => {
    return contractModel.findById(value).then((contract) => {
      if (!contract) {
        return Promise.reject(
          "El contrato que buscas no está registrado"
        );
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateContract, validateContractById };
