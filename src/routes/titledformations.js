const express = require('express');
const router = express.Router();
const titledFormationController = require('../controller/titledFormation.controller');
const { validateTitledFormation } = require('../validators/titledFormation.validator');

router.get('/', titledFormationController.getTitledFormations)

router.get('/:id', titledFormationController.getTitledFormation)

router.post('/', validateTitledFormation, titledFormationController.createTitledFormation)

router.put('/:id', titledFormationController.updateTitledFormation)

router.delete('/:id', titledFormationController.deleteTitledFormation)

router.get('/byrmi/:id', titledFormationController.titledFormationsByRmi)

module.exports = router