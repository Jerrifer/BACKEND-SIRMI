const resposeApi = require("../helpers/responseApi");
const  trainingCenter = require("../models/trainingCenter.model")



const gettrainingCenter = async (req, res) => {
    const structureApi = new resposeApi();
    try {
      const listAlll = await trainingCenter.find();
      if (listAlll.length > 0) {
        structureApi.setState(
          "200",
          "success",
          "Se Encontro El Centro de Formacion"
        );
        structureApi.setResult(listAlll);
      } else {
        structureApi.setState("200", "success", "no Existe El Centro de Formacion");
      }
    } catch (error) {
      structureApi.setState("500", "error", "Error en la solicitud");
      structureApi.setResult(error);
      console.log(error);
    }
    res.json(structureApi.toResponse());
  };


const gettrainingCenters = async (req, res) => {
    const structureApi = new resposeApi();
    try {
      const listone = await trainingCenter.findById(req.params.id)
     
      structureApi.setState("200", "success", "Se Encontro El Centro de Formacion");
      structureApi.setResult(listone);
      
    } catch (error) {
      structureApi.setState("500", "error", "Error en la solicitud");
      structureApi.setResult(error);
      console.log(error);
    }
    res.json(structureApi.toResponse());
  };

module.exports = {gettrainingCenter, gettrainingCenters}