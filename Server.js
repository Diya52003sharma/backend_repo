const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const db = require("./src/config/database")
const hotelRoutes = require("./src/Routes/hotelRoutes")
const foodRoutes = require("./src/Routes/foodRoutes")
const contactRoutes = require("./src/Routes/contactRoutes")
const userRoutes = require("./src/Routes/userRoutes")

app.use(cors())
app.use(express.json())

db()

app.get("/test", (req, res) => {
  res.send("Server running OK")
})

// 🔹 ROUTES
app.use("/user", userRoutes)
app.use("/hotels", hotelRoutes)
app.use("/foods", foodRoutes)
app.use("/contacts", contactRoutes)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
