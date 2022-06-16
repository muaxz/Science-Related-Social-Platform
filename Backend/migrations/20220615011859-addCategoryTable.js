'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable("Category",{
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
  },
  down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable("Category")
  }
};
