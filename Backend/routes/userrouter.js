const express=require("express");
const router=express.Router();
const Verifytoken=require("../controller/verifytoken");
const Usercontroller=require("../controller/Usercontroller");



router.get("/getuserdata",Verifytoken,Usercontroller.getuserdata);
router.get("/getuserprofile/:UserId",Usercontroller.getuserprofile);
router.get("/getusercount/:UserId",Usercontroller.getusercount);
router.post("/createuserrelation",Usercontroller.createuserrelation);

module.exports=router;