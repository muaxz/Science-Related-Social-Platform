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
      values:["Like","Reshow","Follow","Comment","Post","Message"],
      allownull:true,
    },
    TakerId:{
        type:Sequlize.TEXT,
        get:function(){ 
            return  this.getDataValue("TakerId").split(",");
        },
        set:function(value){
            return this.setDataValue("TakerId",value.join());
        }
    },
    //migrationda ekledigini burada eklemek zorundasın
    Facecheck:{
        type:Sequlize.BOOLEAN,
        defaultValue:false,
    },
    ReportMessage:{
        type:Sequlize.STRING(255),
    }
   
})

Notification.belongsTo(Content)
Notification.belongsTo(User)
Notification.belongsTo(Comment)

module.exports=Notification;


