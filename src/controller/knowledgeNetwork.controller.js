const { httpError } = require("../helpers/hanledeError");

// const resposeApi = require("../helpers/responseApi");
const knowledgeNetwork = require("../models/knowledgeNetwork.model");

// list all
const getknowledgeNetwork = async (req, res) => {
  try {
    const listAll = await knowledgeNetwork.find();
    res.send({ data: listAll });
  } catch (error) {
    httpError(res, error);
  }
};
// list one
const getknowledgeNetworks = async (req, res) => {
  try {
    const getNetwork = await knowledgeNetwork.findById(req.params.id);

    res.send({ data: getNetwork });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getknowledgeNetwork,
  getknowledgeNetworks,
};
