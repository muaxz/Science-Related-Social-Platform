const jwt=require("jsonwebtoken");
const User=require("../models/Usermodel");
const bcrypt=require("bcrypt");

exports.login=async (req,res,next)=>{

   try{

      const {email,password}=req.body.userdata;
     
      const user=await User.findOne({where:{email:email}});
         
      const mydata={
         UserId:user.id,
         Username:user.firstname,
         Usersurname:user.surname,
         Userrole:user.role,
         Userimage:user.imageurl,
      }
      
      if(user){
         
          await bcrypt.compare(password,user.password,(err,result)=>{
            console.log(result);
            if(result == true){
               
                //ToDo redis to store tokens
                //ToDorefresh token
               jwt.sign({UserId:user.id},"secretkey",(err,token)=>{
                  //public key or private key
                   return res.json({Userdata:mydata,token:token,auth:true});
               })
               
            }  
            else{
               return res.json({wrong:"WP"})
            }
   
         });
   
      }
      else{
         return res.json({wrong:"WE"});
      }

   }
   catch(err){
        //server error
        next();
        return;
   }
}

//---------------------------------------------------------------------------------

exports.register=async (req,res)=>{

  const  {name,surname,email,password}=req.body.userdata;
   console.log(email);

  try{

      const user=await User.findOne({where:{email:email}});
   
      if(user){

         return res.json({warning:"exist"});

      }
      else{

         const hashedpassword= await bcrypt.hash(password,10);
   
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
      
     next();
     return;
  }

}