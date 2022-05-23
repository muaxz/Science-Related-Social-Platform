const express=require("express");
const router=express.Router();
const controller=require("../controller/Contentcontroller");
const verifyUser = require("../controller/verifytoken")
const csrfverifyUser = require("../controller/CsrfController")


router.post("/produce",verifyUser,controller.produce);
router.post("/createrelation",csrfverifyUser,controller.createrelation);//get the whole content for public content page
router.get("/gethome/:number/:category",controller.gethome);//public short demonstraiton of contents
router.get("/usercontent/:catagory/:id/:order",verifyUser,controller.getusercontent)//contents user liked or saved
router.get("/getReports",verifyUser,controller.getReportedPosts)
router.post("/checkContent",csrfverifyUser,verifyUser,controller.ContentChecking) // Editor STUFF
router.post("/deleteReport",verifyUser,controller.reportDeletion)// EDITOR STUFF
router.get("/getModContents/:searchValue/:category",verifyUser,controller.getAllContentsForModStuff)
router.get("/Post/:id",controller.getcontent);
router.post("/uploadContentImage",controller.uploadContentImage)
//router.delete("/delete/:id",controller.delete)
//router.post("/update/:id",controller.delete)

//user update
//editör update
module.exports=router;