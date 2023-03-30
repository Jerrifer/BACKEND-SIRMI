const { httpError } = require("../helpers/hanledeError");
const userModel = require("../models/user.model");
const resposeApi = require("../helpers/responseApi");
const { encrypt, compare } = require('../helpers/Bcript')




// list all users

const getItems = async (req, res) => {
  const  estructureApi = new resposeApi()
  try {
    const listAll = await userModel.find();
    estructureApi.toResponse(listAll)
    res.send(listAll );
if(listAll.length > 0) { 
  estructureApi.toResponse(listAll)

}else{
  estructureApi.setState({message : 'no existe ningun producto '})
}
  } catch (error) {
    httpError(res, error);
  }
};
// list one user

const getItem = async (req, res) => {
  try {
    const getuser = await userModel.findById(req.params.id);

    res.send({ data: getuser });
  } catch (error) {
    httpError(res, error);
  }
};
//  create a user 
const createItems = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!

    const resDetail = await userModel.create({ name, password: passwordHash, email });

    res.send({ data: resDetail });
  } catch (error) {
    httpError(res, error);
  }
};
// update a user 
const updateItems = async (req, res) => {
  try {
    const udpteuser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send({ data: udpteuser });
  } catch (error) {
    httpError(res, error);
  }
};
// delete a user
const deleteItems = async (req, res) => {
  try {
    const delateuser = await userModel.findByIdAndDelete(req.params.id);

    res.send({ data: delateuser });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
