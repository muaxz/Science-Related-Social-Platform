const Usercontent = require("../models/UserContent");
const Usermodel=require("../models/Usermodel");
const {Op} = require("sequelize")
const Contentmodel=require("../models/Contentmodel");
const UserUsermodel=require("../models/UserUser");
const Notificationmodel=require("../models/NotificationModel");
const Comment = require("../models/Commentmodel");
const reportModel = require("../models/ReportModel")
const User = require("../models/Usermodel");
const bcrypt=require("bcrypt");
const Sendemail = require("../MiddleFunctions/SendEmail");
const CategoryModel = require("../models/CategoryModel")
const uploadFunction = require("../MiddleFunctions/imageUpload")
const crypto = require("crypto")


//Searching User
exports.searchGetUser = async(req,res,next)=>{
   
  const {input} = req.params;


  try {

   const Users = await Usermodel.findAll({
        where:{
          firstname:{[Op.startsWith]:`${input}`}
        },
        attributes:["id","mainUrl","firstname","lastname"],
        limit:10,
        offset:0,
    })
  

    res.json({data:Users})

  }catch(error){

     next();
     return;

  }

} 

//data of current user data (Context Data)
exports.getuserdata=async(req,res,next)=>{
    
    const currentuserid = req.userdata;

    try {

       const Myuserdata = await Usermodel.findOne({
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
  var excludedAttributes = ["email","password","ReportSum","Role"]

  if(req.userdata){

    var {UserId:CurrentUserId} = req.userdata; 

    if(CurrentUserId == UserId){
        excludedAttributes = ["password","ReportSum","Role",]
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

//takip edenin mainuser oldugu edilenin
exports.getuserprofilecontent = async(req,res,next)=>{

  const {UserId,ownerpost,category,order}=req.params;
  
  //TODO change this design later
  if(ownerpost == "true"){

    const Contentdata = await Contentmodel.findAll({
      where:{
        Userforcontentid:UserId,
        phase:"Published"
      },
      limit:10,
      offset:parseInt(order),
      order:[["createdAt","DESC"]],
      include:[{
        model:Usermodel,
        as:"Like",
        attributes:["id","firstname","lastname","mainUrl","Role"],
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
          model:CategoryModel,
          attributes:["categoryName","id"]
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
        attributes:["id","firstname","lastname","mainUrl","Role"],
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
        attributes:["id","firstname","mainUrl","lastname","Role"]
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
            offset:parseInt(order),
            include:{
              model:Contentmodel,
              include:[{
                model:Usermodel,
                as:"Like",
                attributes:["id","firstname","lastname","mainUrl","Role"],
                include:[{
                  model:Usermodel,
                  as:"Followed",
                  attributes:["id"]
                }],
                through:{
                  where:{attribute:"Like"},
                  attributes:["attribute"]
                }
              },
              {
                model:CategoryModel,
                attributes:["categoryName","id"]
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
                attributes:["id","firstname","lastname","mainUrl","Role"],
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
                attributes:["id","firstname","mainUrl","lastname","Role"],
                include:{
                  model:User,
                  as:"Followed",
                  attributes:["id"]
                }
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
              attributes:["id","firstname","lastname","mainUrl","backgroundUrl"],
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
  const {UserId} = req.userdata
  var controllerforusername = false
  const userprofiledata = JSON.parse(req.body.Profilevalues)
  

  
  if(typeofupdate == "Profile"){
       //upload 2 means there 2 images changed
       var imageUrlStore = []
        console.log(req.files)
       for (const key in req.files) {
          imageUrlStore.push(uploadFunction(req.files[key],userprofiledata[key],key))
       }
      
      try {

        if(true){

            const myuser = await User.findByPk(UserId)
            const imageStoreResponse = await Promise.all(imageUrlStore)
         
            //Attributes gonna be updated
            var willbeupdated = {
                firstname:userprofiledata.firstname,
                lastname:userprofiledata.surname,
                username:userprofiledata.musername,
                Personaltext:userprofiledata.personaltext,
                occupation:userprofiledata.occupation
              }
              
            imageStoreResponse.forEach(element => {

                if(element.state == "Big"){
                  return res.json({state:false,SIZE:"Big"})
                }

                if(element.key == "Backimage"){
                    willbeupdated["backgroundUrl"] = element.url
                }else if(element.key == "mainImage"){
                    willbeupdated["mainUrl"] = element.url
                }

            });

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
        
        const currentuser =  await User.findOne({where:{id:UserId}})
     
        bcrypt.compare(userprofiledata.CurrentPasswordForEmail, currentuser.password,async(err,result)=>{
        
        if(!result) return res.json({state:false,EMAIL:"Password"}) //wrong password

        const searchedEmail = await User.findOne({where:{email:userprofiledata.email}})

        if(searchedEmail) return res.json({state:false,EMAIL:"Exist"})

        const randomSixDigit = crypto.randomInt(100000,1000000)
        await currentuser.update({emailVerification:randomSixDigit})

        setTimeout(()=>{
            currentuser.update({emailVerification:0})
        },1000*60*5)

        Sendemail(currentuser.email,{firstname:currentuser.firstname,surname:currentuser.lastname,verificationCode:randomSixDigit},false)

        return res.json({state:"CODE_SENT"})

       });
    
  }else if(typeofupdate == "Password"){

        const currentuser =  await User.findOne({where:{id:UserId}})
     
        bcrypt.compare(userprofiledata.Currentpassword, currentuser.password,async(err,result)=>{
        
        if(!result)
        return res.json({state:false})  
        
        const hashedpassword = await bcrypt.hash(userprofiledata.Newpassword,10);
        

        await currentuser.update({password:hashedpassword})
        return res.json({state:"successful"})
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

      const {reportedContentId,message,checkBoxValue,reportedUserId} = req.body;

      await reportModel.create({
        ReportMessage:message,
        ReportCheckBox:checkBoxValue,
        ContentId:reportedContentId,
      })

      const reportedUser = await User.findByPk(reportedUserId)
      await reportedUser.update({ReportSum:reportedUser == null ? 1 : reportedUser.ReportSum+1})

      res.json({state:"success"})

    } catch (error) {
      return next();
    }

}

exports.verifyEmailCode = async(req,res,next)=>{

  const {UserId} = req.userdata
  const {code,newEmail} = req.body
  console.log(newEmail)
  console.log(code)
  try {

     const isUserAvailable = await User.findOne({
        where:{
          id:UserId,
          emailVerification:parseInt(code)
        } 
      })

      if(isUserAvailable){

        await isUserAvailable.update({email:newEmail,emailVerification:0})

        res.json({state:"success"})

      }else{

        res.json({state:"invalid code"})

      }

  } catch (error) {
      return next()
  }
}


