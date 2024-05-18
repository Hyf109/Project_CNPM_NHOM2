const profileSchema = require('../models/profileModel');

//Get user own profile
const getProfile = async (req, res) => {
    try {
        const user_id = res.locals.user._id.toString();
        console.log(user_id);
        const profile = await profileSchema.findOne({user_id: user_id});
        res.status(200).json({profile});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

//Get other user's profile
const getProfileByID = async (req, res) => {
    try {
        const {id} = req.params;
        const profile = await profileSchema.findOne({user_id: id});
        res.status(200).json({profile});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

//Update profile
const updateProfile = async (req, res) => {
    try {
        const user_id = res.locals.user._id;
        const {name, location, age, description} = req.body;

        let updateOperation;
        let arrayFilters;
        switch (req.body.contact_detail.op) {
            case 'add':
                updateOperation = 
                {$push: 
                    {
                        "contact_detail.contacts": req.body.contact_detail.contact
                    }
                };
                break;
            case 'remove':
                updateOperation = 
                {$pull: 
                    {"contact_detail.contacts": 
                        {_id: req.body.contact_detail.contact._id}
                    }
                };
                break;
            case 'update':
                updateOperation = 
                {$set: 
                    {
                        "contact_detail.contacts.$[elem]": req.body.contact_detail.contact
                    }
                };
                arrayFilters = [{"elem._id": req.body.contact_detail.contact._id}];
                break;
        }

        const profile = await profileSchema.findOneAndUpdate({user_id: user_id}, 
            {
                age: age,
                name: name, 
                description: description,
                location: location,
                ...updateOperation
            },
            {
                new: true,
                arrayFilters: arrayFilters
            }
        )

        res.status(200).json({profile});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = {
    updateProfile,
    getProfileByID,
    getProfile
}