const mongoose = require("mongoose")
const signupSchema = new mongoose.Schema({
    given_name : {
        type : String,
        // required : true
    },
    family_name : {
        type : String,
        // required : true
    },
    email : {
        type : String,
        // required : true,
    }
})
const Google = new mongoose.model("google",  signupSchema)
module.exports = Google