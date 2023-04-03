const resposeApi = require("../helpers/responseApi");

const Regionale = require("../models/regionale.model");

const getRegionales = async (req, res, next) => {
  const structureApi = new resposeApi();

  try {
    const listall = await Regionale.find();
    if (listall.length > 0) {
      structureApi.setState("200", "success", " Regional encotrada ");
      structureApi.setResult(listall);
    } else {
      structureApi.setState("200", "success", "No hay ninguna Regional ");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const getRegionale = async (req, res, next) => {
  let structureApi = new resposeApi();

  try {
    const listone = await Regionale.findById(req.params.id);
    if (listone.length > 0) {
      structureApi.setState("200", "success", " Regional encotrada");
      structureApi.setResult(listone);
    } else {
      structureApi.setState("200", "success", "No hay ninguna Regional ");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getRegionales,
  getRegionale,
};
