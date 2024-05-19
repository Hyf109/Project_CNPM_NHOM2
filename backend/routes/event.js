const express = require('express');
const router = express.Router();
const {requireAuth, checkUser} = require('../middleware/authMiddleware');

const { getEventByID, getEvents, createEvent, deleteEvent, updateEvent, joinEvent, leaveEvent } = require('../controllers/eventController');

router.get('/get/:id', requireAuth, getEventByID);

router.post('/get', requireAuth, getEvents);

router.post('/create', requireAuth, createEvent);

router.delete('/delete/:id', requireAuth, deleteEvent);

router.patch('/update/:id', requireAuth, updateEvent);

router.post('/join/:id', requireAuth, joinEvent);

router.post('/leave/:id', requireAuth, leaveEvent)

module.exports = router;