const express = require('express');
const jobsController = require('../../controller/jobs/jobsController');
const router = express.Router();


router.post('/createjob', jobsController.createJob)
router.get('/resume/',jobsController.getOneJob)

module.exports =  router;