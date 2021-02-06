const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const Content=require("./Contentmodel");
const Comment=require("./Commentmodel");

const User =sequlize.define("User",{
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname:{
        type:Sequlize.STRING,
        allownull:false, 
        uniqe:true,    
    },
    imageurl:{
        type:Sequlize.STRING,
    },
    lastname:{
         type:Sequlize.STRING,
         allownull:false
    },
    email:{
        type:Sequlize.STRING,
        allownull:false,
    },
    password:{
        type:Sequlize.STRING,
        allownull:false,
    },
    Role:{
        type:Sequlize.ENUM,
        values:["User","Admin","Editör"],
        defaultValue:"User"
    },
    Banned:{
        type:Sequlize.BOOLEAN,
        defaultValue:false,
    },
    Personaltext:{
        type:Sequlize.TEXT,
    },
    Notification:{
        type:Sequlize.STRING,
        get:function(){
            return JSON.parse(this.getDataValue("Notification"))
        } ,
        set:function(value){
            return this.setDataValue("Notification",JSON.stringify(value));
        },

        //bir obje olucak ve içeriği :{likepost:true,sharepost:false:,like:comment}
    }
    
})








module.exports=User;