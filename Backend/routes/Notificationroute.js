const express=require("express");
const router=express.Router();
const controller=require("../controller/notification");


router.get("/getrows/:UserId",controller.getrows);


module.exports=router;