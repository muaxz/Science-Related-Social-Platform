const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/refresh",(req,res,next)=>{

    const refreshToken = req.cookies["refreshToken"];
    console.log(refreshToken)
    jwt.verify(refreshToken,"refresh-accessToken-key",(err,userData)=>{

        if(err){

            return res.json({error:"Unauthroized",state:401})

        }
        else{

            jwt.sign(userData,"AccessToken-SecretKey",{expiresIn:"1h"},(err,accessToken)=>{
                
                res.cookie("accessToken",accessToken,{httpOnly:true,path:"/",secure:true})
                console.log("----In refresh token field")
                return res.json({state:"success",newtoken:accessToken})

            })

        }

    })
})

module.exports = router;