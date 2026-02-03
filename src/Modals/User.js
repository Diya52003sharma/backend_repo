const mongoose=require('mongoose')

const userSchema=new mongoose.model({
    name:{type:String,required:[true,"name is required"]},
    email:{type:String,require:[true,"email is required"]},
    password:{type:String,require:[true,"password is required"]}
},
{ timestamp:true})

const User=mongoose.model('user',userSchema)
module.exports=User;