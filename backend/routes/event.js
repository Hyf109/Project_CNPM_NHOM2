const express = require('express');
const router = express.Router();
const {requireAuth, checkUser} = require('../middleware/authMiddleware');

const { getEventByID, getEvents, createEvent, deleteEvent, updateEvent, joinEvent } = require('../controllers/eventController');

router.get('/get/:id', requireAuth, getEventByID);

router.get('/get', requireAuth, getEvents);

router.post('/create', requireAuth, createEvent);

router.delete('/delete/:id', requireAuth, deleteEvent);

router.patch('/update/:id', requireAuth, updateEvent);

router.post('/join/:id', requireAuth, joinEvent);

module.exports = router;