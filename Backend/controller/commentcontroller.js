const Content=require("../models/Contentmodel");
const Comment=require("../models/Commentmodel");
const User = require("../models/Usermodel");
const Notificationmodel=require("../models/Notificationmodel");



exports.produce=async (req,res,next)=>{
        //content-userId gerekli
        const {contentdata:{Message,ContentId,UserId,TakerId}}=req.body;
        const io = req.app.get("socketio");
      
        console.log("messser.jssssage"+Message);
      
        try {  
      
          await Comment.create({
             Message:Message,
             ContentId:ContentId,
             UserId:UserId
          })
          
         if(UserId !== TakerId){
              await Notificationmodel.create({
                attribute:"Comment",
                TakerId:[`${TakerId}`],
                ContentId:ContentId,
                UserId:UserId,
            })

            io.emit("Notification","notify");
         }
         //istek yapılıp eklendikten sonra trigger

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



