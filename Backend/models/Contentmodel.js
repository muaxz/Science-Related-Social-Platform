const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");
const Comment=require("./Commentmodel");
const Category = require("./CategoryModel")


const Content=sequlize.define("Content",{
    id:{
        type:Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titleimage:{
         type:Sequlize.TEXT,
         allowNull:false,
    },
    title:{
        type:Sequlize.STRING,
        allowNull:false,      
    },
    subtitle:{
        type:Sequlize.TEXT,
    },
    content:{
         type:Sequlize.TEXT,
         allowNull:false,
    },
    phase:{
        type:Sequlize.ENUM,
        values:["Published","Unpublished","Draft"],
        allowNull:true,
    },
    Draftalias:{
        type:Sequlize.STRING,
        allowNull:true,
    },
    Message:{
        type:Sequlize.STRING,
        defaultValue:"",
    },
    checked:{
        type:Sequlize.BOOLEAN,
        defaultValue:false
    },
    description:{
        type:Sequlize.STRING,
        allowNull:false
    }

})


Content.belongsTo(Category)
Content.belongsToMany(User,{through:"UserContent",as:"Like"})
User.belongsToMany(Content,{through:"UserContent",as:"Like"})
Content.belongsToMany(User,{through:"UserContent",as:"Readlater"})
User.belongsToMany(Content,{through:"UserContent",as:"Readlater"})
Content.belongsToMany(User,{through:"UserContent",as:"Retweet"})
User.belongsToMany(Content,{through:"UserContent",as:"Retweet"})
Content.belongsTo(User,{as:"personal",foreignKey:"UserforuserId"});
User.hasMany(Content,{as:"personal",foreignKey:"UserforcontentId"})//tek bir column oluşturuyor forignkey aynı olunca
Content.hasMany(Comment,{as:"allcomments"});

module.exports=Content;
