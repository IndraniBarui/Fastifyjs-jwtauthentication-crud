const User = require("../modal/userModal")

exports.update = async (req, reply, next) => {
    const { role, id } = req.body
    
    if (role && id) {
     
      if (role === "admin") {
        await User.findById(id)
        .then((user)=>{
            if (user.role !== "admin") {
                user.role = role;
                user.save((err) => {
                  
                  if (err) {
                    reply
                      .status("400")
                      .json({ message: "An error occurred", error: err.message });
                    process.exit(1);
                  }
                  reply.status("201").json({ 
                    message: "Update successful",
                     user });
                });
              } else {
                reply.status(400).json({ 
                    message: "User is already an Admin" });
              }
            })
            .catch((error) => {
              reply.status(400).json({
                message: "An error occurred",
                error: error.message });
            });
        }
     
    } else {
      reply.status(400).json({ message: "Role or Id not present" })
    }
}

  