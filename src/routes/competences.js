


const express = require('express')
const router = express.Router()

const { createcompetences } = require('../controller/competences.controller')



router.post('/', createcompetences)


// router.get('/register', signup)



module.exports = router

