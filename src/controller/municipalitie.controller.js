const { httpError } = require("../helpers/hanledeError");
const Regionale = require("../models/regionale.model");
const Municipalitie = require("../models/municipalitie.model");

const getMunicipalities = async (req, res, next) => {
    try {
        const listall = await Municipalitie.find();
    
        res.send({ data: listall });
    } catch (error) {
        httpError(res, error);
    }
};

const getMunicipality = async (req, res, next) => {
    try {
        const listone = await Municipalitie.findById(req.params.id);
    
        res.send({ data: listone });
    } catch (error) {
        httpError(res, error);
    }
}

module.exports = {
    getMunicipalities,
    getMunicipality
};