const express = require('express')
const router = express.Router()

const { index, create } = require('../controller/prueba')

router.post('/create', create)


router.get('/index', index)


module.exports = router