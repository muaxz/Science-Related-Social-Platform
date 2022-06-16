'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.addColumn("contents","CategoryId",{
        type:Sequelize.INTEGER
     })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.removeColumn("contents","CategoryId")
  }
};
