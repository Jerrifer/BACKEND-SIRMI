const express = require('express');
const router = express.Router();
const { getItems, getItem, createItems, updateItems, deleteItems } = require('../controller/users');

router.get('/', getItems)

router.get('/:id', getItem)


router.post('/', createItems)


router.put('/:id', updateItems)


router.delete('/:id', deleteItems)

module.exports = router