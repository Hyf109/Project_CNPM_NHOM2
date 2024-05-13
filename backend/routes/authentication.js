const express = require('express');
const router = express.Router();

const {signUpGet, signUpPost, loginGet, loginPost, logoutGet} = require('../controllers/authController');

router.get('/signup', signUpGet);

router.post('/signup', signUpPost);

router.get('/login', loginGet);

router.post('/login', loginPost);

router.get('/logout', logoutGet);

module.exports = router;

