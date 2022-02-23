module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("users","ReportSum",{
      type:Sequelize.INTEGER,
    })
  },

  down: function(queryInterface) {
    return queryInterface.removeColumn("users","ReportSum")
  }
};

