const userCredentialSchema = require('../models/userCredentialModel');

//Login user account
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userCredential = await userCredentialSchema.login(email, password);
        res.status(200).json({mssg: 'Login successful!',userCredential});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

//Register user account
const registerUser = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const userCredential = await userCredentialSchema.register(email, username, password);
        res.status(200).json({email, userCredential});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    loginUser,
    registerUser
}

