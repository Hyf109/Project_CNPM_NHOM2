const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const managerSchema = new Schema({
    user_id: {
        type: String,
        requried: true
    },
    events: [
        {
            event_id: {
                type: String,
            },
            is_host: {
                type: Boolean
            }
        }
    ]
});

module.exports = mongoose.model('event_manager', managerSchema);