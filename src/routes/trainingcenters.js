const express = require('express'); 

const router = express.Router();

const trainingCenterController = require ("../controller/trainingCenterController")



router.get('/',trainingCenterController.gettrainingCenter)
router.get('/:id',trainingCenterController.gettrainingCenters)

module.exports = router