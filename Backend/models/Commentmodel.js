const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const Content=require("./Contentmodel");
const Comment=sequlize.define("Comment",{
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Message:{
        type:Sequlize.STRING,
    },
})

module.exports=Comment;