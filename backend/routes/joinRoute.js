const express = require('express');

const router = express.Router();

const {showJoinPage} = require('../controllers/joinController');

router.get('/', showJoinPage);

module.exports = router;