const CategoryM = require("../models/categoryModel");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError")


exports.creatCat = catchAsync( async (req, res, next) => {

        const {name} = req.body;
        
        if(!name){
            return next(new AppError("please provide Catogery name", 400))
        }
        const newCat = await CategoryM.create(req.body);

        res.status(200).json({
            status: "success",
            data: {
                user: newCat
            }
        })
        
    })

exports.getAllCategory = catchAsync( async(req, res, next) => {

        const category = await CategoryM.find();
        res.status(200).json({
            status: "success",
            data:{
                category: category
            }
        })
    
})


exports.getCategory = catchAsync( async(req, res, next) => {

    const delteCat = await CategoryM.findById(req.params.id);
    res.status(200).json({
        status: "success",
        data:{
            category: delteCat
        }
    })

})

exports.updateCategory = catchAsync( async(req, res, next) => {

    const updatedCat = await CategoryM.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
    console.log(req.params.id);
    res.status(200).json({
        status: "success",
        data:{
            category: updatedCat
        }
    })

})


exports.deleteCategory = catchAsync( async(req, res, next) => {

    const delteCat = await CategoryM.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "success",
        data:{
            category: delteCat
        }
    })

})
