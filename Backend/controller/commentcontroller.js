const Content=require("../models/Contentmodel");
const Comment=require("../models/Commentmodel");
const User = require("../models/Usermodel");
const Notificationmodel=require("../models/NotificationModel");



exports.produce=async (req,res,next)=>{
        //content-userId gerekli
        const {contentdata:{Message,ContentId,TakerId}}=req.body;
        const {UserId} = req.userdata

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
      //Change the last comment path
      var orderNumber = parseInt(order);
      var offsetValue = 0;
      var limitBorder = 10;
      var whereProperty ={};

      if(Last == "true" || isforanswer == "true" ){
        offsetValue = 0;
        limitBorder = 1;
      }else{
        offsetValue = orderNumber
      }

      var controlforonlyOnecomment = isforanswer == "true" ? "id" : "ContentId"
      whereProperty[controlforonlyOnecomment] = id

      const comments = await Comment.findAll({
        where:{...whereProperty},
        include:{
          model:User,
          attributes:["firstname","lastname","id","mainUrl"]
        },
        limit:limitBorder,
        offset:offsetValue,
        order:[['createdAt',"DESC"]]
      })

   

   
  
      const arr = []
      const Willbesend = {}
      var trial = true

      const getSubCategoriesRecursive = async (comment) => {
  
          const mutated = {...comment.dataValues}
          //1: contentId, childhas:parentID,mainparent
          let subComments = await Comment.findAll({
              where: {
                  CommentId:comment.id,
              },
              include:{
                model:User,
                attributes:["firstname","lastname","id","mainUrl"]
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
                
                  arr[i] = value
                  var allowGoIn = true;  
                  for (let j = 0; j < arr.length; j++) {

                      if(arr[j] == undefined){

                          allowGoIn = false
                      }
                    
                  }
                  if(arr.length == comments.length && allowGoIn){

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
   
    next()
    return;
  }


}

exports.getLastComment = async ()=>{

    try {

      const comments = await Comment.findAll({
        where:{...whereProperty},
        include:{
          model:User,
          attributes:["firstname","lastname","id","mainUrl"]
        },
        limit:limitBorder,
        offset:orderNumber,
        order:[['createdAt',"DESC"]]
      })

    } catch (error) {
      
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

exports.createLikeRelation = async(req,res,next)=>{

  const {UserId} = req.userdata;
  const {commentId,actionType} = req.body;
 

  try {

    const targetComment = await Comment.findByPk(commentId)
    console.log(targetComment)
    const likeArray = targetComment.likeNumber != null ? JSON.parse(targetComment.likeNumber) : []
    
    if(actionType == "Destroy"){
      const indexOfUser = likeArray.findIndex((item)=>UserId == item)
      likeArray.splice(indexOfUser,1)
    }else{
      likeArray.push(UserId)
    }
    //we just want to learn the number of people and our case
    await targetComment.update({likeNumber:JSON.stringify(likeArray)})

    res.json({state:"success"})

  } catch (error) {
    
    return next()

  }

}

exports.deleteComment = async(req,res,next)=>{
  const {commentId} = req.body
  const {UserId} = req.userdata

  try {
    
    await Comment.destroy({
      where:{id:commentId,UserId:UserId}
    })

    await Comment.destroy({
      where:{CommentId:commentId}
    })

    res.json({state:"success"})

  } catch (error) {

    return next()
  }

}



