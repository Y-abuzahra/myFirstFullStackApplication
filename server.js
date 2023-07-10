const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    if (quote) {
        res.status(200).send({quote: quote});
    } else {
        res.status(404).send('Not Found');
    }
});


app.listen(PORT, () => {
    console.log(`server is listining on ${PORT}`);
});

