const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: [true, "User must have name"]
    },
    
})

const CategoryM = mongoose.model("Catogry", categorySchema)

module.exports = CategoryM