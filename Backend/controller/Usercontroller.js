const Usercontent = require("../models/UserContent");
const Usermodel=require("../models/Usermodel");
const {Op} = require("sequelize")
const Contentmodel=require("../models/Contentmodel");
const UserUsermodel=require("../models/UserUser");
const Notificationmodel=require("../models/Notificationmodel");
const Comment = require("../models/Commentmodel");
const User = require("../models/Usermodel");



exports.getusername = async(req,res,next)=>{
   
  const {input} = req.params;


  try {

   const Users = await Usermodel.findAll({
        where:{
          firstname:{[Op.startsWith]:`${input}`}
        },
        limit:10,
        offset:0,
    })
  

    res.json({data:Users})

  }catch(error){

     next();
     return;

  }

} 


exports.getuserdata=async(req,res,next)=>{
    
    const currentuserid=req.userdata;
   
    try {

       const Myuserdata=await Usermodel.findOne({
           where:{id:currentuserid.UserId}
       })

       if(Myuserdata){

         return res.json({success:"success",userdata:Myuserdata});

       } 
       else{

         return res.json("Unauthorized")

       }
      
     

    } catch (error){
       next();
       return;
    }
    //buradan sadece userId gelicek
}

exports.getuserprofile = async (req,res,next)=>{

  const {UserId}=req.params;
  console.log("getuserpfoile İÇİNDEE" + UserId)
  try {
     
     const Myuserdata=await Usermodel.findOne({
         where:{id:UserId}, 
         attributes:["id","firstname","lastname","imageurl","Role","Personaltext","username","backgroundurl"],
         include:[{
           model:Usermodel,
           as:"Followed",
           attributes:["id"],
           through:{
            attributes:["FollowedId","Active","FollowerId","createdAt","updatedAt"]
          }
         },{
           model:Usermodel,
           as:"Follower",
           attributes:["id"],
           through:{
            attributes:["FollowedId","Active","FollowerId","createdAt","updatedAt"]
          }
         }]
     })

      return res.json({success:"success",userdata:Myuserdata});

  } catch (error){
     next();
     console.log(error)
     return;
  }

}

exports.getuserdrafts=async(req,res,next)=>{
   
  const {UserId} = req.params;

  try {
     
    const Drafts = await Contentmodel.findAll({
      where:{
        Userforcontentid:UserId,
        phase:"Draft"
      },
      limit:10,
      offet:0,
    })

    res.json({success:"success",data:Drafts});

  } catch (error){
    next();
    return;
  }

}
//takip edenin mainuser oldugu edilenin
exports.getuserprofilecontent = async(req,res,next)=>{

  const {UserId,ownerpost,category,order}=req.params;
  console.log(ownerpost)

  if(ownerpost == "true"){

    const Contentdata=await Contentmodel.findAll({
      where:{
        Userforcontentid:UserId,
      },
      limit:10,
      offset:0,
      include:[{
        model:Usermodel,
        as:"Like",
        attributes:["id","firstname","lastname","imageurl","Role"],
        include:{
          model:Usermodel,
          as:"Followed",
          attributes:["id"]
        },
        through:{
          where:{attribute:"Like"},
          attributes:["attribute"]
        }
      },
      {
        model:Usermodel,
        as:"Readlater",
        attributes:["id"],
        through:{
          where:{attribute:"Readlater"},
          attributes:["attribute"]
        }
      },
      {
        model:Usermodel,
        as:"Retweet",
        attributes:["id","firstname","lastname","imageurl","Role"],
        include:{
          model:Usermodel,
          as:"Followed",
          attributes:["id"]
        },
        through:{
          where:{attribute:"Reshow"},
          attributes:["attribute"]
        }
      },
      {
        model:Usermodel,
        as:"personal",
        attributes:["id","firstname","imageurl","lastname","Role"]
        //burada user -> user many-to-many girilebilir takipçiler için
      },
      {
        model:Comment,
        as:"allcomments",  
      }]
    })

    return res.json({success:"success",data:Contentdata});

  }   
  else{

      try {
        //buradan default 10 tane gelicek
        const Contentdata=await Usercontent.findAll({
            where:{
              UserId:UserId,
              attribute:category
            },
            limit:10,
            offset:0,
            include:{
              model:Contentmodel,
              include:[{
                model:Usermodel,
                as:"Like",
                attributes:["id","firstname","lastname","imageurl","Role"],
                include:{
                  model:Usermodel,
                  as:"Followed",
                  attributes:["id"]
                },
                through:{
                  where:{attribute:"Like"},
                  attributes:["attribute"]
                }
              },
              {
                model:Usermodel,
                as:"Readlater",
                attributes:["id"],
                through:{
                  where:{attribute:"Readlater"},
                  attributes:["attribute"]
                }
              },
              {
                model:Usermodel,
                as:"Retweet",
                attributes:["id","firstname","lastname","imageurl","Role"],
                include:{
                  model:Usermodel,
                  as:"Followed",
                  attributes:["id"]
                },
                through:{
                  where:{attribute:"Reshow"},
                  attributes:["attribute"]
                }
              },
              {
                model:Usermodel,
                as:"personal",
                attributes:["id","firstname","imageurl","lastname","Role"]
                //burada user -> user many-to-many girilebilir takipçiler için
              },
              {
                model:Comment,
                as:"allcomments",  
              }]
            } 
        })
  
        return res.json({success:"success",data:Contentdata});
  
    } catch (error){
        next();
        console.log(error)
        return;
    }

  }


}

