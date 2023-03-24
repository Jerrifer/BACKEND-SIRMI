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

//create
const createknowledgeNetwork = async (req, res) => {
  try {
    const {
      _id,
      knowledge_network,
      thematic_line,
      advisor_name,
      manager_name,
    } = req.body;
    const resresul = await knowledgeNetwork.create({
      _id,
      knowledge_network,
      thematic_line,
      advisor_name,
      manager_name,
    });
    res.send({ data: resresul });
  } catch (error) {
    httpError(res, error);
  }
};

//update
const updateknowledgeNetwork = async (req, res) => {

    try {
        const udptenework = await knowledgeNetwork.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

    
        res.send({ data: udptenework });
      } catch (error) {
        httpError(res, error);
      }


};

// delete
const deleteknowledgeNetwork = async (req, res) => {

    try {
        const delatNetwork = await knowledgeNetwork.findByIdAndDelete(req.params.id);
    
        res.send({ data:delatNetwork });
      } catch (error) {
        httpError(res, error);
      }


};

module.exports = {
  createknowledgeNetwork,
  getknowledgeNetwork,
  getknowledgeNetworks,
  updateknowledgeNetwork,
  deleteknowledgeNetwork,
};
