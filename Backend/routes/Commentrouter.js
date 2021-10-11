const express=require("express");
const router=express.Router();
const controller=require("../controller/commentcontroller");


router.post("/produce",controller.produce);
router.get("/:id/:Last/:order",controller.getcomments);
router.post("/produceanswer",controller.porduceanswer);

module.exports=router;