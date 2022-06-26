const Sequlize=require("sequelize");

//...
const sequlize=new Sequlize("node-app","root","2231223122aA",{
    dialect:"mysql",
    host:"localhost",
    port:3306
})

sequlize.authenticate()
.then(()=>console.log("connected to data base..."))



module.exports=sequlize; 