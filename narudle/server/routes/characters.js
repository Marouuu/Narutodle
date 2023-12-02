const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    // Handle the GET request for /api/character here
    // You can perform any necessary logic and send a response back
    const apiUrl = 'https://narutodb.xyz/api/character';
    // Make the GET request to the API
    // You can use any HTTP library like axios, fetch, etc.
    // Example using axios:
    axios.get(apiUrl)
        .then(response => {
            // Handle the response from the API
            // You can send the response back to the client or perform any necessary logic
            res.send(response.data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            // You can send an error response back to the client or perform any necessary logic
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = router;
