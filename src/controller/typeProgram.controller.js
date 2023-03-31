const { httpError } = require("../helpers/hanledeError");
const typeProgram = require("../models/typeProgram.model");

const getTypePrograms = async (req, res, next) => {
    try {
        const listall = await typeProgram.find();
    
        res.send({ data: listall });
    } catch (error) {
        httpError(res, error);
    }
}

const getTypeProgram = async (req, res, next) => {
    try {
        const listone = await typeProgram.findById(req.params.id);
    
        res.send({ data: listone });
    } catch (error) {
        httpError(res, error);
    }
}
module.exports = {
    getTypePrograms,
    getTypeProgram
};