const jwt = require("jsonwebtoken");
const User=require("../models/Usermodel");
const fs = require("fs")
const bcrypt=require("bcrypt");
const {v4}=require("uuid");
const Sendemail = require("../MiddleFunctions/SendEmail")
const Redis = require("ioredis")
const REDIS_PORT = process.env.PORT || 6379
require("dotenv").config()


const client = new Redis({
   host:"ec2-107-21-212-176.compute-1.amazonaws.com",
   port:11210,
   password:"p02f1a4d23900a9697de8339827683c998e2bb370467e9070a9353cf970871c36",
   connectTimeout:10000,
   tls:{
      rejectUnauthorized: false,
   },
})

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
            Userimage:user.mainUrl,
         }
         
         bcrypt.compare(password,user.password,(err,result)=>{
            console.log(process.env.ACCESS_SECRET_KEY)
            if(result == true){
                
               jwt.sign({UserId:user.id,UserRole:user.Role,exp: Math.floor(Date.now() / 1000) + (60*5)},process.env.ACCESS_SECRET_KEY,(err,accessToken)=>{
               
                   jwt.sign({UserId:user.id,UserRole:user.Role,exp:Math.floor(Date.now() / 1000) + (60*60*24*30)},process.env.REFRESH_SECRET_KEY,async (err,refreshToken)=>{

                     res.cookie("accessToken",accessToken,{expires: new Date(Date.now() + (1000*60*60*24*30)),httpOnly:true,path:"/",secure:true,sameSite:"none"})
                     res.cookie("refreshToken",refreshToken,{expires: new Date(Date.now() + (1000*60*60*24*30)),httpOnly:true,path:"/",secure:true,sameSite:"none"})
                     const RefreshTokens = await client.get("refreshTokens")
                     console.log("redis stuff down  : ")
                     //console.log(RefreshTokens)
                     if(RefreshTokens != null){
                        //putting refreshtoken in redis
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
    
    const refreshToken = req.refreshToken;
    const RefreshTokens = JSON.parse(await client.get("refreshTokens"))
    const IndexOfRefreshToken = RefreshTokens.findIndex((item)=>item == refreshToken)//this refresh token gonna be deleted
    RefreshTokens.splice(IndexOfRefreshToken,1);
    client.set("refreshTokens",JSON.stringify(RefreshTokens));
    res.set("Set-Cookie",[`accessToken=0;Max-Age=0;Path=/;HttpOnly;Secure;SameSite=None`,`refreshToken=0;Max-Age=0;Path=/;HttpOnly;Secure;SameSite=None`])
    //res.clearCookie("accessToken",{path:"/",domain:"ideasharee.herokuapp.com"})
    //res.clearCookie("refreshToken",{path:"/",domain:"ideasharee.herokuapp.com"})
    res.json({state:"success"})
}

exports.sendResetEmail = async(req,res,next)=>{

   const {email} = req.body;

   try {

      const requestedUser = await User.findOne({where:{email:email}})

      if(requestedUser != null){

            const passwordToken = jwt.sign({},process.env.RESET_SECRET_KEY,{expiresIn:"1h"});
            await requestedUser.update({resetPasswordToken:passwordToken})
            await Sendemail(email,{firstname:requestedUser.firstname,surname:requestedUser.lastname,generatedLink:`http://localhost:3000/login?token=${passwordToken}`})

      }else return res.json({state:"Not Exist"})//show it to user on interface

   
      return res.json({state:"success"})

   } catch (error){

      return next()

   }

}

exports.checkResetToken = async(req,res,next)=>{
  
   try {

      const {token} = req.body
      const requestedUser = await User.findOne({where:{resetPasswordToken:token}})
     
      if(!requestedUser) return res.json({state:"NotExist"})

      return res.json({state:"Exist"})

   } catch (error) {
      return next()
   }

}

exports.resetPassword = async (req,res,next)=>{
   const {password,token} = req.body;
   console.log("in herer")
   const requestedUser = await User.findOne({where:{resetPasswordToken:token}})

   try {
      //special key for reseting password
      jwt.verify(token,process.env.RESET_SECRET_KEY,async (err,data)=>{

         if(err) return res.json({state:"error"})

         const hashedpassword= await bcrypt.hash(password,10);
         
         await requestedUser.update({
            password:hashedpassword,
            resetPasswordToken:null
         })

         res.json({state:"success"})

      })

   } catch (error) {
       return next()
   }

}  
