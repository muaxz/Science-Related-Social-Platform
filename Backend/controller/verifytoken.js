const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{

    const token = req.cookies["accessToken"];
    
    if(token){

     //burada request objesine yeni bir eleman tanımlayailiyoruz

        jwt.verify(token,"AccessToken-SecretKey",(err,authdata)=>{
            
            if(err){
                res.clearCookie("accessToken",{path:"/"})
                return res.json({error:"Unauthroized",state:401})
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
