const express=require("express");
const router=express.Router();
const Verifytoken=require("../controller/verifytoken");
const Usercontroller=require("../controller/Usercontroller");



router.get("/getuserdata",Verifytoken,Usercontroller.getuserdata);
router.get("/getuserprofile/:UserId",Usercontroller.getuserprofile);
router.get("/getusercount/:UserId",Usercontroller.getuserprofilecount);
router.post("/createuserrelation",Usercontroller.createuserrelation);
router.get("/getuserprofilecontent/:UserId/:ownerpost/:category/:order",Usercontroller.getuserprofilecontent);
router.get("/getusername/:input",Usercontroller.getusername)

module.exports=router;