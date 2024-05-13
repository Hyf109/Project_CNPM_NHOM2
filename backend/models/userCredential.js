const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

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

//Call a function after a document is saved to database
// userSchema.post('save', function(doc, next) {
//     console.log('User saved account', doc);
//     next();
// })

//Call a function before doc is saved:
userSchema.pre('save', async function(next) {
    //User normal function to use this operator to access local instance of use data object
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//Static method to login user

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email : email});

    if (user) {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            return user;
        }
    }

    throw Error('Incorrect user credential');
}

const User = mongoose.model('user', userSchema);

module.exports = User;
