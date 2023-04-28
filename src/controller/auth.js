const { encrypt, compare } = require("../helpers/Bcript");
const { tokenSign } = require("../helpers/token");
const userModel = require("../models/user.model");
const responseApi = require("../helpers/responseApi");
const contractModel = require("../models/contract.model");

const signin = async (req, res) => {
  let structureApi = new responseApi();

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).populate('training_center');
    const contract = await contractModel.find({ user: user._id, status: true });

    if (!user) {
      structureApi.setState('404', "error", "usuario no existe");
      structureApi.setResult("User not found");
      return res.json(structureApi.toResponse());
    }

    if (contract.length <= 0) {
      structureApi.setState('404', "error", "El usuario no tiene un contrato activo");
      structureApi.setResult("");
      return res.json(structureApi.toResponse());
    }

    const checkPassword = await compare(password, user.password); //TODO: Contraseña!

    //TODO JWT 👉
    const tokenSession = await tokenSign(user); //TODO: 2d2d2d2d2d2d2

    if (checkPassword) {
      //TODO Contraseña es correcta!
     
      structureApi.setState(200, "success", "se ingreso correctamente ");
      structureApi.setResult({ user: user, token: tokenSession });
    }

    if (!checkPassword) {
      structureApi.setState(409, "error", "Invalid password");
    }
  } catch (error) {
    structureApi.setState(500, "error", "Error");
    structureApi.setResult(error);
    console.log(error);
  }

  res.json(structureApi.toResponse());
};


const signup = async (req, res) => {
  let structureApi = new responseApi();
  try {
    const { password } = req.body;

    const passwordHash = await encrypt(password); //TODO: (123456)<--- Encriptando!!

    req.body.password = passwordHash
    const registerUser = await userModel.create(req.body);

    structureApi.setState(200, "success", "Usuario registrado correctamente");
    structureApi.setResult(registerUser);
  } catch (error) {
    structureApi.setState(500, "error", "Error");
    structureApi.setResult(error);
    console.log(error);
  }

  res.send(structureApi.toResponse());
};

module.exports = { signup, signin };
