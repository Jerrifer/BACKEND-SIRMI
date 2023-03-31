const { httpError } = require("../helpers/hanledeError");
const programLevels = require("../models/programLevels.model");

const getProgramLevels = async (req, res, next) => {
    try {
        const listall = await programLevels.find();
    
        res.send({ data: listall });
    } catch (error) {
        httpError(res, error);
    }
}

const getProgramLevel = async (req, res, next) => {
    try {
        const listone = await programLevels.findById(req.params.id);
    
        res.send({ data: listone });
    } catch (error) {
        httpError(res, error);
    }
}

module.exports = {
    getProgramLevels,
    getProgramLevel
}
