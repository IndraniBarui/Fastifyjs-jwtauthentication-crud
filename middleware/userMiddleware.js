const User = require("../modal/userModal");
const UserValidation = async(req, reply, next)=>{
    let body=req.body
    if(!body.name || !body.email || !body.password) {
        return  reply.status(400).send({
           success: false,
           msg: "Please fill the field",
         });
       }
       if(body.email){
        console.log(body);
        const user = await  User.find({email:body.email})
        // console.log("u ",user);
        if(user.length > 0){
         return reply.status(400).send({
            success: false,
            msg: "email already exist",
          });
        }
      }
      next()
    };

    module.exports=UserValidation;

    