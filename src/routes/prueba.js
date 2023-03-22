const express = require('express')
const router = express.Router()

const { index, create } = require('../controller/prueba')

router.post('/pruebacreate', create)


router.get('/pruebafind', index)


module.exports = router