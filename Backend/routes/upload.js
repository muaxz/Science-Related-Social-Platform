const express=require("express");
const router=express.Router();
const controller=require("../controller/upload");


router.post("/:width/:height/:x/:y",controller.upload);

module.exports=router;