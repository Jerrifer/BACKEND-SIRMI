const resposeApi = require("../helpers/responseApi");
const competenceModel = require("../models/competence.model");
const FormationProgramModel = require("../models/formationProgram.model");

// list all formation programs
const getFormationPrograms = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allFormationPrograms = await FormationProgramModel.find().populate([
      // "training_centers",
      "type_program",
      "thematic_line",
      "program_level",
      "competences"
    ]).lean();
    if (allFormationPrograms.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Programas de formación encontrados"
      );
      structureApi.setResult(allFormationPrograms);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay programas de formación registrados"
      );
      structureApi.setResult(allFormationPrograms);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// list one formation program
const getFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const formationProgram = await FormationProgramModel.findById(
      req.params.id
    ).populate([
      // "training_centers",
      "type_program",
      "thematic_line",
      "program_level",
      "competences"
    ]);
    if (formationProgram) {
      structureApi.setState(
        "200",
        "success",
        "Programa de formación encontrado exitosamente"
      );
      structureApi.setResult(formationProgram);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe el formación de formación"
      );
      structureApi.setResult(formationProgram);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

//  create a formation program
const createFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const { program_code } = req.body
    const _id = parseInt(program_code)
    req.body._id = _id
    const newFormationProgram = await FormationProgramModel.create(req.body);
    structureApi.setState(
      "200",
      "success",
      "Programa de formación registrado exitosamente"
    );
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
    structureApi.setState(
      "200",
      "success",
      "Programa de formación actualizado exitosamente"
    );
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
    structureApi.setState(
      "200",
      "success",
      "Programa de formación eliminado exitosamente"
    );
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// assign a formation program
const assignCompetences = async (req, res) => {
  const structureApi = new resposeApi();
  console.log('jerri');
  try {
    const formationProgram = await FormationProgramModel.findById(
      req.params.id
    );

    const { competences } = req.body;

    const filteredIds = competences.filter(valor => !formationProgram.competences.includes(valor));
    
    formationProgram.competences = formationProgram.competences.concat(filteredIds);
    formationProgram.save();

    // for (let index = 0; index < competences.length; index++) {
    //   const competence = await competenceModel.findById(competeneces[index]);
    //   competence.formation_programs = competence.formation_programs.concat(req.params.id);
    //   competence.save();
    // }
    
    structureApi.setState(
      "200",
      "success",
      "Competencias asignadas al programa"
    );
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// deallocate a formation program

const deallocateCompetences = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const formationProgram = await FormationProgramModel.findById(
      req.params.id
    );
    console.log(req.body);
    const { competence } = req.body;

    formationProgram.competences = formationProgram.competences.filter(
      (item) => item !== competence
    );
    console.log(formationProgram);
    formationProgram.save();

    structureApi.setState(
      "200",
      "success",
      "Se elimino la asignación exitosamente"
    );
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getFormationPrograms,
  getFormationProgram,
  createFormationProgram,
  updateFormationProgram,
  deleteFormationProgram,
  assignCompetences,
  deallocateCompetences,
};



    // {
    //   program_code,
    //   program_name,
    //   program_version,
    //   total_duration,
    //   thematic_line,
    //   type_program,
    //   program_level,
    // } 