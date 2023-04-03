const responseApi = require("../helpers/responseApi");
const programLevel = require("../models/programLevel.model");

const getProgramLevels = async (req, res) => {
    let structureApi = new responseApi();
    try {
        const allProgramLevels = await programLevel.find();
    
        structureApi.setState("200", "success", "Niveles de programa encontrados");
        structureApi.setResult(allProgramLevels);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
    }
    res.json(structureApi.toResponse());
}

const getProgramLevel = async (req, res, next) => {
    let structureApi = new responseApi();
    try {
        const programLevelById = await programLevel.findById(req.params.id);
    
        structureApi.setState("200", "success", "Nivel de programa encontrado");
        structureApi.setResult(programLevelById);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
    }
    res.json(structureApi.toResponse());
}

module.exports = {
    getProgramLevels,
    getProgramLevel
}
