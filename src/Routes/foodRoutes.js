const express=require("express")
const {createFood,all,update,deleted}=require("../Controllers/foodController")
const router=express.Router()
router.post("/add",createFood)
router.get("/all",all)
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
module.exports=router;