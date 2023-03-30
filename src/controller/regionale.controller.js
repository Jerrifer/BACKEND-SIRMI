const { httpError } = require("../helpers/hanledeError");
const Regionale = require("../models/regionale.model");

const getRegionales = async (req, res, next) => {
  try {
    const listall = await Regionale.find();

    res.send({ data: listall });
  } catch (error) {
    httpError(res, error);
  }
};

const getRegionale = async (req, res, next) => {
  try {
    const listone = await Regionale.findById(req.params.id);

    res.send({ data: listone });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getRegionales,
  getRegionale,
};
