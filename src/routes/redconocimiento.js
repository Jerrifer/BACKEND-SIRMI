const express = require('express');
const router = express.Router();
const {  createknowledgeNetwork,getknowledgeNetwork  } = require('../controller/knowledgeNetwork.controller');

 router.get('/', getknowledgeNetwork)

// router.get('/:id', getItem)


router.post('/', createknowledgeNetwork)


// router.put('/:id', updateItems)


// router.delete('/:id', deleteItems)

module.exports = router