const express=require("express");
const router=express.Router();
const Verifytoken=require("../controller/verifytoken");
const Usercontroller=require("../controller/Usercontroller");



router.get("/getuserdata",Verifytoken,Usercontroller.getuserdata);

module.exports=router;