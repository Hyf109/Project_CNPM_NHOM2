require('dotenv').config();

const express = require('express');
const path = require('path');
const defaultPath = require('./routes/index');
const server = express();

server.use(express.json());

server.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

server.use('/', defaultPath);


//TODO: Put .env in config file
server.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
})





