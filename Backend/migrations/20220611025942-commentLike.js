'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("comments","likeNumber",{
      type:Sequelize.TEXT,
      defaultValue:"[]"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("comments","likeNumber")
  }
};
