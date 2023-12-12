const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    // Gérer la requête GET pour /api/character ici
    
    const apiUrl = 'https://narutodb.xyz/api/character?limit=1500';
    // Effectuer la requête GET vers l'API avec axios
   
    axios.get(apiUrl)
        .then(response => {
            // Gérer la réponse de l'API
      
            res.send(response.data);
        })
        .catch(error => {
            // Gérer les erreurs survenues pendant la requête
        
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = router;
