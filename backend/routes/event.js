const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware');

const { getEventByID, getEvents, createEvent, deleteEvent, updateEvent } = require('../controllers/eventController');

router.get('/:id', getEventByID);

router.get('/', requireAuth, getEvents);

router.post('/', createEvent);

router.delete('/:id', deleteEvent);

router.patch('/:id', updateEvent);

module.exports = router;