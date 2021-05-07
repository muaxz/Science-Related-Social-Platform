const Content=require("../models/Contentmodel");
const User=require("../models/Usermodel");
const Usercontent=require("../models/UserContent");
const Comment=require("../models/Commentmodel");
const Sequlize=require("sequelize");
const db=require("../database/base");
const {Op}=require("sequelize");



exports.produce=async (req,res)=>{
 
  const {contentdata:{title,content,subtitle,catagories}} =req.body;
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


exports.gethome=async(req,res)=>{

  var defaultnum=10;
  const {number}=req.params;


  if(number)
  defautnum=number;

  try {
    //beğenenler,yorumlar
    const Contents=await Content.findAll({
      //dizi[1].preferences[0].usercontent.attribute
      attributes:["id","titleimage","title","subtitle","content","createdAt","updatedAt"],
      limit:defaultnum,
      offset:defaultnum-10,
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

exports.createrelation=async (req,res)=>{
 
  try {

    const {UserId,PostId,attribute}=req.body; 

    await Usercontent.create({
      UserId:UserId,
      PostId:PostId,
      attribute:attribute,
    })

    res.json({state:"success"})

  }catch (error) {
    next();
  }
}

exports.destroyrelation=async()=>{

    try {

      const {UserId,PostId,attribute}=req.body; 

      await Usercontent.destroy({
        where:{UserId:UserId,PostId:PostId,attribute:attribute}
      })

      res.json({state:"success"})

    }catch (error){
       next();
       return;
    }

}

exports.getcontent=async (req,res)=>{

  const {id}=req.params;

  try {
    //TODO including comments and users (with nested include)
    const Mycontent=await Content.findOne({
      where:{id:id},
      attributes:["id","titleimage","title","subtitle","content","catagories"],
    })

    res.json({state:"success",data:Mycontent})

  }catch (error) {
    next();
    return;
  }
}