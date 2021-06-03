const Content=require("../models/Contentmodel");
const User=require("../models/Usermodel");
const Usercontent=require("../models/UserContent");
const Comment=require("../models/Commentmodel");


exports.produce=async (req,res,next)=>{
 
  const {contentdata:{title,content,subtitle,catagories}}=req.body;

  console.log(content);

  try {  

    await Content.create({
        title:title,
        subtitle:subtitle,
        content:content,
        catagories:catagories,
        UserforuserId:1,
        UserforcontentId:1,
    })
      return res.json({state:"success"});
  }catch(err){
      next();
      return;
  }
}


exports.gethome=async(req,res,next)=>{


  const {number}=req.params;

  var newnum=parseInt(number);//paramstand string olarak alıyoruz

  try {
    //beğenenler,yorumlar
    const Contents=await Content.findAll({
      //dizi[1].preferences[0].usercontent.attribute
      attributes:["id","titleimage","title","subtitle","content","createdAt","updatedAt"],
      limit:newnum,
      offset:newnum-10,
      include:[
        {
          model:User,
          as:"Like",
          attributes:["id","firstname","lastname","imageurl","Role"],
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
          attributes:["id","firstname","lastname","imageurl","Role"],
          through:{
            where:{attribute:"Reshow"},
            attributes:["attribute"]
          }
        },
        {
          model:User,
          as:"personal",
          attributes:["id","firstname","imageurl","lastname","Role"]
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

    const {UserId,PostId,attribute,relationtype}=req.body; 
   
   
    if(relationtype == "Destroy"){

      await Usercontent.destroy({
        where:
        {UserId:UserId,
        ContentId:PostId,
        attribute:attribute}
      })
      
    }
    else{

      await Usercontent.create({
        UserId:UserId,
        ContentId:PostId,
        attribute:attribute,
      })

    } 

    res.json({state:"success"})

  }catch (error) {
    next();
    console.log(error);
  }
}

exports.getusercontent=async(req,res,next)=>{

  const {catagory,id}=req.params;
  
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
  }

  try {

    const includeuser=await User.findOne({
      where:{id:id},
      attributes:["firstname"],
      include:{
        model:Content,
        as:latestparams,
        through:{
          where:{attribute:catagory}
        }
      }
    })
   
    res.json({data:includeuser})

  } catch (error){
    console.log(error);
    return;
  }
}


exports.getcontent=async (req,res,next)=>{

  const {id}=req.params;
 

  try {
    //TODO including comments and users (with nested include)
    const Mycontent=await Content.findOne({
      where:{id:id},
      attributes:["id","titleimage","title","subtitle","content","catagories"],
      include:[
        {
          model:Comment,
          include:[

            {
              model:User,
              attributes:["id","firstname","lastname","imageurl","Role"]
            }

          ],
          as:"allcomments"
        },
        
        {
          model:User,
          as:"personal",
          attributes:["id","firstname","lastname","imageurl","Role"],
        }
      ]
    })
    
    res.json({state:"success",data:Mycontent})

  }catch (error) {
    next();
    return;
  }
}