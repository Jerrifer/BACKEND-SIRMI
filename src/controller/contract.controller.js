const resposeApi = require("../helpers/responseApi");
const contractModel = require("../models/contract.model");

const trainingCenterModel = require("../models/trainingCenter.model");
const userModel = require("../models/user.model");

const getContracts = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listAlll = await contractModel.find().populate('user');
    if (listAlll.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Contratos encontrados con éxito"
      );
      structureApi.setResult(listAlll);
    } else {
      structureApi.setState("200", "success", "No existe ningún contrato");
      structureApi.setResult(listAlll);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const getContract = async (req, res) => {
  const structureApi = new resposeApi();

  try {
    const listone = await contractModel.findById(req.params.id);
    console.log(req.params.id);
    if (listone) {
      structureApi.setState("200", "success", "Contrato encontrado");
      structureApi.setResult(listone);
    } else {
      structureApi.setState("200", "success", "No existe el Contrato");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }

  res.json(structureApi.toResponse());
};

const createContract = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const { user } = req.body
    const userById = await userModel.findById(user);

    req.body.training_center = userById.training_center
    const newContract = await contractModel.create(req.body);

    structureApi.setState("200", "success", "Contrato registrado exitosamente");
    structureApi.setResult(newContract);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

const updateContract = async (req, res) => {
    const structureApi = new resposeApi();
  
    try {
        const updataContract = await contractModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            })
            structureApi.setState("200", "success", "El contrato se actualizó exitosamente");
            structureApi.setResult(updataContract);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
        console.log(error);
      }
      res.json(structureApi.toResponse());
};

const deleteContract = async (req, res) => {
    const structureApi = new resposeApi();
    try {
        const deleteContract = await contractModel.findByIdAndDelete(req.params.id)
        structureApi.setState("200", "success", "El contrato se elemino exitosamente");
        structureApi.setResult(deleteContract);

    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
        console.log(error);
      }
      res.json(structureApi.toResponse());
};

const contractsByTrainingCenter = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allContracts = await contractModel.find({training_center: req.params.id}).populate('user');

    if (allContracts.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Contratos encontrados con éxito"
      );
      structureApi.setResult(allContracts);
    } else {
      structureApi.setState("200", "success", "No hay contratos para mostrar");
      structureApi.setResult(allContracts);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};


module.exports = {
  createContract,
  getContracts,
  getContract,
  updateContract,
  deleteContract,
  contractsByTrainingCenter
};
