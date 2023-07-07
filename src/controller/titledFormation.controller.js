const resposeApi = require("../helpers/responseApi");
const RmiModel = require("../models/rmi.model");
const TitledFormationModel = require("../models/titledFormation.model");
const LearningResultModel = require("../models/learningResult.model");

// list all Titled formation
const getTitledFormations = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    // const allTitledFormations = await TitledFormationModel.find({rmi: req.params.id})
    const allTitledFormations = await TitledFormationModel.find()
    if (allTitledFormations.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Formaciones tituladas encontradas"
      );
      structureApi.setResult(allTitledFormations);
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay formaciones tituladas registradas"
      );
      structureApi.setResult(allTitledFormations);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// list one Titled formation
const getTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const titledFormation = await TitledFormationModel.findById(req.params.id).populate([
      "formation_program", "competence", "rmi"
    ]).lean();

    if (titledFormation) {
      const learningResults = await getLearningResults(titledFormation.learning_results)
      structureApi.setState(
        "200",
        "success",
        "formación titulada encontrada exitosamente"
      );
      structureApi.setResult({titledFormation, learningResults});
    } else {
      structureApi.setState(
        "200",
        "success",
        "No existe la formación titulada"
      );
      structureApi.setResult(titledFormation);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  await res.json(structureApi.toResponse());
};

// list learning resulst by titled training report
const getLearningResults = async (learning_results) => {
  const learningResults = await Promise.all(learning_results.map( async (learningResult) => {
    const data = await LearningResultModel.findById(learningResult.learning_result);
    console.log(data);
    // data.end_date = learningResult.end_date
    return new Promise((resolve) => {
      setTimeout(() => {
        // resolve(data);
         resolve({learning_result: data, end_date: learningResult.end_date});
      }, 1000);
    });
  }))
  
  return learningResults
};

//  create a Titled formation
const createTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    console.log(req.body)
    const { work_days, schedule, rmi } = req.body
    // const daysWorkedFiltered = await filterDaysWorkedBySchedule(work_days, schedule)
    console.log("EOOO");
    // req.body.work_days = daysWorkedFiltered
    // const newTitledFormation = await TitledFormationModel.create(req.body);
     const rmiUpdateHours = await RmiModel.findById(rmi);

     console.log(rmiUpdateHours);

     rmiUpdateHours.total_hours_formation = rmiUpdateHours.total_hours_formation
    structureApi.setState(
      "200",
      "success",
      "Formación titulada registrada exitosamente"
    );
    structureApi.setResult(newTitledFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// filtrar los días seleccionados en el calendario por los días de la semana (lunes, martes, etc.) que seleccionaron el el horario
const filterDaysWorkedBySchedule = async (workdays, schedule) => {
  const selectedWeekDays = await schedule.filter((weekday) => weekday.start_time !== '' && weekday.end_time !== '')
  let daysWorkedFiltered = []
  await selectedWeekDays.map((value) => {
      workdays.map((workday) => {
        if (workday.week_day === value._id) {
          return (
            daysWorkedFiltered.push(workday.day)
          )
        }
      })
  })
  return daysWorkedFiltered
};

// update a Titled formation
const updateTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const { work_days, schedule } = req.body
    const daysWorkedFiltered = await filterDaysWorkedBySchedule(work_days, schedule)

    req.body.work_days = daysWorkedFiltered

    const TitledFormation = await TitledFormationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    structureApi.setState(
      "200",
      "success",
      "Formación titulada actualizada exitosamente"
    );
    structureApi.setResult(TitledFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};

// delete a Titled formation
const deleteTitledFormation = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const TitledFormation = await TitledFormationModel.findByIdAndDelete(req.params.id);
    structureApi.setState(
      "200",
      "success",
      "Formación titulada eliminada exitosamente"
    );
    structureApi.setResult(TitledFormation);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

const titledFormationsByRmi = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const allTitledFormations = await TitledFormationModel.find({rmi: req.params.id}).populate([
      "formation_program", "competence"
    ]).lean();
    const rmi = await rmiModel.findById(req.params.id)
    if (allTitledFormations.length > 0) {
      structureApi.setState(
        "200",
        "success",
        "Formaciones tituladas encontradas"
      );
      structureApi.setResult({ rmi, allTitledFormations});
    } else {
      structureApi.setState(
        "200",
        "success",
        "No hay formaciones tituladas registradas"
      );
      structureApi.setResult({ rmi, allTitledFormations});
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
    console.log(error);
  }
  res.json(structureApi.toResponse());
};


module.exports = {
  getTitledFormations,
  getTitledFormation,
  createTitledFormation,
  updateTitledFormation,
  deleteTitledFormation,
  titledFormationsByRmi
};

  

// {
//   program_code,
//   program_name,
//   program_version,
//   total_duration,
//   thematic_line,
//   type_program,
//   program_level,
// } 