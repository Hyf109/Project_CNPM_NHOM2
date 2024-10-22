const express = require('express');
const { checkUser } = require('../middleware/authMiddleware');
const router = express.Router();

router.use('*', checkUser);

router.use('/event', require('./event'));

router.use('/', require('./authentication'));

router.use('/user', require('./user'));

module.exports = router;
 