'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("users","backgroundurl",{
       type:Sequelize.TEXT,
    })
  },

  down: function(queryInterface) {
    return queryInterface.removeColumn("users","backgroundurl")
  }
};

