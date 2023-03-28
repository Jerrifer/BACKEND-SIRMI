const resposeApi = require("../helpers/responseApi");
const FormationProgramModel = require("../models/formationProgram.model");
const ProgramLevelModel = require("../models/programLevels.model");
const TypeProgramModel = require("../models/typeProgram.model");
const ThematicLineModel = require("../models/thematicLine.model");

// list all formation programs
const getFormationPrograms = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listAll = await FormationProgramModel.find().populate([
      'training_centers', 'type_program', 'thematic_line', 'program_level'
    ]);
    if (listAll.length > 0) {
      structureApi.setState("200", "success", "Programas de formacion encontrados");
      structureApi.setResult(listAll);
    } else {
      structureApi.setState("200", "success", "No hay programas de formación registrados");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error");
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
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

//  create a formation program
const createFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {

    const { program_name, program_code, program_version, total_duration, thematic_line, type_program, program_level, training_centers } = req.body;

    const ThematicLineVal = await ThematicLineModel.findById(thematic_line);
    if(!ThematicLineVal) {
        structureApi.setState("200", "success", "La línea tématica que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

    const programLevelVal = await ProgramLevelModel.findById(program_level);
    if(!programLevelVal) {
        structureApi.setState("200", "success", "El nivel del programa que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

    const typeProgramVal = await TypeProgramModel.findById(type_program);
    if(!typeProgramVal) {
        structureApi.setState("200", "success", "El tipo de programa que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

        const newFormationProgram = await FormationProgramModel.create({
            program_name, program_code, program_version, total_duration,
            thematic_line,
            type_program,
            program_level,
            training_centers
        });
         structureApi.setState("200", "success", "Programa de formacion registrado exitosamente");
         structureApi.setResult(newFormationProgram);              

  } catch (error) {
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// update a formation program
const updateFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {

    //program_name, program_code, program_version, total_duration, 
    const { thematic_line, type_program, program_level } = req.body;

    const ThematicLineVal = await ThematicLineModel.findById(thematic_line);
    if(!ThematicLineVal) {
        structureApi.setState("200", "success", "La línea tématica que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

    const programLevelVal = await ProgramLevelModel.findById(program_level);
    if(!programLevelVal) {
        structureApi.setState("200", "success", "El nivel del programa que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

    const typeProgramVal = await TypeProgramModel.findById(type_program);
    if(!typeProgramVal) {
        structureApi.setState("200", "success", "El tipo de programa que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }


    const formationProgram = await FormationProgramModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState("200", "success", "Programa de formacion actualizado exitosamente");
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error");
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
    structureApi.setState("500", "error", "Error");
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
