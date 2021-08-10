'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("notifications","Facecheck",{
      type:Sequelize.BOOLEAN,
      defaultValue:false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("notifications","Facecheck")
  }
};
