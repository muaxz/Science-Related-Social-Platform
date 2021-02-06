module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("users","firstname","name")
  },
  
  down: async (queryInterface, Sequelize) => {
     return queryInterface.renameColumn("users","name","firstname")
  }

};
