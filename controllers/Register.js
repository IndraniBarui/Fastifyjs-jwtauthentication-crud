
const bcrypt= require("bcryptjs")
const User= require("../modal/userModal");
// const bodyParser = require("body-parser");

exports.register=async(req,reply)=>{
    try{
      let body = req.body;
        // console.log(bodyParser.password)
        // body.password = String(body.password)
        body.password = bcrypt.hashSync(body.password, 8);
        
        const result = await User.create(req.body);
        console.log("result", result)
        if(result){
            reply.send({
                success: true,
                msg: "User create successfully",
                data: result,
              });
        }else{
            reply.send({
                success: false,
                msg: 'some problem'
              });
        }
    }catch(error){
      console.log(error);
      reply.send("error",error);
    }
};