const { encrypt, compare } = require("../helpers/Bcript");
const { tokenSign } = require("../helpers/token");
const userModel = require("../models/user.model");
const estructuraApi = require("../helpers/responseApi");

const signin = async (req, res) => {
  let responseApi = new estructuraApi();

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      responseApi.setState(404, "success", "usuario no existe ");
      responseApi.setResult({ error: "User not found" });
    }

    const checkPassword = await compare(password, user.password); //TODO: Contraseña!

    //TODO JWT 👉
    const tokenSession = await tokenSign(user); //TODO: 2d2d2d2d2d2d2

    if (checkPassword) {
      //TODO Contraseña es correcta!
      user.jerri = "jerri";
      responseApi.setState(200, "success", "se ingreso correctamente ");
      responseApi.setResult({ user: user, token: tokenSession });
    }

    if (!checkPassword) {
      responseApi.setState(409, "error", "Invalid password");
    }
  } catch (error) {
    responseApi.setState(500, "error", "Error");
    responseApi.setResult(error);
    console.log(error);
  }

  res.json(responseApi.toResponse());
};

const signup = async (req, res) => {
  let responseApi = new estructuraApi();
  try {
    const { email, password, first_name } = req.body;

    const passwordHash = await encrypt(password); //TODO: (123456)<--- Encriptando!!

    const registerUser = await userModel.create({
      email,
      first_name,
      password: passwordHash,
    });

    responseApi.setState(200, "success", "Usuario registrado correctamente");
    responseApi.setResult(registerUser);
  } catch (error) {
    responseApi.setState(500, "error", "Error");
    responseApi.setResult(error);
    console.log(error);
  }

  res.send(responseApi.toResponse());
};

module.exports = { signup, signin };
