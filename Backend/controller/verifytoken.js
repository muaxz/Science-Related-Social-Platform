const jwt=require("jsonwebtoken");


module.exports=(req,res,next)=>{

    const bearerHeader=req.headers["authorization"];
  
    if(typeof bearerHeader !== "undefined"){
     
     const bearer=bearerHeader.split(" ");

     const beareToken=bearer[1];

     //burada request objesine yeni bir eleman tanımlayailiyoruz

     jwt.verify(beareToken,"secretkey",(err,authdata)=>{
         
        if(err){

            return res.json("Unauthorized");
            //burada kullanıcı outlogin ediiyor
        }
        else{
            
            req.userdata=authdata;
            next();
            return;

        }
     })

    }
    else{
       return res.json("warning")
       //burada kullanıcı outlogin ediliyor
    }
}