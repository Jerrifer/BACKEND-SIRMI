const resposeApi = require("../helpers/responseApi");

const Contract = require("../models/contract.model");
const trainingCenterModel = require("../models/trainingCenter.model");
const userModel = require("../models/user.model");

const getContracts = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listAlll = await Contract.find().populate('user');
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
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

const getContract = async (req, res) => {
  const structureApi = new resposeApi();

  try {
    const listone = await Contract.findById(req.params.id);
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
    const newContract = await Contract.create(req.body);

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
        const updataContract = await Contract.findByIdAndUpdate(
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
        const deleteContract = await Contract.findByIdAndDelete(req.params.id)
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
    const trainingCenters = await trainingCenterModel.findById(req.params.id);
    const UsersByTraininCenter = await userModel.find({training_center: trainingCenters._id});

    var contractsByUsers = []

    UsersByTraininCenter.map( async (user) => {
      const contracts = await Contract.find({user: user._id});
      contractsByUsers.concat(contracts)
    })


    if (ContractsByTraininCenter.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Contrato registrado Correctamente"
      );
      structureApi.setResult(ContractsByTraininCenter);
    } else {
      structureApi.setState("200", "success", "no Existe Ningun Contrato");
      structureApi.setResult(ContractsByTraininCenter);
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
