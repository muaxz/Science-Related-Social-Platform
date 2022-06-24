const express=require("express");
const router=express.Router();
const controller=require("../controller/commentcontroller");
const verifyUser = require("../controller/verifytoken")


router.post("/produce",verifyUser,controller.produce);
router.get("/:id/:Last/:order/:isforanswer",controller.getcomments);
router.get("/getLastComment",controller.getLastComment)
router.post("/produceanswer",verifyUser,controller.porduceanswer);
router.post("/EditComment",verifyUser,controller.editcomment)
router.post("/handleLike",verifyUser,controller.createLikeRelation)

module.exports=router;