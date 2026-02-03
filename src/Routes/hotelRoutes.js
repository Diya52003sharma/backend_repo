const express=require('express')
const {createHotel,getAll,update,deleted}=require("../Controllers/hotelController")
const router=express.Router()
router.post("/add",createHotel)
router.get("/all",getAll)
router.put("/:id",update)
router.delete("/del/:id",deleted)
module.exports=router;