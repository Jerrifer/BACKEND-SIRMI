const express = require('express');
const router = express.Router();

const contractController = require ('../controller/contract.controller')

router.get('/',contractController.getContract)
router.get('/:id',contractController.getContracts)
router.post('/',contractController.createContract)
router.put('/:id',contractController.updateContract)
router.delete('/:id',contractController.deleteContract)

module.exports = router
