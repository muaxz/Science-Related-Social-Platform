const express=require("express");
const bodyparser=require("body-parser");
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
const Upload=require("./routes/upload");
const socketio = require("socket.io");
const server=require("http").createServer(app);
const io=socketio(server);
const Userrouter=require("./routes/userrouter");

io.on("connection",socket=>{
    console.log("connection...");
    socket.emit
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
DB.sync()
.then(()=>{
    console.log("deleted");
})

app.use(Loginrouter);
app.use("/content",Contentrouter);
app.use("/upload",Upload);
app.use("/user",Userrouter);
console.log("node js readed")
//default error handler
app.use((error,req,res,next)=>{

    return res.status(500).json({error:"Somethingwentwrong!"})
})

app.listen("3001",()=>{console.log("server started")})










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