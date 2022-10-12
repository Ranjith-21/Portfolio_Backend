const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    contactNum:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    userComments:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("usercomments", userSchema);