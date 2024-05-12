const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user_id: {
        type: String,
        required: true
    }, 
    contact_detail: {
        type: String
    }, 
    description: {
        type: String
    }
});

module.exports = mongoose.model('user_profile', profileSchema);