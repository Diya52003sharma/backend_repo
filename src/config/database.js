const mongoose=require('mongoose')
const connectDB=async()=>
{
    try{
        await mongoose.connect('mongodb://localhost:27017/hotel')
        console.log("DATABASE CONNECTED");
    }
    catch(err)
    {
        console.log("failed db conection")   
    }
}
module.exports=connectDB;