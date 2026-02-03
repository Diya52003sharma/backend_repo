const mongoose=require("mongoose");
const foodSchema=new mongoose.Schema({
    name:{type:String,required:[true,"name is required"],trim:true},
    cuisine:{type:String,required:true,enum: ["Snacks", "Bevegers", "Desert", "Meal"]},
    price:{type:Number,required:[true,"price is required"],},
},
{
    timestamps:true
})
const Food=mongoose.model("food",foodSchema)
module.exports=Food;