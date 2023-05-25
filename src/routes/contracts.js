const express = require('express');
const router = express.Router();
const contractController = require ('../controller/contract.controller');
const { validateContract, validateContractById } = require('../validators/contracts.validator');

router.get('/',contractController.getContracts)

router.get('/:id', validateContractById, contractController.getContract)

router.post('/', validateContract, contractController.createContract)

router.put('/:id', validateContractById, contractController.updateContract)

router.delete('/:id', validateContractById, contractController.deleteContract)

router.get('/bytrainingcenter/:id',contractController.contractsByTrainingCenter)

router.get('/byuser/:id',contractController.contractsByUser)

module.exports = router
