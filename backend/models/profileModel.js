const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user_id: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    location: {
        type: String
    },
    contact_detail: {
        contacts: [
            {
                contact_method: {
                    type: String,
                    min_length: [1, 'Contact method cannot be left empty']
                },
                detail: {
                    type: String,
                    min_length: [1, 'Contact detail cannot be left empty']
                }
            }
        ]
    }, 
    description: {
        type: String
    }
});

module.exports = mongoose.model('user_profile', profileSchema);