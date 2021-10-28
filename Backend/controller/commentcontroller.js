const Content=require("../models/Contentmodel");
const Comment=require("../models/Commentmodel");
const User = require("../models/Usermodel");
const Notificationmodel=require("../models/Notificationmodel");



exports.produce=async (req,res,next)=>{
        //content-userId gerekli
        const {contentdata:{Message,ContentId,UserId,TakerId}}=req.body;
        const io = req.app.get("socketio");
        console.log(UserId)
        console.log(TakerId)
        console.log(UserId == TakerId)
    
      
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

  try {

    const {id,Last,order} = req.params;

    var ordernumb=parseInt(order);
  
    const comments = await Comment.findAll({
      where:{ContentId:id},
      limit:Last == "true" ? 1 : 10,
      offset:Last == "true" ? 0 : ordernumb-10,
      order:[['createdAt',"DESC"]]
    })
  
   
      
  
      const arr = []
      const Willbesend = {}
      var donework = 0
      var totalvalue = 0 
      var trial = true
      
      for (let m = 0; m < comments.length; m++) {
           totalvalue+=m
      }

      const getSubCategoriesRecursive = async (comment) => {
  
        const mutated ={...comment.dataValues}
  
        let subComments = await Comment.findAll({
            where: {
                CommentId:comment.id
            },
        });
  
        
        
        if (subComments.length > 0) {
            const childs = [];
            subComments.forEach(subcoms => {
                
                childs.push(getSubCategoriesRecursive(subcoms))
          
            });
            mutated["takeit"] = await Promise.all(childs)
         
          
        }
        else mutated["takeit"] = []; 
       
        return mutated;
    };
  
        if(comments.length > 0){
  
            for (let i = 0; i < comments.length; i++) {
  
              

              getSubCategoriesRecursive(comments[i]).then((value)=>{
              
                
                  arr.push(value)
               
                  donework +=i
                  console.log(value)
                  
                if(donework == totalvalue && trial){
                  console.log(arr)
                  trial=false
                  Willbesend.data = arr 
                  Willbesend.trial = {name:"sa"}
                  return res.json(Willbesend)
  
                }
  
            })
          }
        }
        else{
  
          Willbesend.data = []
          Willbesend.trial = {name:"sa"}
          return res.json(Willbesend)
  
        }

  } catch (error) {
    next()
    return;
  }


}

exports.porduceanswer = async(req,res,next)=>{
  
  const {ContentId,Message,CommentId,UserId} = req.body;

  try {

      await Comment.create({
        Message:Message,
        CommentId:CommentId,//burası bir üstündeki commentin id si
        UserId:UserId,
        parentId:CommentId
    })

    return res.json({state:"success"})

  } catch (error){
     next();
     return;
  } 

}



