const { httpError } = require("../helpers/hanledeError");
const userModel = require("../models/user.model");
const resposeApi = require("../helpers/responseApi");



// list all users

const getItems = async (req, res) => {
  const  estructureApi = new resposeApi()
  try {
    const listAll = await userModel.find();
if(listAll.length > 0) { 
  estructureApi.setResult(listAll)

}else{
  estructureApi.setState('message : no existe ningun producto ')
}
  } catch (error) {
    httpError(res, error);
  }
  res.send(estructureApi.toResponse())
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
    const resDetail = await userModel.create({ name, password, email });

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
