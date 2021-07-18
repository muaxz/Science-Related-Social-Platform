const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");

const UserUser=sequlize.define("UserUser",{ 
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    FollowerId:{
        type:Sequlize.UUID,
    },
    FollowedId:{
        type:Sequlize.UUID,
    },
    Active:{
        type:Sequlize.STRING,
        get:function(){
            return JSON.parse(this.getDataValue("Active"))
        } ,
        set:function(value){
            return this.setDataValue("Active",JSON.stringify(value));
        },
    }
    
},{freezeTableName:true})

UserUser.belongsTo(User,{foreignKey:"Follower",as:"Followerpart"});
UserUser.belongsTo(User,{foreignKey:"Followed",as:"Followedpart"});

module.exports=UserUser;