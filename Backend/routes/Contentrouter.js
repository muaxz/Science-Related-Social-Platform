const express=require("express");
const router=express.Router();
const controller=require("../controller/Contentcontroller");
const verify = require("../controller/verifytoken")

router.post("/produce",controller.produce);
router.post("/createrelation",controller.createrelation);//get the whole content for public content page
router.get("/gethome/:number/:category",controller.gethome);//public short demonstraiton of contents
router.get("/usercontent/:catagory/:id/:order",verify,controller.getusercontent)//contents user liked or saved
router.get("/getReports",verify,controller.getReportedPosts)
router.post("/checkContent",verify,controller.ContentChecking) // Editor STUFF
router.post("/deleteReport",controller.reportDeletion)// EDITOR STUFF
router.get("/getModContents/:searchValue/:category",verify,controller.getAllContentsForModStuff)
router.get("/Post/:id",controller.getcontent);
//router.delete("/delete/:id",controller.delete)
//router.post("/update/:id",controller.delete)

//user update
//editör update
module.exports=router;