const resposeApi = require("../helpers/responseApi");
const AssignedFormationModel = require("../models/assignedFormation.model");

// list all assigned formation
const getAssignedFormations = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    // const allAssignedFormations = await AssignedFormationModel.find({rmi: req.params.id})
    const allAssignedFormations = await AssignedFormationModel.find()
    if (allAssignedFormations.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Formaciones asignadas encontradas"
      );
      structureApi.setResult(allAssignedFormations);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay formaciones asignadas registradas"
      );
      structureApi.setResult(allAssignedFormations);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// list one assigned formation
const getAssignedFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const assignedFormation = await AssignedFormationModel.findById(req.params.id)
    if (assignedFormation) {
      structureApi.setState(
        "200",
        "success",
        "formación asignada encontrada exitosamente"
      );
      structureApi.setResult(assignedFormation);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe la formación asignada"
      );
      structureApi.setResult(assignedFormation);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

//  create a assigned formation
const createAssignedFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    console.log(req.body);
    const newAssignedFormation = await AssignedFormationModel.create(req.body);
    structureApi.setState(
      "200",
      "success",
      "Formación asignada registrada exitosamente"
    );
    structureApi.setResult(newAssignedFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// update a assigned formation
const updateAssignedFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    //program_name, program_code, program_version, total_duration,

    const assignedFormation = await AssignedFormationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState(
      "200",
      "success",
      "Formación asignada actualizada exitosamente"
    );
    structureApi.setResult(assignedFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// delete a assigned formation
const deleteAssignedFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const assignedFormation = await AssignedFormationModel.findByIdAndDelete(req.params.id);
    structureApi.setState(
      "200",
      "success",
      "Formación asignada eliminada exitosamente"
    );
    structureApi.setResult(assignedFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};


module.exports = {
  getAssignedFormations,
  getAssignedFormation,
  createAssignedFormation,
  updateAssignedFormation,
  deleteAssignedFormation
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