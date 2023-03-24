const express = require('express');
const router = express.Router();
const { getFormationPrograms, getFormationProgram, createFormationProgram, updateFormationProgram, deleteFormationProgram } = require('../controller/formationProgram.controller');

router.get('/', getFormationPrograms)

router.get('/:id', getFormationProgram)

router.post('/', createFormationProgram)

router.put('/:id', updateFormationProgram)

router.delete('/:id', deleteFormationProgram)

module.exports = router