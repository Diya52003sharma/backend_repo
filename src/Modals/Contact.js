const mongoose=require("mongoose")
const contactSchema =new mongoose.Schema({
    name:{type:String,required:[true,"name is required"]},
    email:{type:String,required:[true,"email is required"]},
    phoneNumber:{type:Number,required:[true,"phonenumber is required"]},
    message:{type:String,required:[true,"message is required"]}
}
,
{
    timestamps:true
})
const Contact=mongoose.model("contact",contactSchema)
module.exports=Contact;