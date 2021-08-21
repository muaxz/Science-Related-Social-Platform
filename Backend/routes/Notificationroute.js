const express=require("express");
const router=express.Router();
const controller=require("../controller/notification");


router.get("/getrows/:UserId/:Order/:last",controller.getrows);
router.get("/getcount/:UserId",controller.getcount);
router.get("/update/:UserId",controller.Updatecount);



module.exports=router;