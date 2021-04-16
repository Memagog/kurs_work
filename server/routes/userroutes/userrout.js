const express = require('express');
const userController = require('../../controller/user/userController');
const {check} = require('express-validator');
const authMiddleware = require('../../middleware/authMiddleware');
const checkRoleMiddleware = require('../../middleware/checkRoleMiddleware');
const router = express.Router();

router.post('/registration',[
       check("email"," email' should not be empty").notEmpty(),
       check("password","It's not valid password").isLength({min:4 , max: 12}),
],userController.registration)
router.post('/login',userController.login)
router.get('/auth',authMiddleware,userController.auth)
router.get('/users',checkRoleMiddleware('ADMIN'),userController.getAllUsers)

module.exports =  router;