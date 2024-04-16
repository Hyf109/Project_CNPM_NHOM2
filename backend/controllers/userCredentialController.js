const userCredentialSchema = require('../models/userCredentialModel');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {expiresIn: '3d'});
}

//Login user account
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    if (email === null || password === null) {
        return res.json({mssg: 'All fields must be filled'});
    }

    try {
        const userCredential = await userCredentialSchema.login(email, password);
        
        const token = createToken(userCredential.id);

        res.status(200).json({mssg: 'Login successful!', token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

//Register user account
const registerUser = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const userCredential = await userCredentialSchema.register(email, username, password);
        //Create token
        const token = createToken(userCredential.id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    loginUser,
    registerUser
}

