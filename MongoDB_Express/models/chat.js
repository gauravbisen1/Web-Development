const mongoose = require("mongoose");

 chatSchema = new mongoose.Schema({
    from : {
        type:String,
        required:true
    },
    to : {
        type:String,
        required:true
    },
    msg : {
        type:String,
        maxLength:50
    },
    created_at : {
        type:Date,
        required:true
    },
 });

 const Chat = mongoose.model("Chat",chatSchema);//chat collection created in whatsapp database
 module.exports = Chat;