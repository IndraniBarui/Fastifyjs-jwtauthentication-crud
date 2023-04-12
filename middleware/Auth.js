const jwt = require("jsonwebtoken")

exports.adminAuth = (req, reply, next) => {
  const token = req.jwt
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
      if (err) {
        return reply.status(401).json({ message: "Not authorized" })
      } else {
        if (decodedToken.role !== "admin") {
          return reply.status(401).json({ message: "Not authorized" })
        } 
        // else if(decodedToken.role !== "Basic") {

        // }
        else {
          next()
        }
      }
    })
  } else {
    return reply
      .status(401)
      .json({ message: "Not authorized, token not available" })
  }
}

exports.userAuth = (req, reply, next) => {
    const token = req.jwt
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
        if (err) {
          return reply.status(401).json({ message: "Not authorized" })
        } else {
          if (decodedToken.role !== "Basic") {
            return reply.status(401).json({ message: "Not authorized" })
          } 
          next()
        }
      })
    } else {
      return reply.status(401).json({ message: "Not authorized, token not available" })
    }
  }