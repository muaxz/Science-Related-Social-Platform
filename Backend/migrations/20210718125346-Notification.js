module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("notifications","TakerId",{
          type:Sequelize.STRING,
          get:function(){ 
              return  this.getDataValue("TakerId").split("-");
          },
          set:function(value){
              return this.setDataValue("TakerId",value.join("-"));
          }
        })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Notification","TakerId",{
      type:Sequlize.INTEGER,
    })
  }
};
