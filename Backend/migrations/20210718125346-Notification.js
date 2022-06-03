module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("contents","Alias",{
      type:Sequelize.STRING,
      allowNull:true
    })
  },

  down: function(queryInterface) {
    return queryInterface.removeColumn("contents","Alias")
  }
};


//CHANGING IMAGEURL COLUMN