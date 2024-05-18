require('dotenv').config();

const express = require('express');
const cookieParse = require('cookie-parser');
const path = require('path');
const defaultPath = require('./routes/index');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const server = express();
const {updateEventStatus} = require('./middleware/eventStatusUpdate');
const cron = require('node-cron');

server.use(express.json());

server.use(cookieParser());

server.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

server.use('/finder/api/', defaultPath);

cron.schedule('* * * * *', updateEventStatus);

mongoose.connect(process.env.MONGO_URI).then(
    () => {
        server.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
).catch((error) => {
    console.log(error);
});


