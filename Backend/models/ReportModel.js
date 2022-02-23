const Sequlize=require("sequelize");
const sequlize=require("../database/base");
const User=require("./Usermodel");
const Content=require("./Contentmodel");

const ReportModel=sequlize.define("Report",{ 
    id:{
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ReportMessage:{
        type:Sequlize.STRING,
    },
    ReportCheckBox:{
        type:Sequlize.INTEGER,
    },
    ContentId:{
        type:Sequlize.INTEGER,
    },
    UserId:{
       type:Sequlize.UUID,
    }

})

ReportModel.belongsTo(Content);
ReportModel.belongsTo(User);



module.exports=ReportModel;