const {default:mongoose}= require('mongoose')

const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    
    

},{ timestamps: true })

module.exports = mongoose.model("category", categorySchema)