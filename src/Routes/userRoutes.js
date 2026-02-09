const express = require("express")
const router = express.Router()

const { register, login, createByAdmin } = require("../Controllers/userController")

const { verifyToken, allowRoles } = require("../Middleware/auth")


router.get("/whoami", verifyToken, (req,res)=>{
  res.json(req.user)
})

router.post("/register", register)
router.post("/login", login)

router.post(
  "/admin/create",
  verifyToken,
  allowRoles("owner"),
  createByAdmin
)

module.exports = router
