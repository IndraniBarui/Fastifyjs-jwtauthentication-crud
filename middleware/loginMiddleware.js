const jwt= require('jsonwebtoken')

exports.getIn = async (req, reply,next) => {

  // console.log("=====================lgfhgfdghdhtdgdgdgfdgfd");

      const token = req.headers["x-access-token"];
      console.log(token);
  
      if (!token) {
        return reply.send("enter token");
      }
  
   jwt.verify(
          token,process.env.SECRET_KEY,(err, decodedToken) => {
          if (err) {
            return reply.status(401).send("unauthorized access");
          } else {
            req.role = decodedToken.payload.role; 
            req._id = decodedToken.payload.users_id // obj id
            // console.log("decodedToken ",req.role,req._id );
            // console.log("decodedToken ", decodedToken);
            // console.log("trt ", req._id);            
          }
        }
      )
    next();
  };
  
  exports.checkRole = async(req,reply,next)=>{
    console.log(req.role);
    if( req.role !== "admin"){
     return reply.status(401).send("only admin user")
    }
    next()
  }

  // module.exports = {
  //   getIn : getIn,
  //   checkRole : checkRole
  // }