exports.getuserprofilecount = async (req,res,next)=>{

  const {UserId}=req.params;

  try {
    
    const Contentcount = await Contentmodel.count({
      where:{
        UserforuserId:UserId,
      }
    })
   

    const Followedcount = await UserUsermodel.count({
       where:{
         FollowedId:UserId,
       }
    })

    const Followercount = await UserUsermodel.count({
      where:{
        FollowerId:UserId
      }
   }) 

   //burada sadece sayısını alıyoruz

    res.json({data:{Contentcount,Followedcount,Followercount}})

  } catch (error) {

    next();
    return;
    
  }
}

exports.createuserrelation = async (req,res,next)=>{
  
  const {FollowerId,FollowedId,checkiffollow} = req.body;
  const io = req.app.get("socketio");
  //follower ıd is our current active user
  try {
     if(checkiffollow){

      await UserUsermodel.destroy({
        where:{FollowerId:FollowerId,FollowedId:FollowedId}
      })

     }
     else{

      await UserUsermodel.create({
        FollowerId:FollowerId,
        FollowedId:FollowedId,
        Follower:FollowerId,
        Followed:FollowedId,
        Active:false
      })
      
      //burada zaten aynı kişiye takip atamaz
      await Notificationmodel.create({
        attribute:"Follow",
        TakerId:[`${FollowedId}`],
        UserId:FollowerId,
      })

      io.emit("Notification","notify");
      //burada tekrar tetikliyoruz

     }

     res.json({data:"success"})

  } catch (error){

    next();
    console.log(error)
    return;

  }

}

exports.getusercontents = async (req,res,next)=>{
 
  const {UserId} = req.params;

  try {

    const includeuser=await Usercontent.findAll({
      where:{
        UserId:UserId,
        attribute:[`${latestparams}`],
      },
      limit:newnum,
      offset:newnum-10,
      include:{
        model:Content,
      }
    })

  } catch (error) {

  }

}

exports.deletepost = async (req,res,next)=>{

  const {PostId} = req.body;

  try {
    await Contentmodel.destroy({
       where:{
         id:PostId
       }
    })

    return res.json({state:"success"})

  } catch (error){
    next();
    return;
  }

}

exports.updatenotification = async (req,res,next)=>{

  try {

    const {FollowerId,FollowedId,currentactive} = req.params;

    await UserUsermodel.update({Active:currentactive == "true" ? false : true},{where:{FollowerId:FollowerId,FollowedId:FollowedId}})

    return res.json({state:"success"})

  } catch (error){

    next()
    return;

  }
}

exports.updateprofile = async (req,res,next)=>{

  const {username,firstname,lastname,personaltext,UserId,imageurl,backgroundurl} = req.body

  try {

       //const UN = User.findOne({where:{username:username}})

       if(UN == null){
          await User.update({
            firstname:firstname,
            lastname:lastname,
            personaltext:personaltext,
            backgroundurl:"",
            imageurl:"",},
            {where:{id:UserId}})
       }
       else{
          //res.json({state:"baska bisey dene"})
       }
      

  } catch (error) {
    
  }

}
