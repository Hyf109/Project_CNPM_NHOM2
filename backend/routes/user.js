const express = require('express');
const router = express.Router();
const { getProfileByID, updateProfile, getProfile } = require('../controllers/profileController');

router.get('/', getProfile);

router.get('/:id', getProfileByID);

router.patch('/', updateProfile);

module.exports = router;