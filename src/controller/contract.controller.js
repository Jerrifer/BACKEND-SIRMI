const resposeApi = require("../helpers/responseApi");
const contractModel = require("../models/contract.model");

const userModel = require("../models/user.model");

const getContracts = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listAlll = await contractModel.find().populate('user').sort({'status': -1});
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
    const listone = await contractModel.findById(req.params.id).populate('user');
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
        const contract = await contractModel.findById(req.params.id)
        contract.status = false
        contract.save()

        structureApi.setState("200", "success", "El contrato se desactivo exitosamente");
        structureApi.setResult('');

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
    // const allContracts = await contractModel.find({training_center: req.params.id}).populate('user');
    const allContracts = await contractModel.find().populate({
      path: 'user',
      populate: {
        path: 'training_center'
      }
    })

    const contractsByCenter = allContracts.filter(contract => contract.user.training_center._id == req.params.id);

    if (allContracts.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Contratos encontrados con éxito"
      );
      structureApi.setResult(contractsByCenter);
    } else {
      structureApi.setState("200", "success", "No hay contratos para mostrar f");
      structureApi.setResult(contractsByCenter);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

const contractsByUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listContracts = await contractModel.find({user: req.params.id});
    const user = await userModel.findById(req.params.id);
    if (listContracts.length > 0) {
      structureApi.setState("200", "success", "Contratos del Usuario encontrados");
      structureApi.setResult({user: user, listContracts: listContracts});
    } else {
      structureApi.setState("200", "success", "No hay contratos del usuario registrados");
      structureApi.setResult({user: user, listContracts: listContracts});
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getContracts,
  getContract,
  createContract,
  updateContract,
  deleteContract,
  contractsByTrainingCenter,
  contractsByUser
};
