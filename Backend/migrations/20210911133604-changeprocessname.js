'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.renameColumn("contents","process","phase")
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.renameColumn("contents","process","process")
  }
};
