const mongoose = require("mongoose")
const signupSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true
    },
    cpassword :{
        type : String,
        required : true
    },
    isAuthenticated :{
        type : Boolean,
        default : false
    }
})
const Users = new mongoose.model("user",  signupSchema)
module.exports = Users