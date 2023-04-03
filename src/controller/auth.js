const { encrypt, compare } = require("../helpers/Bcript");
const { tokenSign } = require("../helpers/token");
const userModel = require("../models/user.model");
const responseApi = require("../helpers/responseApi");

const signin = async (req, res) => {
  let structureApi = new responseApi();

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      structureApi.setState(404, "success", "usuario no existe ");
      structureApi.setResult({ error: "User not found" });
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
    const { email, password, first_name } = req.body;

    const passwordHash = await encrypt(password); //TODO: (123456)<--- Encriptando!!

    const registerUser = await userModel.create({
      email,
      first_name,
      password: passwordHash,
    });

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
