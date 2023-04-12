const express = require('express');
const router = express.Router();

const contractController = require ('../controller/contract.controller')

router.get('/',contractController.getContract)
router.get('/',contractController.getContracts)
router.post('/',contractController.createContract)
router.put('/',contractController.updateContract)
router.delete('/',contractController.deleteContract)

module.exports = router
