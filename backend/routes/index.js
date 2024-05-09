const express = require('express');
const router = express.Router();

router.use('/event', require('./event'));

router.use('/', require('./authentication'));

module.exports = router;
