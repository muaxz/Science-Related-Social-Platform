const express=require("express");
const router=express.Router();
const controller=require("../controller/upload");


router.post("/",controller.upload);

module.exports=router;