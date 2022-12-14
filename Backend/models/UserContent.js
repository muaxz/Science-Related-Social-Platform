const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");
const Content=require("./Contentmodel");

const UserContent=sequlize.define("UserContent",{ 
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserId:{
        type:Sequlize.UUID,
    },
    ContentId:{
        type:Sequlize.INTEGER,
    },
    attribute:{
       type:Sequlize.ENUM,
       values:["Like","Readlater","Reshow"],
    }

},{tableName:"UserContent"})

UserContent.belongsTo(Content,{foreignKey:"Contentuserid"});
UserContent.belongsTo(User,{foreignKey:"Useruserid"});


module.exports=UserContent;