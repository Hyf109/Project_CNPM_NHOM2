require('dotenv').config();

const express = require('express');
const path = require('path');
const defaultPath = require('./routes/index');
const { default: mongoose } = require('mongoose');
const server = express();

server.use(express.json());

server.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

server.use('/finder/api/', defaultPath);


mongoose.connect(process.env.MONGO_URI).then(
    () => {
        server.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
).catch((error) => {
    console.log(error);
});


