const express=require("express");
const app=express();
const cors=require("cors");
const DB=require("./database/base");
const Contentmodel=require("./models/Contentmodel");
const Commentmodel=require("./models/Commentmodel");
const Usercontent=require("./models/UserContent");
const Loginrouter=require("./routes/loginregister");
const User=require("./models/Usermodel");
const Contentrouter=require("./routes/Contentrouter");
const Commentrouter=require("./routes/Commentrouter");
const Upload=require("./routes/upload");
const Notification=require("./models/NotificationModel");
const UserUser=require("./models/UserUser");
const Myserver=require("http").createServer(app);
const io = require("socket.io")(Myserver,{cors:["http://localhost:3000","https://mynextrepo.vercel.app"]})
const Userrouter=require("./routes/userrouter");
const Notifyrouter=require("./routes/Notificationroute");
const cookieparser = require("cookie-parser")
const Session = require("express-session")
const fileupload = require("express-fileupload");
const Refreshrouter = require("./routes/RefreshToken")
require("dotenv").config();
//const csurf = require("csurf");
//var csrfProtection = csrf({cookie:true})

const port =  process.env.PORT || 3001 
console.log(process.env.PRIVATE)
io.on("connection",(socket)=>{ 
  
    socket.on("create",(UserId)=>{
        socket.join(UserId)
    })
  //ilk connection oldugunda online olan herkesi odaya kat ayri ayri yerlestir
})

DB.sync()
.then(()=>{})

app.use(cors({origin:["http://localhost:3000","https://mynextrepo.vercel.app"],credentials:true,exposedHeaders:"csrf-token"}));
app.use(cookieparser())
app.use(fileupload())
app.set("socketio",io)
app.use(express.urlencoded({extended:false}));
app.use(express.json());



//routes.............................................

/*
app.use("*",(req,res,next)=>{

    if(!req.session.firstCsrf){
      
        const csrf = new Token();
        const secret = csrf.secretSync();
        const createdToken  = csrf.create(secret);
        req.session.csrfSecret = secret;
        req.session.firstCsrf = true;
        res.header("csrf-token",createdToken)
    }

    next()

})
*/

app.use(Loginrouter);
app.use("/content",Contentrouter);
app.use("/upload",Upload);
app.use("/user",Userrouter);
app.use("/comment",Commentrouter);
app.use("/notification",Notifyrouter);

app.use("*",(req,res)=>{
    
    if(req.errorType == "404"){

        return res.json({error:"Page Not Found!",state:404})

    }
    else if(req.errorType == "401"){

        return res.json({error:"Page Not Found!",state:401})

    }

    return res.json({error:"Server Error",state:500})
})

Myserver.listen(port,()=>{})










/*DB.sync()
.then(()=>{
   
    Contentmodel.count()
    .then((count)=>{
           if(count<5){
                Contentmodel.bulkCreate([
                    {titleimage:"image",title:"Ottoman Empire",subtitle:"culture",content:"content...",catagories:"Uzay"}, 
                    {titleimage:"image2",title:"Ottoman Empire",subtitle:"culture2",content:"content...",catagories:"Felsefe"},
                    {titleimage:"image3",title:"Ottoman Empire",subtitle:"culture2",content:"content...",catagories:"Felsefe"},
                ])
                .then(()=>{
                    Commentmodel.bulkCreate([
                        {Message:"Güzel bir post",ContentId:1},
                        {Message:"Güzel bir post",ContentId:1},
                        {Message:"Güzel bir post",ContentId:3}
                    ])
                })
                .then(()=>{
                    Usercontent.bulkCreate([{
                        UserId:2,
                        ContentId:4,
                        attribute:"Like"
                    }]) 
                    
                    User.bulkCreate([
                        {firstname:"sadık",imageurl:"image",lastname:"özer",email:"bexsd@hotmail.com",password:"890890890q",Personaltext:"SA",Notification:{follow:true}}
                    ])
                })
           }
    })
})
*/