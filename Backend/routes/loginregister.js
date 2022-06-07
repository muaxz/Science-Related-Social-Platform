const express=require("express");
const router=express.Router();
const VerifyToken = require("../controller/verifytoken")
const controller=require("../controller/Logincontroller");

router.post("/login",controller.login);
router.post("/register",controller.register);
router.get("/logout",VerifyToken,controller.logout);
router.post("/resetPassword",controller.resetPassword)


module.exports=router;