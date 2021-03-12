const express=require("express");
const router=express.Router();
const controller=require("../controller/Contentcontroller");

router.post("/produce",controller.produce);
router.post("/createrelation",controller.createrelation);
router.get("/:id",controller.getcontent);
router.get("/gethome/:number",controller.gethome);
//router.delete("/delete/:id",controller.delete)
//router.post("/update/:id",controller.delete)

//user update
//editör update
module.exports=router;