const jwt=require("jsonwebtoken");
const Redis = require("ioredis")
require("dotenv")

const client = new Redis({
    host:"ec2-107-21-212-176.compute-1.amazonaws.com",
    port:11210,
    password:"p02f1a4d23900a9697de8339827683c998e2bb370467e9070a9353cf970871c36",
    connectTimeout:10000,
    tls:{
       rejectUnauthorized: false,
    },
 })

module.exports=async(req,res,next)=>{

    const token = req.cookies["accessToken"];
    console.log(req.cookies["accessToken"])
    if(token){

     //burada request objesine yeni bir eleman tanımlayailiyoruz

        jwt.verify(token,process.env.ACCESS_SECRET_KEY,async(err,authdata)=>{
            
            if(err){
                
                if(err.name == "TokenExpiredError"){
                    console.log("inside expiration error")
                    const refreshToken = req.cookies["refreshToken"];

                    const parsedRefreshArray = JSON.parse(await client.get("refreshTokens"))
                    if(!parsedRefreshArray.includes(refreshToken)) return res.json({error:"Unauthroized",state:401})

                    jwt.verify(refreshToken,process.env.REFRESH_SECRET_KEY,(err,userData)=>{
                       
                        if(err){
                      
                            return res.json({error:"Unauthroized",state:401})
                        }
                        else{
                
                            jwt.sign({...userData,exp: Math.floor(Date.now() / 1000) + (60*5)},process.env.ACCESS_SECRET_KEY,(err,accessToken)=>{
                        
                                req.userdata = userData;
                                res.cookie("accessToken",accessToken,{expires: new Date(Date.now() + (1000*60*60*24*30)),httpOnly:true,path:"/",secure:true,sameSite:"none"})
                                next();
                
                            })
                
                        }
                
                    })

                }else if(err.name == "JsonWebTokenError"){

                    res.clearCookie("accessToken",{path:"/"})
                    return res.json({error:"Unauthroized",state:401})  
                }

               
                //burada kullanıcı outlogin ediiyor
            }
            else{
                
                req.userdata = authdata;
                next();
                return;

            }
        })

    }
    else{

        if(req.route.path == "/getuserprofile/:UserId") return next();
        
        return res.json({error:"Unauthroized",state:401})
       //burada kullanıcı outlogin ediliyor
    }
}
