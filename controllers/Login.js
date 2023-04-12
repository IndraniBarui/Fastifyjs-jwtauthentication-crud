const User = require("../modal/userModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signIn = async (req, reply) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      reply.send({
        success: false,
        msg: "Please fill the field",
      });
    } else {
      const users = await User.find({ email: email });

    //   console.log(users);
      if (users && users[0].password) {
        const hashPassword = await bcrypt.compare(password, users[0].password);

        // console.log("hhh", hashPassword);
        if (hashPassword) {
          const payload = { users_id: users[0]._id , role: users[0].role};
          console.log(payload);
          const token = jwt.sign({ payload }, process.env.SECRET_KEY);
          reply.send({
            success: true,
            msg: "Login successfull",
            token: token,
          });
        } else{
            
          reply.send({
            success: false,
            msg: "invalid login",
          });
        }
      } else {
        reply.send({
          success: false,
          msg: "invalid",
        });
      }
    }
  } catch (error) {
    console.log(error);
    reply.send("error" + error.stack);
  }
};



