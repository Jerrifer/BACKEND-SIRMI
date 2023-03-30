const express = require('express');
const router = express.Router();
const formationProgramController = require('../controller/formationProgram.controller');
const { validateFormationProgram, validateFormationProgramById } = require('../validators/formationPrograms.validator')

router.get('/', formationProgramController.getFormationPrograms)

router.get('/:id', validateFormationProgramById, formationProgramController.getFormationProgram)

router.post('/', validateFormationProgram, formationProgramController.createFormationProgram)

router.put('/:id', validateFormationProgramById, validateFormationProgram, formationProgramController.updateFormationProgram)

router.delete('/:id', validateFormationProgramById, formationProgramController.deleteFormationProgram)

module.exports = router