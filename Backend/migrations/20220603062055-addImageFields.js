'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return Promise.all([queryInterface.addColumn("users","mainUrl",{
        type:Sequelize.TEXT,
        allowNull:true
      }),queryInterface.addColumn("users","backgroundUrl",{
        type:Sequelize.TEXT,
        allowNull:true
      })])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("users","mainUrl"),queryInterface.removeColumn("users","backgroundUrl")])
  }
};
