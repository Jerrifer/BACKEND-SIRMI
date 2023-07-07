const express = require('express');
const router = express.Router();

const rmiController = require ('../controller/rmi.controller')

router.get('/',rmiController.getRmis)
router.get('/:id',rmiController.getRmi)
router.post('/',rmiController.createRmi)
router.put('/:id',rmiController.updateRmi)
router.delete('/:id',rmiController.deleteRmi)
router.get('/byuser/:id/:year',rmiController.rmiByUser)
router.get('/years/:id',rmiController.yearsByUser)

module.exports = router
