const Content=require("../models/Contentmodel");
const Comment=require("../models/Commentmodel");
const User = require("../models/Usermodel");



exports.produce=async (req,res,next)=>{
 
        const {contentdata:{Message,ContentId,UserId}}=req.body;

      
        console.log("messssssage"+Message);
      
        try {  
      
          await Comment.create({
             Message:Message,
             ContentId:ContentId,
             UserId:UserId
          })

        }catch(err){

            next();
            return;
            
        }
        
        return res.json({state:"success"});
}

exports.getcomments=async (req,res,next)=>{

  const {id} = req.params;

  const comments = await Comment.findAll({
    where:{ContentId:id},
    include:{
      model:User,
      attributes:["id","firstname","imageurl","lastname","Role"]
    }
  })

  res.json({data:comments})

}



