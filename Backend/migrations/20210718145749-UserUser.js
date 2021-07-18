const Notifymodule=require("../models/Notificationmodel");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("useruser","ActivateNotification",{
      type:Sequelize.STRING,
      get:function(){
          return JSON.parse(Notifymodule.getDataValue("ActivateNotification"))
      } ,
      set:function(value){
          return Notifymodule.setDataValue("ActivateNotification",JSON.stringify(value));
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("useruser","ActivateNotification")
  }
};
