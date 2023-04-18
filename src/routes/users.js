const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { validateUser } = require('../validators/users.validator');

router.get('/', userController.getUsers)

router.get('/:id', userController.getUser)

router.post('/', validateUser, userController.createUser)

router.put('/:id', validateUser, userController.updateUser)

router.delete('/:id', userController.deleteUser)

router.get('/bytrainingcenter/:id', userController.getUsersByTrainingCenter)

module.exports = router