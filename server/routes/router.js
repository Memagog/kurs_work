const express = require('express');
const router = express.Router();
const userRouter = require('./userroutes/userrout');
const eventRouter = require('./eventroutes/eventrout');
const jobsRouter = require('./jobsrouter/jobsrouter');
router.use('/user',userRouter);
router.use('/events', eventRouter);
router.use('/jobs',jobsRouter)
module.exports =  router;