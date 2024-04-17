const eventSchema = require('../models/eventModel');
const mongoose = require('mongoose');

//Create event
const createEvent = async(req, res) => {
    try {
        const event = await eventSchema.create(req.body);
        res.status(200).json({event});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Get all events
const getEvents = async(req, res) => {
    try {
        const event = await eventSchema.find({});
        res.status(200).json({event});
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}
//Get event by ID
const getEventByID = async(req, res) => {
    const {id} = req.params;

    try {
        const event = await eventSchema.find({_id: id});
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json('Cannot find event');
        }

        res.status(200).json({event});
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

//Update event
const updateEvent = async(req, res) => {
    const {id} = req.params;

    try {
        const event = await eventSchema.findOneAndUpdate({_id: id}, {...req.body});

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json('Cannot find event');
        }

        res.status(200).json({event});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Delete event
const deleteEvent = async(req, res) => {
    const {id} = req.params;

    try {
        const event = await eventSchema.findOneAndDelete({_id: id});
        

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json('Cannot find event');
        }

        res.status(200).json({event});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createEvent, 
    deleteEvent,
    getEventByID,
    getEvents,
    updateEvent
}


