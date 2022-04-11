module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("contents","checked",{
      type:Sequelize.BOOLEAN,
      defaultValue:false,
    })
  },

  down: function(queryInterface) {
    return queryInterface.removeColumn("contents","checked")
  }
};

