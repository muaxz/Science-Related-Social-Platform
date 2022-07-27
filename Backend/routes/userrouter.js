const express=require("express");
const router=express.Router();
const Verifytoken=require("../controller/verifytoken");
const Usercontroller=require("../controller/Usercontroller");
const UploadMiddle = require("../controller/uploadMidleWare")


router.get("/getuserdata",Verifytoken,Usercontroller.getuserdata);//For context
router.get("/getuserprofile/:UserId",Verifytoken,Usercontroller.getuserprofile);//Profile page
router.get("/getusercount/:UserId",Usercontroller.getuserprofilecount);//Profile page
router.post("/reportUser",Verifytoken,Usercontroller.reportUser)
router.post("/createuserrelation",Verifytoken,Usercontroller.createuserrelation);
router.get("/getuserprofilecontent/:UserId/:ownerpost/:category/:order",Usercontroller.getuserprofilecontent);//profile page
router.get("/getusername/:input",Usercontroller.searchGetUser)//Search Bar
router.post("/deletepost",Usercontroller.deletepost)// draft page
router.get("/updateusernot/:FollowerId/:FollowedId/:currentactive",Usercontroller.updatenotification)//change it to POST REQUEST TODO
router.post("/updateprofile/:typeofupdate",Verifytoken,UploadMiddle,Usercontroller.updateprofile)
router.get("/getuserprofilefollowlist/:requestType/:UserId",Usercontroller.getuserprofilefollowlist)




module.exports=router;