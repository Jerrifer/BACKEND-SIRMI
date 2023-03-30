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

const createRegionale = async (req, res, next) => {
  try {
    const { _id, name } = req.body;

    const createregionale = await Regionale.create({ _id, name });

    res.send({ data: createregionale });
  } catch (error) {
    httpError(res, error);
  }
};

const updateRegionale = async (req, res, next) => {
  try {
    const actualizado = await Regionale.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send({ data: actualizado });
  } catch (error) {
    httpError(res, error);
  }
};

const deleteRegionale = async (req, res, next) => {
  try {
    const elimarregionale = await Regionale.findByIdAndDelete(req.params.id);

    res.send({ data: elimarregionale });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getRegionales,
  getRegionale,
  createRegionale,
  updateRegionale,
  deleteRegionale,
};
