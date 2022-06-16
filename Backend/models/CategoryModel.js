const Sequelize=require("sequelize");
const sequlizeBase=require("../database/base");
const Category = sequlizeBase.define("Category",{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName:{
      type:Sequelize.STRING,
      allowNull:false
    },
    categoryImage:{
      type:Sequelize.BLOB("long"),
      allowNull:false
    }
})


module.exports = Category;