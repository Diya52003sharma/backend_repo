const User = require("../Modals/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// ================= REGISTER =================
const register = async (req,res)=>{
  try{

    const { name,email,password } = req.body

    const exist = await User.findOne({ email })
    if(exist){
      return res.status(400).json({
        message:"Email already exists"
      })
    }

    const hash = await bcrypt.hash(password,10)

    const user = new User({
      name,
      email,
      password:hash,
      role:"user"     // ⭐ force user
    })

    await user.save()

    res.json({
      success:true,
      message:"Registered"
    })

  }catch(err){
    res.status(500).json({message:err.message})
  }
}


// ================= LOGIN =================
const login = async (req,res)=>{
  try{

    const { email,password } = req.body

    const user = await User.findOne({ email })

    if(!user){
      return res.status(404).json({message:"User not found"})
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){
      return res.status(401).json({message:"Wrong password"})
    }

    const token = jwt.sign(
      {
        id:user._id,
        role:user.role
      },
      process.env.JWT_SECRET,
      { expiresIn:"1d" }
    )

    res.json({
      success:true,
      token,
      role:user.role,
      user:{
        name:user.name,
        email:user.email
      }
    })

  }catch(err){
    res.status(500).json({message:err.message})
  }
}
// ADMIN CREATE USER (owner/staff)
const createByAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role   // admin decides role
    })

    await user.save()

    res.json({
      success: true,
      message: `${role} created`
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


module.exports = { register, login,createByAdmin }
