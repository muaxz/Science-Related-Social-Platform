'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.changeColumn("contents","process",{
      type:Sequelize.ENUM,
      values:["Waiting","Published","NotAllowed","Draft"],
      allowNull:true,
     })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("contents","process",{
      type:Sequelize.ENUM,
      values:["Waiting","Published","NotAllowed","checked"],
      allowNull:true,
     })
  }
};
