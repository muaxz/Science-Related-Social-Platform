const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("../models/Usermodel");
const Comment=sequlize.define("Comment",{
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allownull:false,
    },
    Message:{
        type:Sequlize.STRING,
    },
})


Comment.hasMany(Comment,{as:"subcomments"});



module.exports=Comment;