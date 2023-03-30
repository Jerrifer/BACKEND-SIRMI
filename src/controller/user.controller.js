const userModel = require("../models/user.model");
const resposeApi = require("../helpers/responseApi");

// list all users
const getUsers = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listUsers = await userModel.find();
    if (listUsers.length > 0) {
      structureApi.setState("200", "success", "Usuarios encontrados");
      structureApi.setResult(listUsers);
    } else {
      structureApi.setState("200", "success", "No hay usuarios registrados");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.send(structureApi.toResponse());
};

// list one user
const getUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const user = await userModel.findById(req.params.id);
    structureApi.setState("200", "success", "Usuarios encontrados");
    structureApi.setResult(user);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.send(structureApi.toResponse());
};

//  create a user
const createUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const { name, password, email } = req.body;
    const newUser = await userModel.create({ name, password, email });
    structureApi.setState("200", "success", "Usuario registrado con éxito");
    structureApi.setResult(newUser);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.send(structureApi.toResponse());
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
  res.send(structureApi.toResponse());
};

// delete a user
const deleteUser = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    structureApi.setState("200", "success", "Usuario eliminado con éxito");
    structureApi.setResult(user);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.send(structureApi.toResponse());
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
