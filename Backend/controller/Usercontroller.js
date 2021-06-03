const Usermodel=require("../models/Usermodel");

exports.getuserdata=async(req,res,next)=>{
    
    const currentuserid=req.userdata;

    try {

       const Myuserdata=await Usermodel.findOne({
           where:{id:currentuserid.UserId}
       })

       console.log("mydataaaaaa"+Myuserdata);

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