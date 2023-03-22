const { httpError } = require('../helpers/hanledeError')
const { encrypt, compare } = require('../helpers/Bcript')
const { tokenSign } = require('../helpers/token')
const userModel = require('../models/user.model')
const estructuraApi = require('../helpers/responseApi');

const signin = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = await compare(password, user.password) //TODO: Contraseña!

        //TODO JWT 👉
        const tokenSession = await tokenSign(user) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: user,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
};



const signup =  async (req, res) => {

    let responseApi = new estructuraApi()
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!

        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        responseApi.setState(200, 'success', 'Usuario registrado correctamente')
        responseApi.setResult(registerUser)

        

    } catch (error) {
        responseApi.setState(500, 'error', 'Error')
        responseApi.setResult(error)
    }

    res.send(responseApi.toResponse())
}


module.exports = { signup, signin }