const jwt=require("jsonwebtoken");
const User=require("../models/Usermodel");
const bcrypt=require("bcrypt");

exports.login=async (req,res)=>{

   try{

      const {Eposta,Şifre}=req.body.userdata;
      console.log(Eposta);
      
   
      const user=await User.findOne({where:{email:Eposta}});
         
       
     
      if(user){
   
           const willbesend={
            userid:user.id,
            fistname:user.firstname,
            lastname:user.lastname,
            Role:user.Role,
            imageurl:user.imageurl,
          }
         
          await bcrypt.compare(Şifre,user.password,(err,result)=>{
   
            if(result == true){
              
   
               jwt.sign({User:willbesend},"secretkey",(err,token)=>{
                  //public key or private key
   
                   return res.json({Userdata:willbesend,token:token,auth:true});
               })
               
            }  
            else{
               return res.json({wrong:"WP"})
            }
   
         });
   
      }
      else{
   
         return res.json({wrong:"WE"})
      }

   }
   catch(err){

   }
}

//---------------------------------------------------------------------------------

exports.register= async (req,res)=>{

  const  {name,surname,email,password}=req.body;
  try{
      const user=await User.findOne({where:{email:email}});
   
      if(user){
   
         return res.json({warning:"exist"})
      }
      else{
   
         const hashedpassword= await bcrypt.hash(password,10)
   
         await User.create({
            firstname:name,
            lastname:surname,
            email:email,
            password:hashedpassword,
            Notification:{
               Whenfollow:true,
               Whenpost:true,
               Whenlike:true,
               Whencomment:true,
            }
         })
   
         return res.json({success:true})
      }
  }
  catch(err){
     console.log(err);
  }

}