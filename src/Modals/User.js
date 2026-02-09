const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true
  },
  role: {
  type: String,
  required:true,
  enum: ["user", "hotel", "owner"],
  default: "user"
}
,
  password: {
    type: String,
    required: [true, "password is required"]
  }
})

const User = mongoose.model("User", userSchema)
module.exports = User
