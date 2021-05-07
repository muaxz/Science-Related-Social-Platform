const multer=require("multer");
const path=require("path");


const storage=multer.diskStorage({
    destination:"../client/public",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const getupload=multer({
    storage:storage
}).single("upload");

exports.upload=(req,res,next)=>{
    
    console.log(req.files);
    getupload(req,res,err=>{
         if(err){

           next();
           return;
           console.log(err);
        }
        else{
           
           res.json({state:"success"})         
        }
    })
    
}