const Content=require("../models/Contentmodel");
const User=require("../models/Usermodel");
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
      console.log(err);
      return res.json({state:"error"});

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
      attributes:["id","titleimage","title","subtitle","content"],
      limit:defaultnum,
      offset:defaultnum-10,
      include:[
        {
          model:User,
          as:"Like",
          attirbutes:["id","firstname","lastname","imageurl","Role"],
          through:{
            where:{attribute:"Like"},
            attributes:["attribute"]
          }
        },
        {
          model:User,
          as:"Retweet",
          attirbutes:["id","firstname","lastname","imageurl","Role"],
          through:{
            where:{attribute:"Retweet"},
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
     res.json("")
  }
}

exports.delete=(req,res)=>{

    const id=req.params.id; 
}

exports.getflow=(req,res)=>{

}