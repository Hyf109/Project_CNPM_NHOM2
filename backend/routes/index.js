const express = require('express');
const router = express.Router();

const joinRoute = require('./joinRoute');

router.use('/join', joinRoute);

module.exports = router;
