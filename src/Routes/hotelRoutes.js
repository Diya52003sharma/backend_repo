const express=require('express')
const {createHotel,getAll,update,deleted}=require("../Controllers/hotelController")
const { verifyToken, allowRoles } = require("../Middleware/auth")
const router=express.Router()
router.post("/add",
  verifyToken,
  allowRoles("owner"),
  createHotel
)

router.get("/all",
  verifyToken,
  allowRoles("owner"),
  getAll
)

router.put("/update/:id",
  verifyToken,
  allowRoles("owner"),
  update
)

router.delete("/delete/:id",
  verifyToken,
  allowRoles("owner"),
  deleted
)

module.exports=router;