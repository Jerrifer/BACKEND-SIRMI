const responseApi = require("../helpers/responseApi");

// const resposeApi = require("../helpers/responseApi");
const knowledgeNetworkModel = require("../models/knowledgeNetwork.model");

// list all
const getKnowledgeNetworks = async (req, res) => {
  let structureApi = new responseApi();

  try {
    const listAll = await knowledgeNetworkModel.find();
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
const getKnowledgeNetwork = async (req, res) => {
  let structureApi = new responseApi();
  try {
    const knowledgeNetwork = await knowledgeNetworkModel.findById("5");

    console.log(knowledgeNetwork);
    if (knowledgeNetwork) {
      structureApi.setState("200", "success", " Red de conocimento encontrados");
      structureApi.setResult(knowledgeNetwork);
    } else {
      structureApi.setState("200", "success", "No se encontro una red de conocimento que coincida");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());

};

module.exports = {
  getKnowledgeNetworks,
  getKnowledgeNetwork,
};
