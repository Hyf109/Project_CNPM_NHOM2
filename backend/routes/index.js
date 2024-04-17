const express = require('express');
const router = express.Router();

router.use('/user', require('./userCredential'));

router.use('/event', require('./event'));

module.exports = router;
