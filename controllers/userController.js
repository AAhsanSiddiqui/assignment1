const User = require("../models/userModel");
const AppError = require("../util/appError");
const catchAsync = require("../util/catchAsync");



exports.creatUser = async (req, res, next) => {

    try {
        const newUser = await User.create(req.body);

        res.json({
            status: "success",
            data: {
                user: newUser
            }
        })
        
    } catch (error) {
        res.json({
            status: "false",
            data: error
        })
    }

 
}


exports.getAllUser = catchAsync (async (req, res, next) => {

        const allUsers = await User.find();

        res.json({
            count: allUsers.length,
            status: "success",
            data: {
                user: allUsers
            }
        })  
})


exports.getUser = catchAsync( async (req, res, next) => {
        const user = await User.findById(req.params.id);

        if(!user){
            return next( new AppError("no user found with this id ", 404))
        }
        res.json({
            status: "success",
            data: {
                user: user
            }
        })
})

exports.updateUser = catchAsync(async (req, res, next) => {
   
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
          });
          if(!user){
            return next( new AppError("no user found with this id ", 404))
        }

          res.json({
            status: "success",
            data: {
            user: updatedUser
            }
        })  
});

exports.deleteUser = catchAsync( async (req, res, next) =>{
    
         await User.findByIdAndUpdate(req.params.id);

         if(!user){
            return next( new AppError("no user found with this id ", 404))
        }
          res.json({
            status: "success",
        })
})
