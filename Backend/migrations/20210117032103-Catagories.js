module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("users","username",{
       type:Sequelize.STRING,
       allownull:false,
    })
  },

  down: function(queryInterface,Sequelize) {
    return queryInterface.removeColumn("users","username")
  }
};
