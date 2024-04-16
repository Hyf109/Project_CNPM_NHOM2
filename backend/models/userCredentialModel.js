const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userCredentialSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

userCredentialSchema.statics.login = async function(email, password) {
    const userCredential = await this.findOne({email});
    const match = await bcrypt.compare(password, userCredential.password);
    
    if (match) {
        return userCredential;
    } else {
        throw Error('Incorrect user credential');
    }
}

userCredentialSchema.statics.register = async function(email, username, password) {
    const emailExist = await this.findOne({email});
    const usernameTaken = await this.findOne({username});

    if (emailExist) {
        throw Error('Email already in use');
    }

    if (usernameTaken) {
        throw Error('Username already taken');
    }

    //Salt added to password before hashing so hackers can't match hash of passwords that are the same
    const salt = await bcrypt.genSalt(10);

    //Hash function return an object of hashed password and the salt
    const hash = await bcrypt.hash(password, salt);

    const userCredential = await this.create({email, password: hash, username, salt});

    return userCredential;
}

module.exports = mongoose.model('userCredential', userCredentialSchema);

