const {default:mongoose}= require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    email:{
        type:String,
      required:true,
    },
    password:{
        type:String,
      required:true,
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
      },
    notification:{
      type:String,
      required:true,
    }
    })
    


const User= mongoose.model("user", userSchema)
module.exports=User;