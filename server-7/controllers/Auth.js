const User = require("../models/User");
const Details = require("../models/Details");

exports.login = async (req, res) => {
    try{
        // get email and apssword from req body
        const { email, password } = req.body;

        // validate data
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message: 'All fields are required, please try again // from login //',
            });
        }


        // check if user exists or not
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not registered, Invalid user!",
            });
        }

        const savedPassword = user.password;

        // match password
        if(password !== savedPassword){
            return res.status(400).json({
                success: false,
                message: 'Password do not match',
            })
        }else{
            return res.status(200).json({
                success: true,
                message: 'Logged in successfully',
                data: user,
            })
        }


    }
    catch(error){
        console.log("Error while user try to log in // from login //");
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


exports.addDetails = async (req, res) => {
    try{
        // get title, description, url from req body
        const {title, description, url} = req.body;
        
        // validate data
        if(!title || !description || !url){
            return res.status(403).json({
                success: false,
                message: 'All fileds are required // from add details //',
            });
        }

        // add data to database
        const details = await Details.create({
            title,
            description,
            url,
        })

        if(!details){
            return res.status(401).json({
                success: false,
                message: 'unable to add project // from add details //'
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message: 'Project added successfully',
                data: details,
            })
        }
    }
    catch(error){
        console.log("Error while add project // from add details //.");
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteDetails = async (req, res) => {
    try{
        // get projectId from req body
        const { projectId } = req.body;

        // validate data
        if(!projectId){
            return res.status(403).json({
                success: false,
                message: 'project ID is required // from deleteDetails //',
            });
        }

        const deleteData = await Details.findByIdAndDelete({
            _id: projectId,
        })

        console.log("delete data", deleteData);
        if(!deleteData){
            return res.status(401).json({
                success: false,
                message: 'Unable to delete project // from deleteDetails //',
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message: 'Project deleted successfully',
                data: deleteData,
            })
        }
    }
    catch(error){
        console.log("Error while deleting Project");
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getDetails = async (req, res) => {
    try{
        const allProjectDetails = await Details.find({});

        if(!allProjectDetails){
            return res.status(401).json({
                success: false,
                message: "Unable to fetch details // from getDetails //",
            })
        }else{
            return res.status(200).json({
                success: true,
                message: 'All Details fetched successfully',
                data: allProjectDetails,
            })
        }
    }
    catch(error){
        console.log("Error while fetching data // getDetails //");
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}