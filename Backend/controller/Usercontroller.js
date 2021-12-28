const Usercontent = require("../models/UserContent");
const Usermodel=require("../models/Usermodel");
const {Op} = require("sequelize")
const Contentmodel=require("../models/Contentmodel");
const UserUsermodel=require("../models/UserUser");
const Notificationmodel=require("../models/Notificationmodel");
const Comment = require("../models/Commentmodel");
const User = require("../models/Usermodel");


//search bar
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

//data of current user data
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

//profile pagedata
exports.getuserprofile = async (req,res,next)=>{

  const {UserId}=req.params;
  console.log("getuserpfoile İÇİNDEE" + UserId)
  try {
     
     const Myuserdata=await Usermodel.findOne({
         where:{id:UserId}, 
         attributes:["id","firstname","lastname","imageurl","Role","Personaltext","username","backgroundurl","email"],
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
  //follower == current user
  const {FollowerId,FollowedId,checkiffollow} = req.body;
  const io = req.app.get("socketio");

  //follower ıd is our current active user
  //tokenm validation git
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
//in a broader and detalied view of contents of current user
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
      next()
      return
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

//alert for user feedback when a post is shared
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
  //bunlardan once upload middleware

  const Urldata = req.urlconfig
  console.log(Urldata)
  console.log(JSON.parse(req.body.Profilevalues))
  
  var controllerforusername = false

  const userprofiledata = JSON.parse(req.body.Profilevalues)

  const {UserId} = req.userdata
  
  try {
       //kullanici adi alinmis ise yeniden degistir

      //esitleme yapildi
       if(true){

                const UN = await User.findOne({where:{username:userprofiledata.musername}})
        
                if(UN){

                    controllerforusername = false

                }
                else{

                    controllerforusername = true

                }
        
                
                if(controllerforusername){

                    const myuser = await User.findByPk(UserId)
                    console.log("update phase in")
                    var willbeupdated = {
                      email:"bursa@hotmail.com",
                      firstname:userprofiledata.firstname,
                      lastname:userprofiledata.surname,
                      username:userprofiledata.musername,
                      imagetoken:Urldata["1"].token,
                      backgroundtoken:Urldata["0"].token,
                      imageurl:Urldata["1"].filename,
                      backgroundurl:Urldata["0"].filename,
                      Personaltext:userprofiledata.personaltext,
                      }

                    if(Urldata["0"].type == "Profile"){
                      delete willbeupdated.backgroundtoken
                      delete willbeupdated.backgroundurl
                    }else if(Urldata["0"].type == "Background"){
                      delete willbeupdated.imagetoken
                      delete willbeupdated.imageurl
                    }

                    console.log(willbeupdated)

                    await myuser.update(willbeupdated)
    
                     return res.json({state:"success"})

                }
                else{

                     return res.json({state:"Uniqe username required !!"})

                }
              
       }
       else{

          return res.json()

       }
      

  } catch (error){
     console.log(error)
     next()
     return
  }

  

}
