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

    const {id,Last,order,isforanswer} = req.params;

      var ordernumb=parseInt(order);
      var offsetborder = 0;
      var limitborder = 10;
      var whereclause ={};

      if(Last == "true" || isforanswer == "true"){
        offsetborder = 0;
        limitborder = 1;
      }else{
        offsetborder = ordernumb
      }

      var controlforonlyOnecomment = isforanswer == "true" ? "id" : "ContentId"
      whereclause[controlforonlyOnecomment] = id

      const comments = await Comment.findAll({
        where:{...whereclause},
        include:{
          model:User,
          attributes:["firstname","lastname","id","imageurl","imagetoken"]
        },
        limit:limitborder,
        offset:offsetborder,
        order:[['createdAt',"DESC"]]
      })

      console.log(comments)
  
      const arr = []
      const Willbesend = {}
      var donework = 0
      var totalvalue = 0 
      var trial = true
      
      for (let m = 0; m < comments.length; m++) {
           totalvalue+=m
      }

      const getSubCategoriesRecursive = async (comment) => {
  
          const mutated = {...comment.dataValues}
          //1: contentId, childhas:parentID,mainparent
          let subComments = await Comment.findAll({
              where: {
                  CommentId:comment.id,
              },
              include:{
                model:User,
                attributes:["firstname","lastname","id","imageurl","imagetoken"]
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
                
                  
                if(donework == totalvalue && trial){
                  
                  trial=false
                  Willbesend.data = arr 
                  
                  return res.json(Willbesend)
  
                }
  
            })
          }
        }
        else{
  
          Willbesend.data = []
          return res.json(Willbesend)
  
        }

  } catch (error) {
    console.log(error)
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
    })

    return res.json({state:"success"})

  } catch (error){
     next();
     return;
  } 

}

exports.editcomment = async(req,res,next)=>{

    const {message,commentID} = req.body
    console.log("in comment edit")
    try {

       await Comment.update({
        Message:message
       },{where:{id:commentID}})

       res.json({state:"SUCCESS"})

    } catch (error) {
      
      next()
      return;

    }
}



