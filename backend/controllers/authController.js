const User = require('../models/userCredential')
const mongoose = require('mongoose');

//Handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);

    //Error object as json reponse to user
    let errors = {email: '', password: '', username: ''};
    
    // Duplicate error code 11000
    if (err.code === 11000) {
        if (err.keyValue.email) {
            errors.email = 'Email already in use';
        } else if (err.keyValue.username) {
            errors.username = 'Username already in use';
        }
        return errors;
    }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            //use properties.path as index for error array and update it with properties of error message
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}

const signUpGet = (req, res) => {
    
}

const signUpPost = async (req, res) => {
    const {email, username, password} = req.body;

    try {
        const user = await User.create(req.body);
        res.status(201).json('You just created an account ' + username);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

const loginGet = (req, res) => {

}

const loginPost = (req, res) => {
    res.send(req.body);
}

module.exports = {
    signUpGet,
    signUpPost,
    loginGet,
    loginPost
}
