const express=require("express");
const router=express.Router();
const controller=require("../controller/commentcontroller");


router.post("/produce",controller.produce);
router.get("/:id",controller.getcomments);

module.exports=router;