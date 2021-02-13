const Content=require("../models/Contentmodel");

exports.produce=async (req,res)=>{

  const {contentdata:{title,content,catagories,id}} =req.body;

  try {  

    await Content.create({
        title:title,
        content:content,
        catagories:catagories,
        UserId:id,
    })

      return res.json("success");

  }catch (error) {

      return res.json("err");

  }
}


exports.delete=(req,res)=>{

    const id=req.params.id; 
}

exports.getflow=(req,res)=>{

}