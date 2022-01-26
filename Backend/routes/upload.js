const express=require("express");
const router=express.Router();
const uploadcontroller = require("../controller/upload")

router.post("/",uploadcontroller)


module.exports=router;