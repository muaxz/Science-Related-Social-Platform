'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users","resetPasswordToken",{
      type:Sequelize.STRING,
      allowNull:true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users","resetPasswordToken")
  }
};
