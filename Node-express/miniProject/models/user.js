
const mongoose=require('mongoose')

const Schema =mongoose.Schema 

 const usersSchema= new Schema({

    Name:{
       type:String,
        required:true,

    },
    Email:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
})

const User=mongoose.model("User",usersSchema)
module.exports = User