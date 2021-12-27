module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn("users","imageurl",{
       type:Sequelize.TEXT,
       
    })
  },

  down: function(queryInterface,Sequelize){
    return queryInterface.changeColumn("users","imageurl",{
      type:Sequelize.STRING,
     
   })
  }
};

//CHANGING IMAGEURL COLUMN