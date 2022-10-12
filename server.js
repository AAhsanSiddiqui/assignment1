const mongoose = require("mongoose")
const app = require("./app")
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

mongoose.connect("mongodb://localhost:27017/User")




app.listen(3000, ()=>{
 console.log("server is running on port 3000");
})