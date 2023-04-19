const responseApi = require("../helpers/responseApi");
const otherActivity =  require ('../models/otherActivity.model')


const  getotherActivitys = async (req, res) => {
    let structureApi = new responseApi();
  try {
    const allactivity  = await otherActivity.find()
    if(allactivity.length > 0) {
        structureApi.setState("200","success"," lista de actividades ")
        structureApi.setResult(allactivity)
    }else{
        structureApi.setState("200","success","no existe ninguna actidad")
        structureApi.setResult(allactivity)
    }
  } catch (error) {
    structureApi.setState("500", "error","error en la solicitud")
    structureApi.setResult(error)
  }
 res.json(structureApi.toResponse())
};
const  getotherActivity = async (req, res) => {
    let structureApi = new responseApi();
    try {
      const oneactivity  = await otherActivity.findById(
        req.params.id
      )
      if(oneactivity) {
          structureApi.setState("200","success"," lista de actividades ")
          structureApi.setResult(oneactivity)
      }else{
          structureApi.setState("200","success","no existe ninguna actidad")
          structureApi.setResult(oneactivity)
      }
    } catch (error) {
      structureApi.setState("500", "error","error en la solicitud")
      structureApi.setResult(error)
    }
   res.json(structureApi.toResponse())
};
const  createotherActivity = async (req, res) => {

    let structureApi = new responseApi();
try {
    const newotherActivity = await otherActivity.create(req.body)
    structureApi.setState("200", "success","activity se creo con exito ")
    structureApi.setResult(newotherActivity)

} catch (error) {
        structureApi.setState("500", "error","error en la solicitud")
    structureApi.setResult(error)
}
res.json(structureApi.toResponse())

};
const updateotherActivity = async (req, res) => {
    let structureApi = new responseApi();
    try {
      const updateactivity  = await otherActivity.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
   
          structureApi.setState("200","success"," se actualizo bien")
          structureApi.setResult(updateactivity)
    
        
    } catch (error) {
      structureApi.setState("500", "error","error en la solicitud")
      structureApi.setResult(error)
    }
   res.json(structureApi.toResponse())
};
const  deleteotherActivity = async (req, res) => {
    let structureApi = new responseApi();
    try {
      const deleteactivity  = await otherActivity.findByIdAndDelete(
        req.params.id,
       
      )
   
          structureApi.setState("200","success"," se elimino")
          structureApi.setResult(deleteactivity)
    
        
    } catch (error) {
      structureApi.setState("500", "error","error en la solicitud")
      structureApi.setResult(error)
    }
   res.json(structureApi.toResponse())
};

module.exports ={
    getotherActivitys,
    getotherActivity,
    createotherActivity,
    updateotherActivity,
    deleteotherActivity
}