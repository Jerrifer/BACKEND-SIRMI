const resposeApi = require("../helpers/responseApi");
const FormationProgramModel = require("../models/formationProgram.model");
const ProgramLevelModel = require("../models/programLevels.model");
const TypeProgramModel = require("../models/typeProgram.model");
const ThematicLineModel = require("../models/thematicLine.model");

// list all formation programs
const getFormationPrograms = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allFormationProgram = await FormationProgramModel.find().populate([
      'training_centers', 'type_program', 'thematic_line', 'program_level'
    ]);
    if (allFormationProgram.length > 0) {
      structureApi.setState("200", "success", "Programas de formacion encontrados");
      structureApi.setResult(allFormationProgram);
    } else {
      structureApi.setState("200", "success", "No hay programas de formación registrados");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// list one formation program
const getFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const formationProgram = await FormationProgramModel.findById(
      req.params.id
      //, 'type_program', 'thematic_line', 'program_level'
    ).populate(['training_centers', 'type_program', 'thematic_line', 'program_level']);
    if (formationProgram) {
      structureApi.setState("200", "success", "Programa de formacion encontrado exitosamente");
      structureApi.setResult(formationProgram);
    } else {
      structureApi.setState("200", "success", "No existe el programa de formación");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

//  create a formation program
const createFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
        const newFormationProgram = await FormationProgramModel.create(req.body);
        structureApi.setState("200", "success", "Programa de formacion registrado exitosamente");
        structureApi.setResult(newFormationProgram);

  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// update a formation program
const updateFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {

    //program_name, program_code, program_version, total_duration, 

    const formationProgram = await FormationProgramModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState("200", "success", "Programa de formacion actualizado exitosamente");
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);

  }
  res.json(structureApi.toResponse());
};

// delete a formation program
const deleteFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const formationProgram = await FormationProgramModel.findByIdAndDelete(
      req.params.id
    );
    structureApi.setState("200", "success", "Programa de formacion eliminado exitosamente");
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getFormationPrograms,
  getFormationProgram,
  createFormationProgram,
  updateFormationProgram,
  deleteFormationProgram,
};
