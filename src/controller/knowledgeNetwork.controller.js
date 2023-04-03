const estructuraApi = require("../helpers/responseApi");

// const resposeApi = require("../helpers/responseApi");
const knowledgeNetwork = require("../models/knowledgeNetwork.model");

// list all
const getknowledgeNetwork = async (req, res) => {
  let structureApi = new estructuraApi();

  try {
    const listAll = await knowledgeNetwork.find();
    if (listAll.length > 0) {
      structureApi.setState("200", "success", " Red de conocimento encontrados");
      structureApi.setResult(listAll);
    } else {
      structureApi.setState("200", "success", "No hay ninguna red de conocimento ");
    }

    
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());

};
// list one
const getknowledgeNetworks = async (req, res) => {
  let structureApi = new estructuraApi();

  try {
    const getNetwork = await knowledgeNetwork.findById(req.params.id);

    if (getNetwork.length > 0) {
      structureApi.setState("200", "success", " Red de conocimento encontrados");
      structureApi.setResult(getNetwork);
   

    } else {
      structureApi.setState("200", "success", "No hay ninguna red de conocimento ");
    }

  
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());

};

module.exports = {
  getknowledgeNetwork,
  getknowledgeNetworks,
};
