const express = require('express');
const router = express.Router();

const {signUpGet, signUpPost, loginGet, loginPost} = require('../controllers/authController');

router.get('/signup', signUpGet);

router.post('/signup', signUpPost);

router.get('/login', loginGet);

router.post('/login', loginPost);

module.exports = router;

