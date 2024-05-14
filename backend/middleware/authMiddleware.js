const jwt = require('jsonwebtoken');
const User = require('../models/userCredential');

//Apply this middleware to any route that needs authentication
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    //Check if token is valid
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if (err) {
                res.status(400).json({mssg: 'User not logged in'});
                console.log(err.message);
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.status(400).json({mssg: 'User not logged in'});
    }
}

//  check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };
