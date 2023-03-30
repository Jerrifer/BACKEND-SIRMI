const resposeApi = require("../helpers/responseApi");
const LearningResultModel = require("../models/learningResult.model");

// list all formation programs
const getLearningResults = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listLearningResult = await LearningResultModel.find().populate(
      "competence"
    );
    if (listLearningResult.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Resultados de aprendizaje encontrados"
      );
      structureApi.setResult(listLearningResult);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay Resultados de aprendizaje registrados"
      );
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }

  res.json(structureApi.toResponse());
};

// list one formation program
const getLearningResult = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const LearningResult = await LearningResultModel.findById(
      req.params.id
    ).populate("competence");

    if (LearningResult) {
      structureApi.setState(
        "200",
        "success",
        "Resultado de aprendizaje encontrado exitosamente"
      );
      structureApi.setResult(LearningResult);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe el Resultado de aprendizaje"
      );
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

//  create a formation program
const createLearningResult = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const newLearningResult = await LearningResultModel.create(req.body);
    structureApi.setState(
      "200",
      "success",
      "Resultado de aprendizaje registrado exitosamente"
    );
    structureApi.setResult(newLearningResult);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// update a formation program
const updateLearningResult = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    //program_name, program_code, program_version, total_duration,

    const LearningResult = await LearningResultModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState(
      "200",
      "success",
      "Resultado de aprendizaje actualizado exitosamente"
    );
    structureApi.setResult(LearningResult);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// delete a formation program
const deleteLearningResult = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const LearningResult = await LearningResultModel.findByIdAndDelete(
      req.params.id
    );
    structureApi.setState(
      "200",
      "success",
      "Resultado de aprendizaje eliminado exitosamente"
    );
    structureApi.setResult(LearningResult);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getLearningResults,
  getLearningResult,
  createLearningResult,
  updateLearningResult,
  deleteLearningResult,
};
