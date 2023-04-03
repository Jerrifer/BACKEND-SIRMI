const resposeApi = require("../helpers/responseApi");
const thematicLineModel = require("../models/thematicLine.model");

// list all formation programs
const getThematicLines = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allThematicLines = await thematicLineModel.find().populate("knowledge_network");
    if (allThematicLines.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Líneas tématicas encontradas"
      );
      structureApi.setResult(allThematicLines);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay líneas tématicas registradas"
      );
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// list one formation program
const getThematicLine = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const thematicLine = await thematicLineModel.findById(
      req.params.id
      //, 'type_program', 'thematic_line', 'program_level'
    ).populate("knowledge_network");
    if (thematicLine) {
      structureApi.setState(
        "200",
        "success",
        "Línea tématica encontrada exitosamente"
      );
      structureApi.setResult(thematicLine);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe la Línea tématica"
      );
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
    getThematicLines,
    getThematicLine
  };
  