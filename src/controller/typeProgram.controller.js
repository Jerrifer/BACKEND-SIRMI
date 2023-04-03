const responseApi = require("../helpers/responseApi");
const typeProgram = require("../models/typeProgram.model");

const getTypePrograms = async (req, res) => {
    let structureApi = new responseApi();

    try {
        const allTypePrograms = await typeProgram.find();
    
        structureApi.setState("200", "success", "Tipos de programa encontrados");
        structureApi.setResult(allTypePrograms);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
    }
    res.json(structureApi.toResponse());

}

const getTypeProgram = async (req, res, next) => {
    let structureApi = new responseApi();
    try {
        const typeProgramById = await typeProgram.findById(req.params.id);
    
        structureApi.setState("200", "success", "Tipo de programa encontrado");
        structureApi.setResult(typeProgramById);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
    }
    res.json(structureApi.toResponse());

}
module.exports = {
    getTypePrograms,
    getTypeProgram
};