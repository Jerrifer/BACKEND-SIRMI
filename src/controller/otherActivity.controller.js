const responseApi = require("../helpers/responseApi");
const otherActivityModel =  require ('../models/otherActivity.model')

// list all other activities
const  getOtherActivities = async (req, res) => {
    let structureApi = new responseApi();
  try {
    const allOtherActivities  = await otherActivityModel.find()
    if(allOtherActivities.length > 0) {
        structureApi.setState("200","success","Reportes de otras actividades encontrados")
        structureApi.setResult(allOtherActivities)
    }else{
        structureApi.setState("200","success","No hay reportes de otras actividades")
        structureApi.setResult(allOtherActivities)
    }
  } catch (error) {
    structureApi.setState("500", "error","error en la solicitud")
    structureApi.setResult(error)
  }
 res.json(structureApi.toResponse())
};

// Get a report of other activity
const  getOtherActivity = async (req, res) => {
    let structureApi = new responseApi();
    try {
      const oneactivity  = await otherActivityModel.findById(
        req.params.id
      )
      if(oneactivity) {
          structureApi.setState("200","success","reporte de otra actividad encontrado")
          structureApi.setResult(oneactivity)
      }else{
          structureApi.setState("200","success","no existe el reporte")
          structureApi.setResult(oneactivity)
      }
    } catch (error) {
      structureApi.setState("500", "error","error en la solicitud")
      structureApi.setResult(error)
    }
   res.json(structureApi.toResponse())
};

// Create a report of another activity
const createOtherActivity = async (req, res) => {
  let structureApi = new responseApi();
  try {
    const newotherActivity = await otherActivityModel.create(req.body)
    structureApi.setState("200", "success","Reporte de otra actividad registrada exitosamente")
    structureApi.setResult(newotherActivity)

  } catch (error) {
        structureApi.setState("500", "error","Error en la solicitud")
    structureApi.setResult(error)
  }
  res.json(structureApi.toResponse())
};

// Update a report of another activity
const updateOtherActivity = async (req, res) => {
  let structureApi = new responseApi();
  try {
    const updateactivity  = await otherActivityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    structureApi.setState("200","success","Reporte de otra actividad actualizado exitosamente")
    structureApi.setResult(updateactivity)
  } catch (error) {
    structureApi.setState("500", "error","Error en la solicitud")
    structureApi.setResult(error)
  }
   res.json(structureApi.toResponse())
};

// Delete a report of another activity
const  deleteOtherActivity = async (req, res) => {
  let structureApi = new responseApi();
  try {
    const deleteactivity  = await otherActivityModel.findByIdAndDelete(
      req.params.id,
       
    )   
    structureApi.setState("200","success","Reporte de otra actividad eliminado exitosamente")
    structureApi.setResult(deleteactivity)
  } catch (error) {
    structureApi.setState("500", "error","Error en la solicitud")
    structureApi.setResult(error)
  }
  res.json(structureApi.toResponse())
};

//By RMI
const  otherActivitiesByRmi = async (req, res) => {
  let structureApi = new responseApi();
  try {
    const otherActivities  = await otherActivityModel.find({rmi: req.params.id}).lean()
    if(otherActivities.length > 0) {
      structureApi.setState("200","success","Reportes de otras actividades del rmi encontrados")
      structureApi.setResult(otherActivities)
  }else{
      structureApi.setState("200","success","No hay reportes de otras actividades del rmi")
      structureApi.setResult(otherActivities)
  } 
  } catch (error) {
    structureApi.setState("500", "error","Error en la solicitud")
    structureApi.setResult(error)
  }
  res.json(structureApi.toResponse())
};

module.exports ={
    getOtherActivities,
    getOtherActivity,
    createOtherActivity,
    updateOtherActivity,
    deleteOtherActivity,
    otherActivitiesByRmi
}