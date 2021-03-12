const multer=require("multer");
const path=require("path");


const storage=multer.diskStorage({
    destination:"../client/public",
    filename:function(req,file,cb){
        cb(null,file.fieldname+
        "-"+Date.now()
        +path.extname(file.originalname));
    }
})

const getupload=multer({
    storage:storage
}).single("upload");

exports.upload=(req,res)=>{
    
    console.log("in here ---uploadd");
    getupload(req,res,err=>{
         if(err){
           res.json({state:err})
        }
        else{
           res.json({state:"success"}) 
        }
    })
    
}