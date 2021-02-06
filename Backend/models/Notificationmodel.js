const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");
const Comment=require("./Commentmodel");
const Content=require("./Contentmodel");


const Notification=sequlize.define("Notification",{
    
    id:{
        type:Sequlize.INTEGER,
        allownull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    attribute:{
      type:Sequlize.ENUM,
      values:["Like","Followcontent","FollowComment","Replytocontent"]
    },
    TakerId:{
        type:Sequlize.INTEGER,
    }
})

Notification.belongsTo(Content)
Notification.belongsTo(User)
Notification.belongsTo(Comment)

module.exports=Notification;


