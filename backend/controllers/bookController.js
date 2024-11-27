const asyncHandler = require('express-async-handler');
const axios = require('axios');

const getPopularBooks = asyncHandler(async (req, res) => {
    // Fetch popular books from Open Library API
    const response = await axios.get('https://openlibrary.org/subjects/popular.json');

    // Send the response data to the client
    res.status(200).json(response.data.works);
    console.log(response);
});

module.exports = { getPopularBooks };