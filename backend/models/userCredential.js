const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true, //Cant do custom message with unique
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'] //Email validation
    },
    password: {
        type: String, 
        required: [true, 'Password required'],
        minLength: [8, 'Minimum password length is 8 characters']
    },
    username: {
        type: String,
        required: [true, 'Username required'],
        minLength: [2, 'Minimum length for username is 2'],
        unique: true
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
