const { uniq } = require('lodash')
const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','worker','manager']
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }
});

//create person model
const person = mongoose.model('Person',PersonSchema)

module.exports=person