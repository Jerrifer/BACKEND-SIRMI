const { validationResult } = require('express-validator')
const resposeApi = require("../helpers/responseApi");

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        const structureApi = new resposeApi();

        structureApi.setState("403", "error", "Error con validaciones");
        structureApi.setResult({ errors: error.array() });
        res.status(403)
        res.json(structureApi.toResponse())


    }
}

module.exports = { validateResult }