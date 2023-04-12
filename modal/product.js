const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    
    owner:{
       type:String,
    
    },

}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)
