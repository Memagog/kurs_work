const express = require('express');
const router = express.Router();
const userRouter = require('./userroutes/userrout');
const eventRouter = require('./eventroutes/eventrout');
router.use('/user',userRouter);
router.use('/events', eventRouter);
module.exports =  router;