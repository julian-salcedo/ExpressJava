const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
})