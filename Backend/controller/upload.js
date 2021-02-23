const multer=require("multer");
const path=require("path");
const storage=multer.diskStorage({
    destination:"../../client/public",
    filename:function(req,file,cb){
        cb(null,file.fieldname+
        "-"+Date.now()
        +path.extname(file.originalname));
    }
})

const upload=multer({
    storage:storage
})

exports.upload=(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
           res.json({state:err})
        }
        else{
           res.json({state:success}) 
        }
    })
}