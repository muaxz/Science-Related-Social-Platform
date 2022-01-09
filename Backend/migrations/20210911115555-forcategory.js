module.exports = {
  up: function(queryInterface, Sequelize) {
    return Promise.resolve()
  },

  down: function(queryInterface,Sequelize) {
    return queryInterface.removeColumn("comments","UserforUserID")
  }
};


