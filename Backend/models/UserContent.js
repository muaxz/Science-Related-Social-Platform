const Sequlize=require("sequelize");
const sequlize=require("../database/base");

const UserContent=sequlize.define("UserContent",{ 
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserId:{
        type:Sequlize.INTEGER,
    },
    ContentId:{
        type:Sequlize.INTEGER,
    },
    attribute:{
       type:Sequlize.ENUM,
       values:["Like","Readlater","Reshow"],
    }

},{tableName:"UserContent"})

module.exports=UserContent;