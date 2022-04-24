const express=require("express");
const router=express.Router();
const controller=require("../controller/Contentcontroller");
const verify = require("../controller/verifytoken")
const csrfVerify = require("../controller/CsrfController")


router.post("/produce",verify,controller.produce);
router.post("/createrelation",csrfVerify,controller.createrelation);//get the whole content for public content page
router.get("/gethome/:number/:category",controller.gethome);//public short demonstraiton of contents
router.get("/usercontent/:catagory/:id/:order",verify,controller.getusercontent)//contents user liked or saved
router.get("/getReports",verify,controller.getReportedPosts)
router.post("/checkContent",csrfVerify,verify,controller.ContentChecking) // Editor STUFF
router.post("/deleteReport",csrfVerify,controller.reportDeletion)// EDITOR STUFF
router.get("/getModContents/:searchValue/:category",verify,controller.getAllContentsForModStuff)
router.get("/Post/:id",controller.getcontent);
router.post("/uploadContentImage",controller.uploadContentImage)
//router.delete("/delete/:id",controller.delete)
//router.post("/update/:id",controller.delete)

//user update
//editör update
module.exports=router;