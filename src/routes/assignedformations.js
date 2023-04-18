const express = require('express');
const router = express.Router();
const assignedFormationController = require('../controller/assignedFormation.controller')

router.get('/', assignedFormationController.getAssignedFormations)

router.get('/:id', assignedFormationController.getAssignedFormation)

router.post('/', assignedFormationController.createAssignedFormation)

router.put('/:id', assignedFormationController.updateAssignedFormation)

router.delete('/:id', assignedFormationController.deleteAssignedFormation)

module.exports = router