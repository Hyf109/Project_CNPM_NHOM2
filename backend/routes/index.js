const express = require('express');
const router = express.Router();

router.use('/user', require('./userCredential'));

module.exports = router;
