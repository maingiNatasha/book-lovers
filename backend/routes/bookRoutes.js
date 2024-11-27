const express = require('express');
const { getPopularBooks } = require('../controllers/bookController');
const axios = require('axios');
const router = express.Router();

router.get('/popular', getPopularBooks);

module.exports = router;