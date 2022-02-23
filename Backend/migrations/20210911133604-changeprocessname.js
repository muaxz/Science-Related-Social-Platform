module.exports = {
  up: (queryInterface,Sequelize) => {
     return queryInterface.createTable('Report', {
              id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ReportMessage:{
                type:Sequelize.STRING,
            },
            ReportCheckBox:{
                type:Sequelize.INTEGER,
            },
            ContentId:{
                type:Sequelize.INTEGER,
            },
            UserId:{
              type:Sequelize.UUID,
            }
          })}
  ,
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Report');
  }
}
 