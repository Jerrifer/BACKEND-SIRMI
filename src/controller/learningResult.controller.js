const resposeApi = require("../helpers/responseApi");
const LearningResultModel = require("../models/learningResult.model");
const CompetenceModel = require("../models/competence.model");

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

// list one learning result
const getLearningResult = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const learningResult = await LearningResultModel.findById(
      req.params.id
    ).populate("competence");

    if (learningResult) {
      structureApi.setState(
        "200",
        "success",
        "Resultado de aprendizaje encontrado exitosamente"
      );
      structureApi.setResult(learningResult);
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
    const lastLearningResult = await LearningResultModel.find({},{_id: 1, learning_result:0, competence:0}).sort({$natural:-1}).limit(1);
    req.body._id = lastLearningResult[0]._id + 1
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

// list one formation program
const LearningResultsByCompetence = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const competence = await CompetenceModel.findById(req.params.id);
    const learningResult = await LearningResultModel.find({competence: req.params.id});

    if (learningResult) {
      structureApi.setState(
        "200",
        "success",
        "Resultado de aprendizaje encontrado exitosamente"
      );
      structureApi.setResult({competence: competence, learningresults: learningResult});
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

module.exports = {
  getLearningResults,
  getLearningResult,
  createLearningResult,
  updateLearningResult,
  deleteLearningResult,
  LearningResultsByCompetence
};


// {
//   "learning_result": "learning result ejemplo",
//   "competence": 2
// }