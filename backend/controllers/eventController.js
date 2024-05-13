const eventSchema = require('../models/eventModel');
const managerSchema = require('../models/managerModel');

const mongoose = require('mongoose');


//Create event
const createEvent = async(req, res) => {
    try {
        let user_id = res.locals.user._id.toString();
        req.body.host_id = user_id;

        const event = await eventSchema.create(req.body);
        const manager = await managerSchema.findOne({user_id: res.locals.user._id});
        
        manager.events.push({
            event_id: event._id,
            is_host: true
        });

        event.member_list.push({
            member_id: user_id
        })



        manager.save();
        event.save();

        res.status(200).json({event, manager});
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

//Join event
const joinEvent = async(req, res) => {
    const event_id = req.params.id;
    const member_id = res.locals.user._id;
    
    try {
        //Add member_id to event's member list
        const event = await eventSchema.findById(event_id);

        //Check if user already in event
        const flag = event.member_list.find(tmp => tmp.member_id === member_id.toString());

        if (!flag) {
            //Add event_id and is_host to user's event manager
            const manager = await managerSchema.findOne({user_id: member_id});

            manager.events.push({
                event_id: event_id,
                is_host: false
            });
    
            event.member_list.push({
                member_id: member_id
            });
    
            await manager.save();
            await event.save();
    
            res.status(200).json({mssg: 'User joined event'});
        } else {
            res.status(200).json({mssg: 'You already joined the event'});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = {
    createEvent, 
    deleteEvent,
    getEventByID,
    getEvents,
    updateEvent,
    joinEvent
}


