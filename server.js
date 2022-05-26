const express = require('express');

const app = express();

const PORT = 3000;

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});
