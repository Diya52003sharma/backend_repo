const User = require("../Modals/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// 🔹 REGISTER
const create = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      name,
      email,
      password: hashedPassword
    })

    const data = await user.save()

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

// 🔹 LOGIN (TOKEN YAHIN BANEGA)
const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Wrong password"
      })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.json({
      success: true,
      message: "Login successful",
      token
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

module.exports = { create, login }
