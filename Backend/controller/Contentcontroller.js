const Content=require("../models/Contentmodel");
const User=require("../models/Usermodel");
const Usercontent=require("../models/UserContent");
const Comment=require("../models/Commentmodel");
const Report = require("../models/ReportModel")
const {Op}=require("sequelize");
const UserUser = require("../models/UserUser");
const Notification=require("../models/Notificationmodel");
const firebase = require("../firebase/firebase")
const {v4} = require("uuid")




exports.produce=async (req,res,next)=>{
 
  const {title,content,subtitle,catagory,UserId,processtype,titlemainUrl}=req.body;
  console.log(titlemainUrl)

  try {  
 
    const Obj = await Content.create({
        title:title,
        titleimage:titlemainUrl,
        subtitle:subtitle,
        content:content,
        phase:processtype,
        catagories:catagory == "" ? null : catagory,
        UserforuserId:UserId,
        UserforcontentId:UserId,
    })

    //....................
    //produce için değil editör postu public yaptıgında gelen bildirim bu olucak
   
    const Followerofcontentuser = await UserUser.findAll({
      where:{
      FollowedId:UserId,
      Active:true
    }})
    
    if(Followerofcontentuser.length > 0){

        const Editdarray = [];

        for (let i = 0; i < Followerofcontentuser.length; i++){
    
            Editdarray[i] = Followerofcontentuser[i].FollowerId; //burada gelen her bir objenin followed ıd sini yeni bir arraya koyuyoruz
    
        }
        //taker ıd burada "current" kişiyi takip edenlerin bildirimi "post notification" açık olan kişiler.
        await Notification.create({
                attribute:"Post",
                TakerId:Editdarray,
                ContentId:Obj.dataValues.id,
                UserId:UserId,
            })
            
  
    }
  
    
    return res.json({state:"success"});

  }catch(err){
     return next();
  }
}

exports.destroyContent = async(req,res,next)=>{
  //tihs function gonna be used to destroy both draft type and normal type
  const {ContentID} = req.params;
  const {UserId} = req.userdata;

  try {

      const resp = await Content.destroy({
          where:{
            Userforuserid:UserId,
            id:ContentID,
          }
      }) 
      
      if(resp == 1){

          await Usercontent.destroy({
            where:{
              ContentId:ContentID
            }
        })

      }
    
      res.json({state:"success"})

  } catch (error) {
   
    return next();
  }

}

exports.getAllContentsForModStuff = async (req,res,next)=>{

    const {UserRole} = req.userdata;
    const {searchValue,category,order} = req.params; 
    const WhereProperty = {}
    
    if(searchValue !== "Default" && category !== "null"){
      WhereProperty.title = {[Op.startsWith]:`${searchValue}`}
      WhereProperty.category = category
    }
    else if(searchValue !== "Default" && category == "null"){
      WhereProperty.title = {[Op.startsWith]:`${searchValue}`}
    }
    else if(searchValue == "Default" && category !== "null"){
      WhereProperty.category = category
    }
    
    //WhereProperty.category = {}

    try {
      
      if(UserRole == "Mod" || UserRole == "Admin"){

          var Contents = await Content.findAll({
            where:WhereProperty,
            limit:10,
            offset:parseInt(order),
            include:{
              model:User,
              as:"personal",
              attributes:["id","firstname","mainUrl","lastname","Role"],
            },
          })

      }else{

        req.errorType = "404"
        return next()

      }

  
      return res.json({data:Contents})

    } catch (error){

      return next()

    }

}

exports.gethome=async(req,res,next)=>{

  const {number,category} = req.params;
  var offsetValue = parseInt(number);//paramstand string olarak alıyoruz

  try {
    //beğenenler,yorumlar

    const Contents = await Content.findAll({
      //dizi[1].preferences[0].usercontent.attribute
      where:{
        catagories:category,
      },
      attributes:["id","titleimage","title","subtitle","content","createdAt","updatedAt"],
      limit:10,
      offset:offsetValue,
      include:[
        {
          model:User,
          as:"Like",
          attributes:["id","firstname","lastname","mainUrl","Role"],
          include:{
            model:User,
            as:"Followed",
            attributes:["id"]
          },
          through:{
            where:{attribute:"Like"},
            attributes:["attribute"]
          }
        },
        {
          model:User,
          as:"Readlater",
          attributes:["id"],
          through:{
            where:{attribute:"Readlater"},
            attributes:["attribute"]
          }
        },
        {
          model:User,
          as:"Retweet",
          attributes:["id","firstname","lastname","mainUrl","Role"],
          include:{
            model:User,
            as:"Followed",
            attributes:["id"]
          },
          through:{
            where:{attribute:"Reshow"},
            attributes:["attribute"]
          }
        },
        {
          model:User,
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
        }
      ]
    })

    res.json({state:"success",data:Contents});

  } catch(error) {
    console.log(error);
    next();
    return;
  }

}

