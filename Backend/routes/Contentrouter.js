const express=require("express");
const router=express.Router();
const controller=require("../controller/Contentcontroller");
const verify = require("../controller/verifytoken")

router.post("/produce",controller.produce);
router.post("/createrelation",controller.createrelation);
router.get("/:id",controller.getcontent);//getcontent for public content page
router.get("/gethome/:number/:category",controller.gethome);//public short demonstraiton of contents
router.get("/usercontent/:catagory/:id/:order",verify,controller.getusercontent)//contents user liked or saved
//router.delete("/delete/:id",controller.delete)
//router.post("/update/:id",controller.delete)

//user update
//editör update
module.exports=router;