const User = require('../models/userCredential')
const jwt = require('jsonwebtoken');

//Handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);

    //Error object as json reponse to user
    let errors = {email: '', password: '', username: '', credential: ''};

    //Incorrect email
    if (err.message === 'Incorrect user credential') {
        errors.credential = 'Incorrect user credential';
    }
    
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

//Create Web Token for user with "id" parameter
const maxAge = 3 * 24 * 60 * 60; //Max age in second

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {
        expiresIn: maxAge
    });
}

const signUpGet = (req, res) => {
    
}

const signUpPost = async (req, res) => {
    const {email, username, password} = req.body;

    try {
        const user = await User.create(req.body);
        const token = createToken(user._id); //Place this in a cookie
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});

        res.status(201).json({user: user._id}); 

    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

const loginGet = (req, res) => {

}

const loginPost = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id); //Place this in a cookie

        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});

        res.status(200).json({user : user._id});
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

const logoutGet = (req, res) => {
    //We cant delete cookie from server so we replace it with an empty jwt cookie with short age
    res.cookie('jwt', '', {httpOnly: true, maxAge: 1});
    res.status(200).json({mssg: 'User logged out'});
}

module.exports = {
    signUpGet,
    signUpPost,
    loginGet,
    loginPost,
    logoutGet
}
