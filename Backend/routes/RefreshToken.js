const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/refresh",(req,res,next)=>{
    const {refreshToken} = req.body;

    jwt.verify(refreshToken,"refresh-accessToken-key",(err,userData)=>{

        if(err){

            return res.json({error:"Unauthroized",state:401})

        }
        else{

            jwt.sign(userData,"secretkey",(err,accessToken)=>{

                res.cookie("accessToken",accessToken,{httpOnly:true,path:"/",secure:true})

                return res.json({state:"success"})

            })

        }

    })
})

module.exports = router;