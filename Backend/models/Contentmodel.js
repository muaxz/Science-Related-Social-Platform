const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");

const Content=sequlize.define("Content",{
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title:{
        type:Sequlize.STRING,
        allownull:false,      
    },
    content:{
         type:Sequlize.TEXT,
    },
    Process:{
        type:Sequlize.ENUM,
        values:["Checked","Waiting","Published","NotAllowed"],
        defaultValue:"Waiting"
    },
    catagories:{
        type:Sequlize.ENUM,
        values:["History","Science","Music"]
    },
    allowPublish:{
        type:Sequlize.BOOLEAN,
        defaultValue:false,
        allownull:false,
    },
    Message:{
        type:Sequlize.STRING,
    },

})

Content.belongsToMany(User,{through:"UserContent",as:"preference"})
User.belongsToMany(Content,{through:"UserContent",as:"preference"})
Content.belongsTo(User,{as:"personal",foreignKey:"UserId"});
User.hasMany(Content,{as:"personal",foreignKey:"UserId"})//tek bir column oluşturuyor forignkey aynı olunca

module.exports=Content;
