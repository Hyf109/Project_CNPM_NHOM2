const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    host_id: {
        type: String,
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
    },
    status: {
        type: String,
    },
    capacity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    member_list: [
        {
            member_id: String
        }
    ]
});

eventSchema.pre('save', function(next) {
    const now = new Date();
    if (now < this.startTime) {
      this.status = 'upcoming';
    } else if (now >= this.startTime && now <= this.endTime) {
      this.status = 'occurring';
    } else if (now > this.endTime) {
      this.status = 'ended';
    }
    next();
});
  

module.exports = mongoose.model('events', eventSchema);