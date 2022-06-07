const jwt = require("jsonwebtoken");
const User=require("../models/Usermodel");
const bcrypt=require("bcrypt");
const {v4}=require("uuid");
const redis = require("redis")
const Sendemail = require("../MiddleFunctions/SendEmail")



const client = redis.createClient();

client.connect().then(()=>console.log("connecnted to redis server"))

exports.login = async (req,res,next)=>{
   
   try{

      const {email,password} = req.body.userdata;
     
      const user = await User.findOne({where:{email:email}});
         
    
      if(user){
         // TODO see if this code is necessary
         const mydata = {
            UserId:user.id,
            Username:user.firstname,
            Usersurname:user.lastname,
            Userrole:user.Role,
            Userimage:user.imageurl,
         }
         
         bcrypt.compare(password,user.password,(err,result)=>{
            
            if(result == true){
                
               jwt.sign({UserId:user.id,UserRole:user.Role},"AccessToken-SecretKey",{expiresIn:"1h"},(err,accessToken)=>{
               
                   jwt.sign({UserId:user.id,UserRole:user.Role},"refresh-accessToken-key",async (err,refreshToken)=>{

                     res.cookie("accessToken",accessToken,{httpOnly:true,path:"/",secure:true})
                     res.cookie("refreshToken",refreshToken,{httpOnly:true,path:"/",secure:true})
                     const RefreshTokens = await client.get("refreshTokens")
                     console.log("redis stuff down  : ")
                     console.log(RefreshTokens)
                     if(RefreshTokens != null){

                        const parsedArray = JSON.parse(RefreshTokens);
                        parsedArray.push(refreshToken)
                        client.set("refreshTokens",JSON.stringify(parsedArray))
         
                     }else{
         
                        client.set("refreshTokens",JSON.stringify([refreshToken]))
         
                     }
                  
                     return res.json({Userdata:mydata,accessToken:accessToken,refreshToken:refreshToken,auth:true});

                   })
                  
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
        console.log(err)
        next();
        return;
   }
}

exports.register = async (req,res,next)=>{

  const  {name,surname,email,password}=req.body.userdata;

  try{

      const user = await User.findOne({where:{email:email}});
   
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
    /*
    const refreshToken = req.refreshToken;
    const RefreshTokens = JSON.parse(await client.get("refreshTokens"))
    const IndexOfRefreshToken = RefreshTokens.findIndex((item)=>item == refreshToken)//this refresh token gonna be deleted
    RefreshTokens.splice(IndexOfRefreshToken,1);
    client.set("refreshTokens",JSON.stringify(RefreshTokens));
    */
    res.clearCookie("connect.sid")
    res.clearCookie("accessToken",{path:"/"})
    res.json({state:"success"})
}

exports.resetPassword = async()=>{

   const {email} = req.body;

   try {

      const emailResponse = await Sendemail(email,"")

     
      return res.json({state:emailResponse ? "success" : "Fail"})


   } catch (error){
      return next()
   }

}