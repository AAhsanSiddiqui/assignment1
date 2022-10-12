const AtheleteM = require("../models/athleteModel");
const catchAsync = require("../util/catchAsync");



exports.createAthelete = catchAsync( async(req, res, next) => {

    const athelete = await AtheleteM.create(req.body);
    res.status(200).json({
        status: "success",
        data:{
            category: athelete
        }
    })

})



exports.getAllAthelete = catchAsync( async(req, res, next) => {

    const atheletes = await AtheleteM.find().populate("category_id")
    res.status(200).json({
        status: "success",
        data:{
            category: atheletes
        }
    })

})


