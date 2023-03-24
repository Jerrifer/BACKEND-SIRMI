const formationProgramModel = require('../models/formationProgram.model');
const municipalitieModel = require('../models/municipalitie.model');
const regionaleModel = require('../models/regionale.model');
const trainingCenterModel = require('../models/trainingCenter.model');

const create = async (req, res) => {
     // try {
    //     const { name, regionale } = req.body;
    //     const resDetail = await municipalitieModel.create({ name, regionale });
    //     res.send({ data: resDetail });
    // } catch (error) {
    //     res.send(error);
    // }
    try {
        const { name, typeprogram } = req.body;
        const resDetail = await formationProgramModel.create({ name, typeprogram });
        res.send({ data: resDetail });
    } catch (error) {
        res.send(error);
    }
};

const index =  async (req, res) => {

    // try {
        // const reg = await trainingCenterModel.find({municipalitie:'Popayan'});

        // reg.map(async e => {
        //     let obj = {}
        //     obj = await formationProgramModel.find({trainingcenters:e.name})
        //     console.log({obj});
        //     res.json(obj)
        // })


        const reg = await trainingCenterModel.find().populate({ 
            path: 'municipalitie',
            populate: {
              path: 'regionale',
              model: 'Regionale'
            }
         });
        res.json(reg)
}



// export const validate = 



module.exports = { create, index }