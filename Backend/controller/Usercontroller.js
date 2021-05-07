const Usermodel=require("../models/Usermodel");

exports.getuserdata=async(req,res,next)=>{
    
    const currentuserid=req.userdata;
    console.log(currentuserid);
   
    
    try {

       const Myuserdata=await Usermodel.findOne({
           where:{id:currentuserid.UserId}
        })
        console.log(Myuserdata)
       return res.json({success:"success",userdata:Myuserdata});
     

    } catch (error){
       next();
       console.log("errrrrrrrrrrrrrrrrrrrrr")
       return;
    }
    //buradan sadece userId gelicek
}