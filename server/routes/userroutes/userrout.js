const express = require('express');
const userController = require('../../controller/user/userController');

const router = express.Router();

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',userController.auth)
router.get('/users',userController.getAllUsers)

module.exports =  router;