const responseApi = require("../helpers/responseApi");
const Municipalitie = require("../models/municipalitie.model");

const getMunicipalities = async (req, res) => {
    let structureApi = new responseApi();

    try {
        const allMunicipalities = await Municipalitie.find().populate('regionale');
    
        structureApi.setState("200", "success", "Municipios encontrados");
        structureApi.setResult(allMunicipalities);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
    }
    res.json(structureApi.toResponse());

};

const getMunicipality = async (req, res) => {
    let structureApi = new responseApi();
    try {
        const municipality = await Municipalitie.findById(req.params.id).populate('regionale');
    
        structureApi.setState("200", "success", "Municipio encontrado");
        structureApi.setResult(municipality);
    } catch (error) {
        structureApi.setState("500", "error", "Error en la solicitud");
        structureApi.setResult(error);
    }

    res.json(structureApi.toResponse());
}

module.exports = {
    getMunicipalities,
    getMunicipality
};