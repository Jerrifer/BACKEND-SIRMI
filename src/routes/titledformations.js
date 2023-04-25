const express = require('express');
const router = express.Router();
const titledFormationController = require('../controller/titledFormation.controller')

router.get('/', titledFormationController.getTitledFormations)

router.get('/:id', titledFormationController.getTitledFormation)

router.post('/', titledFormationController.createTitledFormation)

router.put('/:id', titledFormationController.updateTitledFormation)

router.delete('/:id', titledFormationController.deleteTitledFormation)

module.exports = router