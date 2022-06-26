const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{

    const token = req.cookies["accessToken"];
    
    if(token){

     //burada request objesine yeni bir eleman tanımlayailiyoruz

        jwt.verify(token,"AccessToken-SecretKey",(err,authdata)=>{
            
            if(err){
                console.log(err.name)
                if(err.name == "TokenExpiredError"){

                    const refreshToken = req.cookies["refreshToken"];
                    console.log("refresh token down")
                    console.log(refreshToken)
                    jwt.verify(refreshToken,"refreshSecretKey",(err,userData)=>{
                       
                        if(err){
                      
                            return res.json({error:"Unauthroized",state:401})
                        }
                        else{
                
                            jwt.sign({...userData,exp: Math.floor(Date.now() / 1000) + 20},"AccessToken-SecretKey",(err,accessToken)=>{
                        
                                req.userdata = userData;
                                res.cookie("accessToken",accessToken,{expires: new Date(Date.now() + (1000*60*60*24*30)),httpOnly:true,path:"/",secure:true,sameSite:"strict"})
                                next();
                
                            })
                
                        }
                
                    })

                }else if(err.name == "JsonWebTokenError"){
                    console.log("inside invalid phase")
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
