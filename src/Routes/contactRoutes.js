const express =require("express")
const router=express.Router()
const{create,all,update,deleted}=require("../Controllers/conatctController")
router.post("/add",create)
router.get("/all",all)
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
module.exports=router