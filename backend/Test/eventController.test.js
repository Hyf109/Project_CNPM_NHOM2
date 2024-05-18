const eventController = require('../controllers/eventController');
const managerSchema = require('../models/managerModel');
const eventSchema = require('../models/eventModel');
const mongoose = require('mongoose');

// Mock Mongoose
jest.mock('mongoose');
mongoose.Types.ObjectId.isValid.mockReturnValue(true);

// Mock request and response
const mockRequest = (body, params, user) => ({ body, params, user });
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
        it('should create a new event and return 201', async () => {
            const req = mockRequest({
                host_id: '12345',
                title: 'Test Event',
                startTime: '2024-03-10T10:00:00.000Z',
                endTime: '2024-03-10T12:00:00.000Z',
                capacity: 100,
                location: 'Test Location',
                description: 'Test event description'
            }, {}, { _id: '12345' });
            const res = mockResponse();
            const mockEvent = { _id: '67890', save: jest.fn() };
            const mockManager = { events: [], save: jest.fn() };

            // eventSchema.create.mockResolvedValue(mockEvent);
            // managerSchema.findOne.mockResolvedValue(mockManager);

            await eventController.createEvent(req, res);

            // expect(eventSchema.create).toHaveBeenCalledWith({
            //     title: 'Test Event',
            //     startTime: '2024-03-10T10:00:00.000Z',
            //     endTime: '2024-03-10T12:00:00.000Z',
            //     capacity: 100,
            //     location: 'Test Location',
            //     description: 'Test event description',
            //     host_id: 'mockUserId',
            //     member_list: [{ member_id: 'mockUserId' }]
            // });
            // expect(managerSchema.findOne).toHaveBeenCalledWith({ user_id: 'mockUserId' });
            // expect(mockManager.events).toEqual([{ event_id: '67890', is_host: true }]);
            // expect(mockManager.save).toHaveBeenCalled();
            // expect(mockEvent.save).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(201);
            // expect(res.json).toHaveBeenCalledWith({ event: mockEvent, manager: mockManager });
        });

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
            const error = new Error('Event creation failed');
            eventSchema.create.mockRejectedValue(error);

            await eventController.createEvent(req, res);

            expect(eventSchema.create).toHaveBeenCalledWith({
                title: 'Test Event',
                startTime: '2024-03-10T10:00:00.000Z',
                endTime: '2024-03-10T12:00:00.000Z',
                capacity: 100,
                location: 'Test Location',
                description: 'Test event description',
                host_id: 'mockUserId',
                member_list: [{ member_id: 'mockUserId' }]
            });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Event creation failed' });
        });
    });

    describe('getEvents', () => {
        it('should get all events for a user and return 200', async () => {
            const req = mockRequest({}, {}, { _id: '12345' });
            const res = mockResponse();
            const mockEvents = [{ _id: '67890' }, { _id: '12345' }];
            const mockManager = { events: [{ event_id: '67890', is_host: true }, { event_id: '12345', is_host: false }] };

            managerSchema.findOne.mockResolvedValue(mockManager);
            eventSchema.find.mockResolvedValue(mockEvents);

            await eventController.getEvents(req, res);

            expect(managerSchema.findOne).toHaveBeenCalledWith({ user_id: 'mockUserId' });
            expect(eventSchema.find).toHaveBeenCalledWith({ _id: { $in: ['67890', '12345'] } });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ events: mockEvents });
        });

        it('should handle errors during getting events and return 400', async () => {
            const req = mockRequest({}, {}, { _id: '12345' });
            const res = mockResponse();
            const error = new Error('Failed to get events');
            managerSchema.findOne.mockRejectedValue(error);

            await eventController.getEvents(req, res);

            expect(managerSchema.findOne).toHaveBeenCalledWith({ user_id: 'mockUserId' });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get events' });
        });
    });

    describe('getEventById', () => {
        it('should get an event by ID and return 200', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const mockEvent = { _id: '67890', title: 'Test Event' };

            //eventSchema.findById.mockResolvedValue(mockEvent);

            await eventController.getEventByID(req, res);

            //expect(eventSchema.findById).toHaveBeenCalledWith('67890');
            expect(res.status).toHaveBeenCalledWith(200);
            //expect(res.json).toHaveBeenCalledWith({ event: mockEvent });
        });

        it('should handle errors during getting an event by ID and return 404', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();

            await eventController.getEventByID(req, res);
            expect(res.status).toHaveBeenCalledWith(404);

        });
    });

    describe('updateEvent', () => {
        it('should update an event and return 200', async () => {
            const req = mockRequest({
                title: 'Updated Test Event',
                startTime: '2024-03-15T10:00:00.000Z',
                endTime: '2024-03-15T12:00:00.000Z',
                capacity: 150,
                location: 'Updated Location',
                description: 'Updated description'
            }, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const mockEvent = { _id: '67890', save: jest.fn() };

            eventSchema.findOneAndUpdate.mockResolvedValue(mockEvent);

            await eventController.updateEvent(req, res);

            expect(eventSchema.findOneAndUpdate).toHaveBeenCalledWith({ _id: '67890' }, {
                title: 'Updated Test Event',
                startTime: '2024-03-15T10:00:00.000Z',
                endTime: '2024-03-15T12:00:00.000Z',
                capacity: 150,
                location: 'Updated Location',
                description: 'Updated description'
            }, { new: true });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ event: mockEvent });
        });

        it('should handle errors during updating an event and return 400', async () => {
            const req = mockRequest({
                title: 'Updated Test Event',
                startTime: '2024-03-15T10:00:00.000Z',
                endTime: '2024-03-15T12:00:00.000Z',
                capacity: 150,
                location: 'Updated Location',
                description: 'Updated description'
            }, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const error = new Error('Failed to update event');
            eventSchema.findOneAndUpdate.mockRejectedValue(error);

            await eventController.updateEvent(req, res);

            expect(eventSchema.findOneAndUpdate).toHaveBeenCalledWith({ _id: '67890' }, {
                title: 'Updated Test Event',
                startTime: '2024-03-15T10:00:00.000Z',
                endTime: '2024-03-15T12:00:00.000Z',
                capacity: 150,
                location: 'Updated Location',
                description: 'Updated description'
            }, { new: true });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to update event' });
        });
    });

    describe('deleteEvent', () => {
        it('should delete an event and return 200', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const mockEventManager = { events: [], save: jest.fn() };

            //eventSchema.findOneAndDelete.mockResolvedValue('67890');
            //managerSchema.findOneAndUpdate.mockResolvedValue(mockEventManager);
            //eventSchema.findOneAndDelete({_id: '67890'})
            //managerSchema.findOneAndUpdate();

            await eventController.deleteEvent(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            //expect(res.json).toHaveBeenCalledWith({ message: 'Event deleted' });
        });

        it('should handle errors during deleting an event and return 400', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const error = new Error('Failed to delete event');
            eventSchema.findOneAndDelete.mockRejectedValue(error);

            await eventController.deleteEvent(req, res);

            expect(eventSchema.findOneAndDelete).toHaveBeenCalledWith({ _id: '67890' });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to delete event' });
        });
    });

    describe('joinEvent', () => {
        it('should add a user to an event and update their manager', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const mockEvent = { _id: '67890', member_list: [], save: jest.fn() };
            const mockManager = { events: [], save: jest.fn() };

            eventSchema.findById.mockResolvedValue(mockEvent);
            managerSchema.findOne.mockResolvedValue(mockManager);

            await eventController.joinEvent(req, res);

            expect(eventSchema.findById).toHaveBeenCalledWith('67890');
            expect(managerSchema.findOne).toHaveBeenCalledWith({ user_id: 'mockUserId' });
            expect(mockManager.events).toEqual([{ event_id: '67890', is_host: false }]);
            expect(mockEvent.member_list).toEqual([{ member_id: 'mockUserId' }]);
            expect(mockManager.save).toHaveBeenCalled();
            expect(mockEvent.save).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ mssg: 'User joined event' });
        });

        it('should return a success message if the user is already in the event', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
            const res = mockResponse();
            const mockEvent = { _id: '67890', member_list: [{ member_id: 'mockUserId' }], save: jest.fn() };

            eventSchema.findById.mockResolvedValue(mockEvent);

            await eventController.joinEvent(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ mssg: 'You already joined the event' });
        });

        it('should handle errors during event joining', async () => {
            const req = mockRequest({}, { id: '67890' }, { _id: '12345' });
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