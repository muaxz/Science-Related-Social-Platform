const jwt=require("jsonwebtoken");



module.exports=(req,res,next)=>{

    const token = req.cookies["myauth"];
    console.log(token)
   
    if(token){

     //burada request objesine yeni bir eleman tanımlayailiyoruz

     jwt.verify(token,"secretkey",(err,authdata)=>{
         
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
        return res.json("Unauthorized");
       //burada kullanıcı outlogin ediliyor
    }
}