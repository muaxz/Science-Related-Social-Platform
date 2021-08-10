const express=require("express");
const router=express.Router();
const controller=require("../controller/notification");


router.get("/getrows/:UserId/:Order",controller.getrows);
router.get("/getcount/:UserId",controller.getcount);
router.get("/update",controller.Updatecount);



module.exports=router;