const Sequlize=require("sequelize");

//...
const sequlize=new Sequlize("heroku_9a64dbd4cf1fbab","ba618bc640d60e","24a1e46f",{
    dialect:"mysql",
    host:"us-cdbr-east-06.cleardb.net",
    port:3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 60000
    }
})

sequlize.authenticate()
.then(()=>console.log("connected to data base..."))



module.exports=sequlize; 