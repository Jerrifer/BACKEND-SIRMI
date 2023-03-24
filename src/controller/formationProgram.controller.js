const { httpError } = require("../helpers/hanledeError");
const formationProgramModel = require("../models/formationProgram.model");
const resposeApi = require("../helpers/responseApi");
const knowledgeNetworkModel = require("../models/knowledgeNetwork.model");
const typeCertificationModel = require("../models/typeCertification.model");
const typeProgramModel = require("../models/typeProgram.model");
const areaModel = require("../models/area.model");

// list all formation programs
const getFormationPrograms = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listAll = await formationProgramModel.find();
    if (listAll.length > 0) {
      structureApi.setState("200", "success", "Programas de formacion encontrados");
      structureApi.setResult(listAll);
    } else {
      structureApi.setState("200", "success", "No hay programas de formación registrados");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }

  res.json(structureApi.toResponse());
};

// list one formation program
const getFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const formationProgram = await formationProgramModel.findById(
      req.params.id
    );
    if (formationProgram) {
        structureApi.setState("200", "success", "Programa de formacion encontrado exitosamente");
    structureApi.setResult(formationProgram);
    } else {
        structureApi.setState("200", "success", "No existe el programa de formación");
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

//  create a formation program
const createFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {

    const { name, program_code, program_version, duration, area, typeprogram, typecertification } = req.body;

    const areaFP = await areaModel.findById(area);

    if(!areaFP) {
        structureApi.setState("200", "success", "El área que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

    const typeCertification = await typeCertificationModel.findById(typecertification);
    if(!typeCertification) {
        structureApi.setState("200", "success", "El área que ingresaste no existe 2");
        return  res.json(structureApi.toResponse());
    }

    const typeProgram = await typeProgramModel.findById(typeprogram);
    if(!typeProgram) {
        structureApi.setState("200", "success", "El área que ingresaste no existe 3");
        return  res.json(structureApi.toResponse());
    }

        const newformationProgram = await formationProgramModel.create({
                    name, program_code, program_version, duration,
                    area,
                    typeprogram,
                    typecertification,
        });
         structureApi.setState("200", "success", "Programa de formacion registrado exitosamente");
         structureApi.setResult(newformationProgram);              

  } catch (error) {
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// update a formation program
const updateFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {

    const { area, typeprogram, typecertification } = req.body;

    const areaFP = await areaModel.findById(area);

    if(!areaFP) {
        structureApi.setState("200", "success", "El área que ingresaste no existe");
        return  res.json(structureApi.toResponse());
    }

    const typeCertification = await typeCertificationModel.findById(typecertification);
    if(!typeCertification) {
        structureApi.setState("200", "success", "El área que ingresaste no existe 2");
        return  res.json(structureApi.toResponse());
    }

    const typeProgram = await typeProgramModel.findById(typeprogram);
    if(!typeProgram) {
        structureApi.setState("200", "success", "El área que ingresaste no existe 3");
        return  res.json(structureApi.toResponse());
    }

    const formationProgram = await formationProgramModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState("200", "success", "Programa de formacion actualizado exitosamente");
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// delete a formation program
const deleteFormationProgram = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const formationProgram = await formationProgramModel.findByIdAndDelete(
      req.params.id
    );
    structureApi.setState("200", "success", "Programa de formacion eliminado exitosamente");
    structureApi.setResult(formationProgram);
  } catch (error) {
    structureApi.setState("500", "error", "Error");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

module.exports = {
  getFormationPrograms,
  getFormationProgram,
  createFormationProgram,
  updateFormationProgram,
  deleteFormationProgram,
};
