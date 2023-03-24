const { httpError } = require("../helpers/hanledeError");

const resposeApi = require("../helpers/responseApi");
const knowledgeNetwork = require("../models/knowledgeNetwork.model");





const getknowledgeNetwork = async (req, res) => {
   
    try {
    const listAll = await knowledgeNetwork.find();
    res.send({ data: listAll });
       
    } catch (error) {
     httpError(res, error);
 
    }
 };
 

const createknowledgeNetwork = async (req, res) => {
   
   try {
       const { name} = req.body;
       const resresul = await knowledgeNetwork.create({ name });
       res.send({ data: resresul });
   } catch (error) {
    httpError(res, error);

   }
};


module.exports = {createknowledgeNetwork, getknowledgeNetwork}
