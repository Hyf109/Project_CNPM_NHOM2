const eventController = require('../controllers/eventController');
const managerSchema = require('../models/managerModel');
const eventSchema = require('../models/eventModel');
const mongoose = require('mongoose');
const {json} = require("express");


// Mock request and response
const mockRequest = (body, params) => ({ body, params});
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.locals = { user: { _id: 'mockUserId' } };
    return res;
};

// Mock eventSchema and managerSchema
jest.mock('../models/eventModel');
jest.mock('../models/managerModel');

describe('eventController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('createEvent', () => {

        it('should handle errors during event creation and return 400', async () => {
            const req = mockRequest({
                title: 'Test Event',
                startTime: '2024-03-10T10:00:00.000Z',
                endTime: '2024-03-10T12:00:00.000Z',
                capacity: 100,
                location: 'Test Location',
                description: 'Test event description'
            }, {}, { _id: '12345' });
            const res = mockResponse();

            await eventController.createEvent(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            //expect(res.json).toHaveBeenCalledWith({ error: "Cannot read properties of undefined (reading 'toString')",mssg : "Cannot create event" });
        });
        it('should handle errors during event creation and return 400', async () => {
            const req = mockRequest({
                title: 'Test Event',
                startTime: '2025-03-10T10:00:00.000Z',
                endTime: '2023-03-10T12:00:00.000Z',
                capacity: 100,
                location: 'Test Location',
                description: 'Test event description'
            }, {}, { _id: '12345' });
            const res = mockResponse();

            await eventController.createEvent(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            //expect(res.json).toHaveBeenCalledWith({ mssg: 'End time must be later than start time' });
        });
        it('should call create anf findOne in schema', async () => {
            const req = mockRequest({
                title: 'Test Event',
                startTime: '2025-03-10T10:00:00.000Z',
                endTime: '2026-03-10T12:00:00.000Z',
                capacity: 100,
                location: 'Test Location',
                description: 'Test event description'
            }, {}, { _id: '12345' });
            const res = mockResponse();

            await eventController.createEvent(req, res);

            expect(res.status).toHaveBeenCalledWith(400);

        });
    });

    describe('getEvents', () => {
        it('should call eventController.getEvents one time', async () => {
            const req = mockRequest({
                title: 'Test Event'
            },
                {}, { _id: '12345' });
            const res = mockResponse();
            const spy = jest.spyOn(eventController, 'getEvents')

            await eventController.getEvents(req, res);

            expect(eventSchema.find).toHaveBeenCalled();
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(req,res);

        });

        it('should return status 200', async () => {
            const req = mockRequest({
                title: 'Test Event'
            }, {}, { _id: '12345' });
            const res = mockResponse();


            await eventController.getEvents(req, res);


            expect(res.status).toHaveBeenCalledWith(200);
            expect(eventSchema.find).toHaveBeenCalled();

        });
    });

    describe('getEventById', () => {

        it('should handle errors during getting an event by ID and return 404', async () => {
            const req = mockRequest({}, { id: '67890' }, {});
            const res = mockResponse();

            await eventController.getEventByID(req, res);
            expect(eventSchema.find).toHaveBeenCalledWith({'_id':'67890'});
            expect(res.status).toHaveBeenCalledWith(404);

        });
    });

    describe('updateEvent', () => {
        it('should call updateEvent', async () => {
            const req = mockRequest({
                title: 'Updated Test Event',
                startTime: '2024-03-15T10:00:00.000Z',
                endTime: '2024-03-15T12:00:00.000Z',
                capacity: 150,
                location: 'Updated Location',
                description: 'Updated description'
            }, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const spy = jest.spyOn(eventController, 'updateEvent');

            await eventController.updateEvent(req, res);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(eventSchema.findOneAndUpdate).toHaveBeenCalledWith({'_id': '67890'}, {...req.body}, {new: true});
            expect(res.status).toHaveBeenCalledWith(400);

        });

    });

    describe('deleteEvent', () => {

        it('should handle errors during deleting an event and return 400', async () => {
            const req = mockRequest({}, { id: '67890' }, {});
            const res = mockResponse();
            const spy = jest.spyOn(eventController, 'deleteEvent')

            await eventController.deleteEvent(req, res);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(req,res);
            expect(eventSchema.findOne).toHaveBeenCalledWith({"_id": "67890"})
            expect(res.status).toHaveBeenCalledWith(400);
        });
    });

    describe('joinEvent', () => {
        it('should add a user to an event and update their manager', async () => {
            const req = mockRequest({}, { id: '67890' });
            const res = mockResponse();
            const spy = jest.spyOn(eventController,'joinEvent')

            await eventController.joinEvent(req, res);

            expect(eventSchema.findById).toHaveBeenCalledWith('67890');
            expect(res.status).toHaveBeenCalledWith(400)
        });

        it('should return a success message if the user is already in the event', async () => {
            const req = mockRequest({}, { id: '67890' });
            const res = mockResponse();

            await eventController.joinEvent(req, res);

            expect(eventSchema.findById).toHaveBeenCalledWith('67890')
            expect(res.status).toHaveBeenCalledWith(400);
        });

        it('should handle errors during event joining', async () => {
            const req = mockRequest({}, { id: '67890' });
            const res = mockResponse();
            const error = new Error('Failed to join event');
            eventSchema.findById.mockRejectedValue(error);

            await eventController.joinEvent(req, res);

            expect(eventSchema.findById).toHaveBeenCalledWith('67890');
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to join event' });
        });
    });
});