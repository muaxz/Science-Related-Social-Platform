module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn("users","imageurl",{
       type:Sequelize.TEXT,
       allownull:true,
    })
  },

  down: function(queryInterface){
    return queryInterface.changeColumn("users","imageurl",{
      type:Sequelize.STRING,
      allownull:true,
   })
  }
};

//CHANGING IMAGEURL COLUMN