const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("./src/Modals/User")

// ⭐ same connection jo tum server me use karti ho

mongoose.connect('mongodb+srv://diya:5112003@food.bgm0i8m.mongodb.net/')
async function run(){

 const hash = await bcrypt.hash("123",10)

 const admin = new User({
   name:"admin",
   email:"admin@gmail.com",
   password:hash,
   role:"owner"
 })

 await admin.save()

 console.log("Admin Created ")
 process.exit()
}

run()
