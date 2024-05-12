const express = require('express');
const router = express.Router();
const {requireAuth, checkUser} = require('../middleware/authMiddleware');

const { getEventByID, getEvents, createEvent, deleteEvent, updateEvent } = require('../controllers/eventController');

router.get('/:id', requireAuth, getEventByID);

router.get('/', requireAuth, getEvents);

router.post('/', requireAuth, createEvent);

router.delete('/:id', requireAuth, deleteEvent);

router.patch('/:id', requireAuth, updateEvent);

module.exports = router;