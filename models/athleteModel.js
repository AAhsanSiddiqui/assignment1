const mongoose = require("mongoose")


const atheleteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Athlete must have name"],
    },
    dob:{
        type: Date
    },
    category_id: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Catogry'
        }
      ]
})


const AtheleteM = mongoose.model("athelete", atheleteSchema)

module.exports = AtheleteM




