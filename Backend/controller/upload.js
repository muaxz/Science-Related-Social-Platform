const multer=require("multer");
const path=require("path");
const firebase = require("../firebase/firebase")


const storage=multer.diskStorage({
    destination:path.join(__dirname,"/../../client/public"),
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const getupload=multer({
    storage:storage
}).single("upload");

exports.upload=(req,res,next)=>{
     
           const blob = firebase.bucket.file(req.files.upload.name)
           
           const blobwriter = blob.createWriteStream({
               metadata:{
                   contentType:req.files.upload.mimetype
               }
           })

            blobwriter.on("error",(err)=>{
                console.log(err)
            })
            blobwriter.on("finish",()=>{
                console.log("file uploaded")
            })
            blobwriter.end(req.files.upload.data)

           res.json({state:"success"})         
}