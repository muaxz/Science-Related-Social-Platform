'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     queryInterface.addColumn("contents","Draftalias",{
          type:Sequelize.STRING,
          allowNull:true,
     })
  },

  down: async (queryInterface, Sequelize) => {
      queryInterface.removeColumn("contents","Draftalias")
  }
};
