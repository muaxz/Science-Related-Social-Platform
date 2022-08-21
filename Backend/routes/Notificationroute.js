const express=require("express");
const router=express.Router();
const controller=require("../controller/notification");
const verifyToken = require("../controller/verifytoken")


router.get("/getrows/:UserId/:Order/:last",verifyToken,controller.getrows);
router.get("/getcount/:UserId",verifyToken,controller.getcount);
router.get("/update/:UserId",verifyToken,controller.Updatecount);
//Mod Stuff
router.post("/sendMessage",verifyToken,controller.sendReportMessage)



module.exports=router;