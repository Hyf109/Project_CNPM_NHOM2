const authController = require('../controllers/authController');
const User = require('../models/userCredential');
const managerSchema = require('../models/managerModel');
const profileSchema = require('../models/profileModel');
const jwt = require('jsonwebtoken');

const mockRequest = (body, cookies) => ({ body, cookies });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.cookie = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

jest.mock('../models/userCredential');
jest.mock('../models/managerModel');
jest.mock('../models/profileModel');

describe('authController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('signUpPost', () => {
        it('should create a new user, token, event manager, profile and return 201', async () => {
            const req = mockRequest({ email: 'test@example.com', username: 'testuser', password: 'testpassword' }, {});
            const res = mockResponse();
            const mockUser = { _id: '12345', save: jest.fn() };
            const mockEventManager = {  events: [], save: jest.fn() };
            const mockProfileManager = {  contact_detail: '', description: '', save: jest.fn() };

            User.create.mockResolvedValue(mockUser);
            managerSchema.create.mockResolvedValue(mockEventManager);
            profileSchema.create.mockResolvedValue(mockProfileManager);

            jest.spyOn(jwt, 'sign').mockReturnValue('mockToken');

            await authController.signUpPost(req, res);
            expect(res.status).toHaveBeenCalledWith(201);

            expect(User.create).toHaveBeenCalledWith(req.body);
            expect(managerSchema.create).toHaveBeenCalledWith({ events: [] , user_id: expect.any(String) });
            expect(res.cookie).toHaveBeenCalledWith('jwt', expect.any(String), { httpOnly: true, maxAge: expect.any(Number) });

        });

        it('should handle errors during user creation and return 400', async () => {
            const req = mockRequest({ email: 'test@example.com', username: 'testuser', password: 'testpassword' }, {});
            const res = mockResponse();
            const error = new Error('User creation failed');
            User.create.mockRejectedValue(error);

            await authController.signUpPost(req, res);

            expect(User.create).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ errors: { email: '', password: '', username: '', credential: '' } });


        });

        it('should handle duplicate email error and return 400', async () => {
            const req = mockRequest({ email: 'test@example.com', username: 'testuser', password: 'testpassword' }, {});
            const res = mockResponse();
            const error = { code: 11000, keyValue: { email: 'test@example.com' } };
            User.create.mockRejectedValue(error);

            await authController.signUpPost(req, res);

            expect(User.create).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ errors: { email: 'Email already in use', password: '', username: '', credential: '' } });
        });
    });

    describe('loginPost', () => {

        it('should log in the user, set cookie and return 200', async () => {
            const req = mockRequest({ email: 'test@example.com', password: 'testpassword' }, {});
            const res = mockResponse();
            const mockUser = { _id: '12345' };

            jest.spyOn(jwt, 'sign').mockReturnValue('mockToken');

            User.login.mockResolvedValue(mockUser);

            await authController.loginPost(req, res);

            expect(User.login).toHaveBeenCalledWith('test@example.com', 'testpassword');
            expect(res.cookie).toHaveBeenCalledWith('jwt',expect.any(String), { httpOnly: true, maxAge: expect.any(Number) });
            expect(res.status).toHaveBeenCalledWith(200);
            //expect(res.json).toHaveBeenCalledWith({ user: '12345' });
        });

        it('should handle errors during login and return 400', async () => {
            const req = mockRequest({ email: 'test@example.com', password: 'testpassword' }, {});
            const res = mockResponse();
            const error = new Error('Incorrect user credential');
            User.login.mockRejectedValue(error);

            await authController.loginPost(req, res);

            expect(User.login).toHaveBeenCalledWith('test@example.com', 'testpassword');
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ errors: { email: '', password: '', username: '', credential: 'Incorrect user credential' } });
        });
    });

    describe('logoutGet', () => {
        it('should clear the JWT cookie and return 200', async () => {
            const req = mockRequest({}, {});
            const res = mockResponse();

            await authController.logoutGet(req, res);

            expect(res.cookie).toHaveBeenCalledWith('jwt', '', { httpOnly: true, maxAge: 1 });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ mssg: 'User logged out' });
        });
    });
});