exports.createrelation=async (req,res,next)=>{

  try {
    
    const io = req.app.get("socketio");
    const {UserId,PostId,attribute,relationtype,UserIdofcontent}=req.body; 
   
   
    if(relationtype == "Destroy"){

      await Usercontent.destroy({
        where:
        {UserId:UserId,
        ContentId:PostId,
        attribute:attribute,
        Contentuserid:PostId,
        Useruserid:UserId,
      }
      })
    
    }
    else{

      await Usercontent.create({
        UserId:UserId,
        ContentId:PostId,
        attribute:attribute,
        Contentuserid:PostId,
        Useruserid:UserId,
      })
      
      //burada sadece like ve retweet için bildirim ayarlayabiliri
      //ToDo change enum values in not.. model
      //burada userıd ve yapılan contentin ıd si eşitse notification üretme diyoruz
      if(UserId !== UserIdofcontent){

          if(attribute == "Like" || attribute == "reshow")
          {
            await Notification.create({
                attribute:attribute,
                TakerId:[`${UserIdofcontent}`],
                ContentId:PostId,
                UserId:UserId,
            })
    
            
            //ToDo changable
            io.sockets.in(UserIdofcontent).emit("Notification","");
            
          }

      }
      

    } 

    res.json({state:"success"})

  }catch (error) {
    next();
    console.log(error);
  }
}

exports.getusercontent=async(req,res,next)=>{

  const {catagory,id,order}=req.params;
  const {UserId} = req.userdata
  //burada serverda tutaln user geliyor
  //burada ekstra bir kontrol gerekli

  if(UserId == id){//UserId is current, id is coming from outside

        var latestparams="";


        switch (catagory) {
          case "Readlater":
              latestparams="Readlater"
              break;
          case "Like":
              latestparams="Like"
              break;
          case "Reshow":
              latestparams="Retweet"
              break;    
          case "Draft":
              latestparams="Draft"
              break;       
        }

        var Datawillsend = [];
        
        try {
          
          if(latestparams == "Draft"){
              //todo alias for draft posts
              Datawillsend = await Content.findAll({
                  where:{
                    phase:"Draft",
                    Userforuserid:id,
                  }
              })  
       
             

          }
          else{

                Datawillsend = await Usercontent.findAll({
                where:{
                  UserId:id,
                  attribute:[`${latestparams}`],
                },
                limit:10,
                offset:parseInt(order),
                include:{
                  model:Content,
                  include:[{
                    model:User,
                    as:"personal",
                    attributes:["id","firstname","mainUrl","lastname","Role"]
                  }    
                ]
                }
              })

          }

        
          return res.json({data:Datawillsend})

        } catch (error){ 
          next();
          return;
        }

  }else{

    req.errorType = "404"
    return next()

  }
  
}
//Content sayfası
//namechange
exports.getcontent=async (req,res,next)=>{

  const {id} = req.params;
  
  try {
    //TODO we need the post which has "published" attribute !!
    const Mycontent=await Content.findOne({
      where:{id:id},
      attributes:["id","titleimage","title","subtitle","content","catagories"],
      include:[
        {
          model:Comment,
          include:[

            {
              model:User,
              attributes:["id","firstname","lastname","mainUrl","Role"]
            }

          ],
          as:"allcomments"
        },
        
        {
          model:User,
          as:"personal",
          attributes:["id","firstname","lastname","mainUrl","Role"],
        }
      ]
    })
    
    res.json({state:"success",data:Mycontent})

  }catch (error) {
    next();
    return;
  }
}
//Report section EDITOR STUFF !
exports.getReportedPosts = async (req,res,next)=>{

   const {UserId} = req.userdata;
   //add role field to web token to prevent uneccessary queries
   const currentUser = await User.findOne({
     where:{id:UserId}
   })

   try {
     
     if(currentUser.Role == "Mod" || currentUser.Role == "Admin"){

          var reports = await Report.findAll({
            include:{
              model:Content,
              include:{
                model:User,
                as:"personal",
                attributes:["id","firstname","lastname","mainUrl","ReportSum"]
              }
            }
        })

     }else{
        req.errorType = "404"
        return next();
     }

     return res.json({data:reports})
     
   } catch (error){

     return next();

   }
     
}

exports.ContentChecking = async (req,res,next)=>{

    const {actionType,contentID,publicValue} = req.body
    const {UserRole} = req.userdata;
  
    try {

      if(UserRole == "Mod" || UserRole == "Admin"){

          if(actionType == "CHECK_POST"){

            await Content.update({checked:true},{where:{id:contentID}})
    
          }else{
            
            await Content.update({phase:publicValue},{where:{id:contentID}})
    
          }

      }
      else{
          
        req.errorType = "401"
        return next()
        
      }

      return res.json({state:"success"})

    } catch (error) {

      return next();

    }

}

exports.reportDeletion = async (req,res,next)=>{

  const {reportID} = req.body
  const {UserRole} = req.userdata;

  try {

    if(UserRole == "Mod" || UserRole == "Admin"){

      await Report.destroy({where:{id:reportID}})

      return res.json({state:"success"})

    }
   
  } catch (error) {

    return next();

  }

}

exports.uploadContentImage = async (req,res,next)=>{
  console.log(req.files.files)
  try {
        if(req.files.files.size/1024 < 3000){
        const generatedTokenForName = v4()
        const blob = firebase.bucket.file(generatedTokenForName)

                const generatedToken = v4()
              
                const blobwriter = blob.createWriteStream({
                        metadata:{
                                contentType:"image/png",
                                metadata:{
                                      firebaseStorageDownloadTokens: generatedToken //generating uniqe token
                                    
                                },
                                        
                        }
                })
                    
                blobwriter.on("error",(err)=>{
                      
                })
                    
                blobwriter.on("finish",(data)=>{

                    res.json({uploaded:true,url:`https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${generatedTokenForName}?alt=media&token=${generatedToken}`})
                
                })

                blobwriter.end(req.files.files.data)
        }else{
            
            res.json({uploaded:false,url:"ERROR",state:"Big Size File!"})

        }
              

  } catch (error) {
      console.log(error)
      return next()
  }

}






