const Sequlize=require("sequelize");
const sequlize=require("../database/base");

const UserContent=sequlize.define("UserContent",{   
    UserId:{
        type:Sequlize.INTEGER,
    },
    ContentId:{
        type:Sequlize.INTEGER,
    },
    attribute:{
       type:Sequlize.STRING,
       values:["Like","Readlater"],
    }
})

module.exports=UserContent;