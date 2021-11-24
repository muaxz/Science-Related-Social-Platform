const jwt=require("jsonwebtoken");
const User=require("../models/Usermodel");
const bcrypt=require("bcrypt");
const {v4}=require("uuid");

exports.login = async (req,res,next)=>{

   try{

      const {email,password}=req.body.userdata;
     
      const user=await User.findOne({where:{email:email}});
         

      console.log("heyyyyyooooooo buradaaaaaa");
      
      if(user){

         const mydata={
            UserId:user.id,
            Username:user.firstname,
            Usersurname:user.lastname,
            Userrole:user.role,
            Userimage:user.imageurl,
         }
         
         await bcrypt.compare(password,user.password,(err,result)=>{
            console.log(result);
            if(result == true){
               
                //ToDo redis to store tokens
                //ToDorefresh token
               jwt.sign({UserId:user.id},"secretkey",(err,token)=>{
                  //public key or private key
                   res.cookie("myauth",token,{httpOnly:true,path:"/"})
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
        console.log(err);
        next();
        return;
   }
}


exports.register = async (req,res,next)=>{

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
            id:v4(),
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
     console.log(err);
     return;
  }

}

exports.logout = async(req,res,next)=>{
    console.log("Logout aloooooooooooooo")
    res.clearCookie("myauth",{path:"/"})
    res.json({state:"success"})

}