const express = require("express")
const router = express.Router()
const { create,login } = require("../Controllers/userController")

router.post("/register", create)
router.post("/login", login)

module.exports = router
