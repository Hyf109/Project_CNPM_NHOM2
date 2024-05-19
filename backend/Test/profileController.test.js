const profileSchema = require('../models/profileModel');
const profileController = require('../controllers/profileController');
const {getProfileByID} = require("../controllers/profileController");

const mockRequest = (body,params) =>({body,params});
const mockRespone = () =>{
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.locals = { user: { _id: '12345' } };
    return res;
}

jest.mock('../models/profileModel');


describe('profileController', () =>{
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getProfile',() =>{
        it('shoud call findOne in profileSchema ', async () =>{
            const req =mockRequest();
            const res = mockRespone();

            await profileController.getProfile(req,res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(profileSchema.findOne).toHaveBeenCalledWith({"user_id": "12345"});
            expect(res.json).toHaveBeenCalled();
        });
        it('should handle error and return 400', async () =>{
            const req =mockRequest();
            const res = mockRespone();
            res.locals={};

            await profileController.getProfile(req,res);

            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
    describe('getProfileByID',() =>{
        it('should call findOne ind profileSchema', async () =>{
            const req=mockRequest({},{id:'12345'});
            const res=mockRespone();

            await profileController.getProfileByID(req,res);

            expect(profileSchema.findOne).toHaveBeenCalledWith({user_id: '12345'});
            expect(res.status).toHaveBeenCalledWith(200);
        });
        it('should handle error and return 400', async () =>{
            const req=mockRequest();
            const res=mockRespone();

            await profileController.getProfileByID(req,res);

            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
});