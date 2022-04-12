const mongoose = require('mongoose')
const signUpTemplate=new mongoose.Schema({
    collegename:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    cultural:{
        type:Boolean
    },
    sports:{
        type:Boolean
    },
    technicalevents:{
        type:Boolean
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model('registerdetails',signUpTemplate)