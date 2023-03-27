const { httpError } = require("../helpers/hanledeError");

const Competence = require("../models/competence.model");

const getcompetences = async (req, res) => {
  try {
    const list = await Competence.find();
    res.send({ data: list });
  } catch (error) {
    httpError(res, error);
  }
};

const getcompetence = async (req, res) => {


    try {
    
    const listone = await Competence.findById(
        req.params.id
    );

    res.send({ data: listone});

    } catch (error) {
        httpError(res, error);
    
}
}


const createcompetences = async (req, res) => {
  try {
    const { _id, norm, name, competition_code, duration, formationprograms } =
      req.body;

    const result = await Competence.create({
      _id,
      norm,
      name,
      competition_code,
      duration,
      formationprograms,
    });

    res.send({ data: result });
  } catch (error) {
    httpError(res, error);
  }
};


const updatecompones = async (req, res) => {
  try {
    const actualizar = await Competence.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send({ data: actualizar });
  } catch (error) {
    httpError(res, error);
  }
};


const deletecompones = async (req, res) => {
  try {
    const deletecompone = await Competence.findByIdAndDelete(req.params.id);

    res.send({ data: deletecompone });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  createcompetences,
  getcompetences,
  getcompetence,
  updatecompones,
  deletecompones,
};
