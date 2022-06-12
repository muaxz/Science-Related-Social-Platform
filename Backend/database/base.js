const Sequlize=require("sequelize");


const sequlize=new Sequlize("node-app","root","2231223122aA",{
    dialect:"mysql",
    host:"localhost",
})

sequlize.authenticate()
.then(()=>console.log("connected to data base..."))



module.exports=sequlize; 