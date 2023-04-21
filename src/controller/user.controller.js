const userModel = require("../models/user.model");
const resposeApi = require("../helpers/responseApi");
const { encrypt } = require("../helpers/Bcript");
const contractModel = require("../models/contract.model");

// list all users
const getUsers = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listUsers = await userModel.find().populate('training_center');
    if (listUsers.length > 0) {
      structureApi.setState("200", "success", "Usuarios encontrados");
      structureApi.setResult(listUsers);
    } else {
      structureApi.setState("200", "success", "No hay usuarios registrados");
      structureApi.setResult(listUsers);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// list one user
const getUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const user = await userModel.findById(req.params.id).populate({
      path: 'training_center',
      populate: {
        path: 'municipalitie',
        populate: {
          path: 'regionale'
        }
      }
    })
    structureApi.setState("200", "success", "Usuarios encontrados");
    structureApi.setResult(user);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

//  create a user
const createUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const {password} = req.body;
    const passwordHash = await encrypt(password);

    req.body.password = passwordHash
    const newUser = await userModel.create(req.body);
    
    structureApi.setState("200", "success", "Usuario registrado con éxito");
    structureApi.setResult(newUser);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// update a user
const updateUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    structureApi.setState("200", "success", "Usuario actualizado con éxito");
    structureApi.setResult(user);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// delete a user
const deleteUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    await contractModel.deleteMany({user: req.params.id});
    structureApi.setState("200", "success", "Usuario eliminado con éxito");
    structureApi.setResult(user);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const getUsersByTrainingCenter = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listUsers = await userModel.find({training_center: req.params.id}).populate('training_center');
    if (listUsers.length > 0) {
      structureApi.setState("200", "success", "Usuarios encontrados");
      structureApi.setResult(listUsers);
    } else {
      structureApi.setState("200", "success", "No hay usuarios registrados");
      structureApi.setResult(listUsers);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, getUsersByTrainingCenter };

// {
//   "first_name": "jajaja",
//   "last_name": "sdfsdf",
//   "password": "sdfsdf",
//   "email": "sdfsdf",
//   "contact_number": "sdfsdf",
//   "document_number": "sdfsdf",
//   "training_center": 1
// }
