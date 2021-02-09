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

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

DB.sync()
.then(()=>{
    User.count()
    .then(count=>{
        if(count<2){
            User.bulkCreate([{
                firstname:"sadık",imageurl:"asasdasd",lastname:"özer",email:"bexsd@hotmail.com",password:"21312313",Role:"User",Banned:false,Personaltext:"I like football",Notification:{whenfollow:true}
            },{
                firstname:"emre",imageurl:"asasdasd",lastname:"yılmaz",email:"bexsd@hotmail.com",password:"21312313",Role:"User",Banned:false,Personaltext:"I like football",Notification:{whenfollow:true}
            }])
            .then(()=>{
                Contentmodel.bulkCreate([{
                    title:"Ottoman",content:"text",process:"Checked",catagories:"History",Message:"wrong",personalId:1,UserId:1
                },{
                    title:"Terminal",content:"text",process:"Checked",catagories:"History",Message:"wrong",personalId:1,UserId:1
                }])
            })
        }
       
    })
    .then(()=>{
        Contentmodel.findAll({
            include:{model:User,as:"personal"}
        })
        .then((res)=>{
            console.log(res[1].personal)
        })
    })
    

 
    
    console.log("added to table");
})

app.use(Loginrouter);

app.listen("3001",()=>{console.log("server started")})
