
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


// Import the characters router
const charactersRouter = require('./routes/characters');

app.use(cors());

app.use(express.json()); // Add this line to parse JSON data

app.use('/characters', charactersRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
