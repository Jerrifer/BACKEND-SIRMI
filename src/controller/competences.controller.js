const { httpError } = require("../helpers/hanledeError");


const Competences = require("../models/competence.model")



const getcompetences = async (req, res) => {

};



const createcompetences = async (req, res) => {
try {
    const { _id, norm, name, competition_code, duration, formationprograms} = req.body;

    const result = await Competences.create({ _id, norm, name, competition_code, duration, formationprograms})

    res.send({ data: result });

} catch (error) {
    httpError(res, error);

}
};


module.exports = {createcompetences, getcompetences }
