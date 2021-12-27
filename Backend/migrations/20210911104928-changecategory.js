module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn("users","backgroundtoken",{
       type:Sequelize.TEXT,
      
    })
  },

  down: function(queryInterface,Sequelize){
    return queryInterface.changeColumn("users","backgroundtoken",{
      type:Sequelize.STRING,
    
   })
  }
};
