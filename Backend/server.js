const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const DB=require("./database/base");
const Contentmodel=require("./models/Contentmodel");
const Notification=require("./models/Notificationmodel");
const Commentmodel=require("./models/Commentmodel");
const Usercontent=require("./models/UserContent");
const Loginrouter=require("./routes/loginregister");

app.use(bodyparser.urlencoded({extended:false}));

DB.sync({force:true})
.then(()=>{
    console.log("added to table");
})

app.use(Loginrouter);

app.listen("3001",()=>{console.log("server started")})
