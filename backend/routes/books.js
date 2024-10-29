const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch popular books from Open Library API
router.get('/popular', async (req, res) => {
    try {
        const response = await axios.get('https://openlibrary.org/subjects/popular.json');
        res.json(response.data.works);
        console.log(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;