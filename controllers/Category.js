const category = require("../modal/category");
const Category = require("../modal/category");

exports.catCreate= async(req,reply)=>{
    try{
      const{name, details} = req.body;
      if(!name|| !details){
        reply.status(400).send({
            success: false,
            msg: "Please fill the field",
           
          });
      }else{
        const result = await Category.create(req.body);
        if(result){
            reply.status(201).send({
                success:true,
                msg:"Category create successfully"
            })
        }else{
            reply.status(400).send({
                success:false,
                msg:"some error"
            })
        }
      }
    }catch(error){
      reply.status(500).send("error"+ error.message)
    }
}

exports.catGet= async(req,reply)=>{
    try{
      const category = await Category.find()
      reply.status(201).send({category:category})

    }catch(error){
        reply.status(400).send("error"+error.message);
    }
}

exports.catDelete= async(req,reply)=>{
    try{
        const id=req.params.id;
        const body= req.body
        const result= await Category.deleteOne({_id:id})
        if(result.deletedCount === 0){
            reply.code(404).send({ message: `category ${id} not found` })  
        }else{
            reply.status(201).send({ message: `category ${id} deleted` })
        }
    }catch(error){
        reply.status(400).send("error"+error.message)
    }
}

exports.catUpdate= async(req,reply)=>{
    try{
        const id=req.params.id;
        const body= req.body
        const result=await Category.updateOne({_id:id}, {$set:body});
       
          if(result){
              reply.status(201).send({
                  success:true,
                 result:result
              })
          }else{
              reply.status(404).send({
                  success:false,
                  msg:"some problem"
              })
          }
        
      }catch(error){
          reply.status(400).send("error"+error.message)
      }
  }

