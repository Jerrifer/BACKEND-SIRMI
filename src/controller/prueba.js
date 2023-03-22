const formationProgramModel = require('../models/formationProgram.model');
const municipalitieModel = require('../models/municipalitie.model');

const create = async (req, res) => {
    try {
        const { name, typeprogram } = req.body;
        const resDetail = await formationProgramModel.create({ name, typeprogram });

        res.send({ data: resDetail });

    } catch (error) {
        res.send(error);
    }

};


const index =  async (req, res) => {

    try {

        // const reg = await municipalitieModel.find({regionale:1});
        const reg = await municipalitieModel.find().populate('regionale');
        res.send({ data: reg });

    } catch (error) {
        res.send(error);
    }

}



// export const validate = 



module.exports = { create, index }