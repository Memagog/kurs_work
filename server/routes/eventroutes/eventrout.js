const express = require('express');
const eventController = require('../../controller/event/eventController');
const router = express.Router();


router.post('/event', eventController.crateEvent)
router.get('/',eventController.getEvent)
router.get('/:id', eventController.getOneEvent)

module.exports =  router;