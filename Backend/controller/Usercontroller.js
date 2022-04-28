const Usercontent = require("../models/UserContent");
const Usermodel=require("../models/Usermodel");
const {Op} = require("sequelize")
const Contentmodel=require("../models/Contentmodel");
const UserUsermodel=require("../models/UserUser");
const Notificationmodel=require("../models/Notificationmodel");
const Comment = require("../models/Commentmodel");
const reportModel = require("../models/ReportModel")
const User = require("../models/Usermodel");
const bcrypt=require("bcrypt");
const nodemailer = require("nodemailer");


//Searching User
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
    
    const currentuserid = req.userdata;
    //userid
    //role
    //firstname
    //surname
   
    try {

       const Myuserdata=await Usermodel.findOne({
           where:{id:currentuserid.UserId},
           attributes:{exclude:["password","ReportSum","email"]}
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

  const {UserId} = req.params;
  var excludedAttributes = ["email","Notification","password","ReportSum","Role"]
  if(req.userdata){

    var {UserId:CurrentUserId} = req.userdata; 

    if(CurrentUserId == UserId){
        excludedAttributes = ["password","ReportSum","Role"]
    }
  
  }


  try {

      const Myuserdata = await Usermodel.findOne({
        where:{id:UserId}, 
        attributes:{exclude:excludedAttributes},
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

exports.getuserprofilefollowlist = async (req,res,next)=>{

    const {UserId,requestType} = req.params

    try {

        var listWillbesend = []
        var searchOptions = {whereClause:{}}
        searchOptions.whereClause[requestType == "FOLLOWING" ? "Follower" : "Followed"] = UserId
        searchOptions.whichpart = (requestType == "FOLLOWING" ? "Followedpart" : "Followerpart") 

        listWillbesend = await UserUsermodel.findAll({
            where:{...searchOptions.whereClause},
            include:{
              model:User,
              as:searchOptions.whichpart,
              attributes:["id","firstname","lastname","imageurl","imagetoken","backgroundurl","backgroundtoken"],
              include:[{
                model:User,
                as:"Followed",
                attributes:["id"]
              },{
                model:User,
                as:"Follower",
                attributes:["id"]
              }]
            }
        })

      

      res.json({data:listWillbesend})
     

    } catch (error) {
      console.log(error)
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

      const UserWillBeFollowed = await User.findOne({where:{id:FollowedId}});
    
      await UserUsermodel.create({
        FollowerId:FollowerId,
        FollowedId:FollowedId,
        Follower:FollowerId,
        Followed:FollowedId,
        Active:false
      })
      
        //karsi user icin notification gidip gitmemesi, takip edilen kisinin takip bildirimi al 
        if(UserWillBeFollowed.Notification.Whenfollow == true){

          await Notificationmodel.create({
            attribute:"Follow",
            TakerId:[`${FollowedId}`],
            UserId:FollowerId,
          })

          io.sockets.to(FollowedId).emit("Notification","");

        }
    
      //payload currentuserID == SenderID
     
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
  const {typeofupdate} = req.params
  const Urldata = req.urlconfig
  var controllerforusername = false
  const userprofiledata = JSON.parse(req.body.Profilevalues)
  


  const {UserId} = req.userdata
  
  if(typeofupdate == "Profile"){

      try {
      
        const UN = await User.findOne({where:{username:userprofiledata.musername}})
        console.log(UN)
        //farkli bir userin kullanici adi
        if(UN && UN.id !== UserId){

            controllerforusername = false
            //burada bir hata donucek

        }
        else{

            controllerforusername = true

        }

        console.log(controllerforusername)
        if(controllerforusername){

            const myuser = await User.findByPk(UserId)
            console.log("herereerr")
            //Attributes gonna be updated
            var willbeupdated = {
                firstname:userprofiledata.firstname,
                lastname:userprofiledata.surname,
                username:userprofiledata.musername,
                Personaltext:userprofiledata.personaltext,
              }

            if(Urldata["0"].type == "Profile"){

              delete willbeupdated.backgroundtoken
              delete willbeupdated.backgroundurl
              willbeupdated["imagetoken"] = Urldata["0"].token
              willbeupdated["imageurl"] = Urldata["0"].filename

            }else if(Urldata["0"].type == "Background"){

              delete willbeupdated.imagetoken
              delete willbeupdated.imageurl
              willbeupdated["backgroundtoken"] = Urldata["0"].token
              willbeupdated["backgroundurl"] = Urldata["0"].filename

            }
            else if(Urldata["0"].type == "Back&Profile"){
              
              willbeupdated["backgroundtoken"] = Urldata["0"].token
              willbeupdated["backgroundurl"] = Urldata["0"].filename
              willbeupdated["imagetoken"] = Urldata["1"].token
              willbeupdated["imageurl"] = Urldata["1"].filename

            }

        

            await myuser.update(willbeupdated)

            return res.json({state:"success"})

        }
        else{

            return res.json({state:"Uniqe username required !!"})

        }
      } catch (error) {
        return next();
      }
             
  }else if(typeofupdate == "Email"){
        /*
        const currentuser =  await User.findOne({where:{id:UserId}})
     
        bcrypt.compare(userprofiledata.CurrentPasswordForEmail, currentuser.password,async(err,result)=>{
        
        if(!result) return res.json({state:false})   //wrong password
        
        const searchedEmail = await User.findOne({where:{email:userprofiledata.email}})

        if(searchedEmail) return res.json({state:"Email Exist!"})
        */


        //send code to email to change email 
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host:"smtp-mail.outlook.com",
          port:587,
          auth: {
            user:"bexsd@hotmail.com", // generated ethereal user
            pass:"22312231a", // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: "bexsd@hotmail.com", // sender address
          to: "muazozzer@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        },(err,info)=>{
          if(err){
            console.log(err)
            return;
          }
          console.log("sa")
          console.log(info.response)
        });
      
        //console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

       //});
    
  }else if(typeofupdate == "Password"){

        const currentuser =  await User.findOne({where:{id:UserId}})
     
        bcrypt.compare(userprofiledata.Currentpassword, currentuser.password,async(err,result)=>{
        
        if(!result)
        return res.json({state:false})  
        
        const hashedpassword = await bcrypt.hash(userprofiledata.Newpassword,10);
        

        await currentuser.update({password:hashedpassword})

     });

  }else{

    try {
        var newobj = {}
      
        for (const key in userprofiledata.Notifications) {
          newobj[key] = userprofiledata.Notifications[key].value
        }
    
        await User.update({Notification:{...newobj}},{where:{id:UserId}})
        return res.json({state:"successful"})

    } catch (error) {
      
    
      return next()
    }
  
  }

}

exports.reportUser = async(req,res,next)=>{

    try{

      const {reportedContentId,message,checkBoxValue} = req.body;

      await reportModel.create({
        ReportMessage:message,
        ReportCheckBox:checkBoxValue,
        ContentId:reportedContentId,
      })

      res.json({state:"success"})

    } catch (error) {
      return next();
    }

}
