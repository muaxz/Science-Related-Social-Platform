const express=require("express");
const router=express.Router();
const uploadcontroller = require("../controller/uploadMidleWare")

router.post("/",uploadcontroller)


module.exports=router;