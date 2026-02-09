const jwt = require("jsonwebtoken")

// TOKEN VERIFY
const verifyToken = (req, res, next) => {

  const header = req.headers.authorization

  if (!header) {
    return res.status(401).json({ message: "No token provided" })
  }

  const token = header.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()

  } catch (err) {
    res.status(401).json({ message: "Invalid token" })
  }
}


// ROLE CHECK
const allowRoles = (...roles) => {

  return (req, res, next) => {

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      })
    }

    next()
  }
}

module.exports = {
  verifyToken,
  allowRoles
}
