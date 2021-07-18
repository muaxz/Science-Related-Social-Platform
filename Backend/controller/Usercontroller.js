const Usercontent = require("../models/UserContent");
const Usermodel=require("../models/Usermodel");
const Contentmodel=require("../models/Contentmodel");
const UserUsermodel=require("../models/UserUser");



exports.getuserdata=async(req,res,next)=>{
    
    const currentuserid=req.userdata;
   
    try {

       const Myuserdata=await Usermodel.findOne({
           where:{id:currentuserid.UserId}
       })

       if(Myuserdata){
        console.log("heyyyyoooooooooooooo")
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
     //kullanıcı bilgileri
     const Myuserdata=await Usermodel.findOne({
         where:{id:UserId},
         include:[{
           model:Contentmodel,
           as:"personal",
           separate:true,
           limit:10,
           offset:0,
         },
         {
           model:Usermodel,
           as:"Followed",
           attributes:["id"]
         }
        ]
     })

      return res.json({success:"success",userdata:Myuserdata});

  } catch (error){
     next();
     console.log(error)
     return;
  }

}


//takip edenin mainuser oldugu edilenin
exports.getuserprofilecontent = async(req,res,next)=>{

  const {UserId}=req.params;
  console.log("getuserpfoile İÇİNDEE" + UserId)
  try {

     const Myuserdata=await Usercontent.findAll({
         where:{UserId:UserId},
         include:{
           model:Contentmodel,
           include:{
             model:Usermodel,
             as:"personal"
           }
         } 
     })

      return res.json({success:"success",userdata:Myuserdata});

  } catch (error){
     next();
     console.log(error)
     return;
  }

}

exports.getusercount = async (req,res,next)=>{

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

exports.createuserrelation=async (req,res,next)=>{
  
  const {FollowerId,FollowedId,checkiffollow} =req.body;
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
        Active:{
          Post:false,
          Debate:false,
        }
      })
     }

     res.json({data:"success"})

  } catch (error){

    next();
    console.log(error)
    return;

  }

}
