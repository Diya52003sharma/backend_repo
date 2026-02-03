const express=require('express');
const app=express()
const db=require('./src/config/database')
const hotelRoutes=require("./src/Routes/hotelRoutes")
const foodRoutes=require("./src/Routes/foodRoutes")
const conatctRoutes=require("./src/Routes/contactRoutes")
const cors=require('cors')
app.use(cors())
app.use(express.json())
db()
app.use("/hotels",hotelRoutes)
app.use("/foods",foodRoutes)
app.use("/contacts",conatctRoutes)
const Port=3000
app.listen(Port,()=>
{
    console.log(`server is stat at ${Port}`);
    
})