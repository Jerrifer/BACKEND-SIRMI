const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/', userController.getUsers)

router.get('/:id', userController.getUser)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

module.exports = router