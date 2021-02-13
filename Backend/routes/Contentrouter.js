const express=require("express");
const router=express.Router();
const controller=require("../controller/Contentcontroller");

router.post("/produce",controller.produce);
router.delete("/delete/:id",controller.delete)
router.post("/update/:id",controller.delete)

//user update
//editör update
module.exports=router;