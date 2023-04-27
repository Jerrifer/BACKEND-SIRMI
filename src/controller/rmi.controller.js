const resposeApi = require("../helpers/responseApi");
const rmiModel = require("../models/rmi.model");
const RMIModel = require("../models/rmi.model");

// list all assigned formation
const getRmis = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allRmis = await RMIModel.find({rmi: req.params.id})
    if (allRmis.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Reportes mensuales de instructores encontrados"
      );
      structureApi.setResult(allRmis);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay reportes mensuales de instructores registrados"
      );
      structureApi.setResult(allRmis);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// list one assigned formation
const getRmi = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const rmi = await rmiModel.findById(req.params.id)
    if (rmi) {
      structureApi.setState(
        "200",
        "success",
        "Reporte mensual de instructor encontrado exitosamente"
      );
      structureApi.setResult(rmi);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe el reporte mensual de instructor"
      );
      structureApi.setResult(rmi);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

//  create a assigned formation
const createRmi = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const newRmi = await RMIModel.create(req.body);
    structureApi.setState(
      "200",
      "success",
      "Reporte mensual de instructor registrado exitosamente"
    );
    structureApi.setResult(newRmi);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// update a assigned formation
const updateRmi = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const rmi = await RMIModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState(
      "200",
      "success",
      "Reporte mensual de instructor actualizado exitosamente"
    );
    structureApi.setResult(rmi);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// delete a assigned formation
const deleteRmi = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const rmi = await RMIModel.findByIdAndDelete(req.params.id);
    structureApi.setState(
      "200",
      "success",
      "Reporte mensual de instructor eliminado exitosamente"
    );
    structureApi.setResult(rmi);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const rmiByUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allRmis = await RMIModel.find({user: req.params.id})
    if (allRmis.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Reportes mensuales del instructor encontrados"
      );
      structureApi.setResult(allRmis);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay reportes mensuales del instructor registrados"
      );
      structureApi.setResult(allRmis);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getRmis,
  getRmi,
  createRmi,
  updateRmi,
  deleteRmi,
  rmiByUser
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