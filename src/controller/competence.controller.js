const resposeApi = require("../helpers/responseApi");
const Competence = require("../models/competence.model");

const getCompetences = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const Competences = await Competence.find().populate("formation_programs");
    structureApi.setState("200", "success", "Competencias encontradas");
    structureApi.setResult(Competences);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const getCompetence = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const competence = await Competence.findById(req.params.id);
    structureApi.setState("200", "success", "Competencia encontrada");
    structureApi.setResult(competence);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const createCompetence = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const newCompetence = await Competence.create(req.body);

    structureApi.setState("200", "success", "Competencia registrada");
    structureApi.setResult(newCompetence);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

const updateCompetence = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const competence = await Competence.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState("200", "success", "Competencia actualizada");
    structureApi.setResult(competence);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const deleteCompetence = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const competence = await Competence.findByIdAndDelete(req.params.id);

    structureApi.setState("200", "success", "Competencia eliminada");
    structureApi.setResult(competence);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getCompetences,
  getCompetence,
  createCompetence,
  updateCompetence,
  deleteCompetence,
};
