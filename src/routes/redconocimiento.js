const express = require('express');
const router = express.Router();
const { createknowledgeNetwork, getknowledgeNetwork, getknowledgeNetworks,updateknowledgeNetwork,deleteknowledgeNetwork } = require('../controller/knowledgeNetwork.controller');

router.get('/', getknowledgeNetwork)

router.get('/:id', getknowledgeNetworks)


router.post('/', createknowledgeNetwork)


router.put('/:id', updateknowledgeNetwork)


router.delete('/:id', deleteknowledgeNetwork)

module.exports = router