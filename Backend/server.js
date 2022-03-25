const express=require("express");
const app=express();
const cors=require("cors");
const DB=require("./database/base");
const Contentmodel=require("./models/Contentmodel");
const Notification=require("./models/Notificationmodel");
const Commentmodel=require("./models/Commentmodel");
const Usercontent=require("./models/UserContent");
const Loginrouter=require("./routes/loginregister");
const User=require("./models/Usermodel");
const Contentrouter=require("./routes/Contentrouter");
const Commentrouter=require("./routes/Commentrouter");
const Upload=require("./routes/upload");
const UserUser=require("./models/UserUser");
const Myserver=require("http").createServer(app);
const io = require("socket.io")(Myserver,{cors:{origin:"http://localhost:3000"}})
const Userrouter=require("./routes/userrouter");
const Notifyrouter=require("./routes/Notificationroute");
const cookieparser = require("cookie-parser")
const fileupload = require("express-fileupload")
const port =  process.env.PORT || 3000 



io.on("connection",(socket)=>{ 
    console.log("connection on socket io...");
    socket.on("create",(UserId)=>{
        socket.join(UserId)
        console.log(UserId)
    })
  //ilk connection oldugunda online olan herkesi odaya kat ayri ayri yerlestir
})


app.use(fileupload())
app.set("socketio",io)
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({origin:"http://localhost:3000",credentials:true}));

DB.sync()
.then(()=>{
    console.log("deleted");
})

app.use(cookieparser())
app.use(Loginrouter);
app.use("/content",Contentrouter);
app.use("/upload",Upload);
app.use("/user",Userrouter);
app.use("/comment",Commentrouter);
app.use("/notification",Notifyrouter);


//default error handler
app.use((error,req,res,next)=>{

    return res.status(500).json({error:"Somethingwentwrong!"})
})

Myserver.listen(port,()=>{console.log("server started")})










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