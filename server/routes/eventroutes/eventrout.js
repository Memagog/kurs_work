const express = require('express');
const eventController = require('../../controller/event/eventController');
const router = express.Router();


router.post('/create', eventController.crateEvent)
router.get('/events',eventController.getEvent)
router.get('/', eventController.getOneEvent)
router.get('/author', eventController.checkName)
module.exports =  router;