const express=require("express");
const router=express.Router();
const Verifytoken=require("../controller/verifytoken");
const Usercontroller=require("../controller/Usercontroller");
const Uploadware = require("../controller/upload")



router.get("/getuserdata",Verifytoken,Usercontroller.getuserdata);//For context
router.get("/getuserprofile/:UserId",Usercontroller.getuserprofile);//Profile page
router.get("/getusercount/:UserId",Usercontroller.getuserprofilecount);//Profile page
router.post("/createuserrelation",Usercontroller.createuserrelation);
router.get("/getuserprofilecontent/:UserId/:ownerpost/:category/:order",Usercontroller.getuserprofilecontent);//profile page
router.get("/getusername/:input",Usercontroller.getusername)//Search Bar
router.get("/getuserdrafts/:UserId/:Order",Usercontroller.getuserdrafts);
router.post("/deletepost",Usercontroller.deletepost)// draft page
router.get("/updateusernot/:FollowerId/:FollowedId/:currentactive",Usercontroller.updatenotification)
router.post("/updateprofile",Uploadware,Usercontroller.updateprofile)

module.exports=router;