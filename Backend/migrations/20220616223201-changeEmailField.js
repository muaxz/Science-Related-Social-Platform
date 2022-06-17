'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.changeColumn("users","email",{
        type:Sequelize.STRING,
        allownull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
     })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("users","email",{
      type:Sequelize.STRING,
      allownull:false,
   })
  }
};
