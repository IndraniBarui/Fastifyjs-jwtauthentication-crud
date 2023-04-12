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
    category_type:{
        type:String,
        required:true
    }
    // category: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'name', 
    //     required: true 
    // }

}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)
