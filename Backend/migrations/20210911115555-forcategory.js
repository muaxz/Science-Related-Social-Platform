'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("contents","catagories",{
      type:Sequelize.ENUM,
      values:["Felsefe","Uzay","Metafizik","Biyoloji"],
      allowNull:true,
     })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("contents","catagories",{
      type:Sequelize.ENUM,
      values:["Felsefe","Uzay","Metafizik","Biyoloji"],
      allowNull:true,
     })
  }
};
