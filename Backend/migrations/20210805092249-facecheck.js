module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("users","imagetoken",{
       type:Sequelize.STRING,
       
    })
  },

  down: function(queryInterface,Sequelize){
    return queryInterface.removeColumn("users","imagetoken",{
      type:Sequelize.STRING,
    
   })
  }
};

