const resposeApi = require("../helpers/responseApi");
const TitledFormationModel = require("../models/titledFormation.model");

// list all Titled formation
const getTitledFormations = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    // const allTitledFormations = await TitledFormationModel.find({rmi: req.params.id})
    const allTitledFormations = await TitledFormationModel.find()
    if (allTitledFormations.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Formaciones tituladas encontradas"
      );
      structureApi.setResult(allTitledFormations);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay formaciones tituladas registradas"
      );
      structureApi.setResult(allTitledFormations);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// list one Titled formation
const getTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const titledFormation = await TitledFormationModel.findById(req.params.id)
    if (titledFormation) {
      structureApi.setState(
        "200",
        "success",
        "formación titulada encontrada exitosamente"
      );
      structureApi.setResult(titledFormation);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe la formación titulada"
      );
      structureApi.setResult(titledFormation);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

//  create a Titled formation
const createTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    console.log(req.body);
    const newTitledFormation = await TitledFormationModel.create(req.body);
    structureApi.setState(
      "200",
      "success",
      "Formación titulada registrada exitosamente"
    );
    structureApi.setResult(newTitledFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// update a Titled formation
const updateTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    //program_name, program_code, program_version, total_duration,

    const TitledFormation = await TitledFormationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState(
      "200",
      "success",
      "Formación titulada actualizada exitosamente"
    );
    structureApi.setResult(TitledFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// delete a Titled formation
const deleteTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const TitledFormation = await TitledFormationModel.findByIdAndDelete(req.params.id);
    structureApi.setState(
      "200",
      "success",
      "Formación titulada eliminada exitosamente"
    );
    structureApi.setResult(TitledFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};


module.exports = {
  getTitledFormations,
  getTitledFormation,
  createTitledFormation,
  updateTitledFormation,
  deleteTitledFormation
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