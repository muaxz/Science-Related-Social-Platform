const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");
const Comment=require("./Commentmodel");


const Content=sequlize.define("Content",{
    id:{
        type:Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titleimage:{
         type:Sequlize.TEXT,
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
    catagories:{
        type:Sequlize.ENUM,
        values:["Felsefe","Uzay","Metafizik","Biyoloji"],
        allowNull:true,
    },
    allowPublish:{
        type:Sequlize.BOOLEAN,
        defaultValue:false,
        allownull:false,
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
    Alias:{
        type:Sequlize.STRING,
        allowNull:true
    }

})

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
