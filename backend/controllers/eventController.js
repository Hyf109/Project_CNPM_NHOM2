const eventSchema = require('../models/eventModel');
const managerSchema = require('../models/managerModel');

const {getUserCurrentTime} = require('../middleware/userTime');

const mongoose = require('mongoose');

//
const getEventManager = async (req, res) => {
    try {
        const manager = await managerSchema.findOne({user_id: res.locals.user._id});

        res.status(200).json(manager);
    } catch (err) {
        res.status(400).json(err);
    }
}


//Create event
const createEvent = async(req, res) => {
    try {
        let user_id = res.locals.user._id.toString();
        let username = res.locals.user.username.toString();
        req.body.host_id = user_id;
        req.body.host_name = username;

        
        const now = getUserCurrentTime();
        console.log(now);

        
        if (req.body.startTime < now) {
            return res.status(400).json({mssg: 'Cannot an event in the past'});
        }

        if (req.body.startTime > req.body.endTime) {
            return res.status(400).json({mssg: 'End time must be later than start time'});
        }

        req.body.status = 'upcoming';
        const event = await eventSchema.create(req.body);
        
        const manager = await managerSchema.findOne({user_id: res.locals.user._id});
        
        manager.events.push({
            event_id: event._id,
            is_host: true
        });

        event.member_list.push({
            member_id: user_id,
            username: username
        })

        manager.save();
        event.save();

        res.status(200).json({event, manager});
    } catch (error) {
        res.status(400).json({mssg: 'Cannot create event', error: error.message});
    }
}

//Get all events
const getEvents = async(req, res) => {
    try {
        const { location, title, startTime, endTime, status, host_id, event_id_list, joined_event_id_list} = req.body; //status: upcoming, occuring, ended
        let query = {};
        

        if (host_id) {
            query.host_id = host_id;
            if (status) {
                query.status = status;
            }    
        } else if (status) {
            query.status = status;
        }


        if (title) {
            query.title = new RegExp(title, 'i');
        }

        if (location) {
            query.location = new RegExp(location, 'i');
        }
        
        if (event_id_list) {
            query._id = { $nin: event_id_list };
        }

        if (joined_event_id_list) {
            if (status) {
                query.$and = [{_id: { $in: joined_event_id_list }}, {status: status}];
            } else {
                query._id = { $in: joined_event_id_list };
            }
        }

        if (startTime && endTime) {
            query.startTime = { $gte: new Date(startTime) };
            query.endTime = { $lte: new Date(endTime) };
        }

        const event = await eventSchema.find(query);
        console.log("Query result", query);
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
const updateEvent = async (req, res) => {
    const {id} = req.params;

    try {
        const event = await eventSchema.findOneAndUpdate({_id: id}, {...req.body}, {new: true});
        f
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
        //Remove event from all user's event manager
        const event = await eventSchema.findOne({_id: id});

        if (event.host_id === res.locals.user._id.toString()) {
            await Promise.all(event.member_list.map(async (member) => {
                await managerSchema.findOneAndUpdate(
                    {user_id: member.member_id},
                    {$pull: {events: {event_id: id}}},
                    {new: true}
                );
            }));
            
            //Remove event
            await eventSchema.findOneAndDelete({_id: id});
    
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json('Cannot find event');
            }

            return res.status(200).json({mssg: 'Deleted event'});
        }

        res.status(400).json({mssg: 'User have no permission to delete this event'});

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Join event
const joinEvent = async(req, res) => {
    const event_id = req.params.id;
    const member_id = res.locals.user._id;
    const username  = res.locals.user.username;
    
    try {
        //Add member_id to event's member list
        const event = await eventSchema.findById(event_id);

        if (event.member_list.length >= event.capacity && event.capacity > 0) {
            return res.status(400).json({mssg: 'Event is full'});
        }

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
                member_id: member_id,
                username: username
            });
    
            await manager.save();
            await event.save();
    
            res.status(200).json({mssg: 'User joined event'});
        } else {
            res.status(400).json({mssg: 'You already joined the event'});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Leave event
const leaveEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const user_id = res.locals.user._id;
    
        //Remove user from event
        await eventSchema.findOneAndUpdate(
            {_id: id},
            {$pull: {member_list: {member_id: user_id}}}
        );
    
        //Remove event from user's manager
        await managerSchema.findOneAndUpdate(
            {user_id: user_id},
            {$pull: {events: {event_id: id}}},
            {new: true}
        );

        res.status(200).json({mssg: 'Left event'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = {
    createEvent, 
    deleteEvent,
    getEventByID,
    getEvents,
    updateEvent,
    joinEvent,
    leaveEvent,
    getEventManager
}


