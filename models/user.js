const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    cpassword :{
        type : String,
        required : true
    }
})
const Users = new mongoose.model("user",  signupSchema)
module.exports = Users