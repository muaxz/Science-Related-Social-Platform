const multer=require("multer");
const path=require("path");
const firebase = require("../firebase/firebase")
const sharp = require("sharp")


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
            
            const {width,height,x,y} = req.params

            sharp(req.files.upload.data).resize(200,300).extract({
                width:parseInt(width),height:parseInt(height),left:parseInt(x),top:parseInt(y)
            }).toFormat("jpeg").toBuffer({resolveWithObject:true}).then(({data,info})=>{
            
                console.log(info)
                const blob = firebase.bucket.file(req.files.upload.name)
           
                const blobwriter = blob.createWriteStream({
                    metadata:{
                        contentType:"image/"+info.format
                    }
                })
     
                 blobwriter.on("error",(err)=>{
                     console.log(err)
                 })
                 blobwriter.on("finish",()=>{
                     console.log("file uploaded")
                 })
                 blobwriter.end(data)
     
                res.json({state:"success"}) 
                        
            }).catch((err)=>console.log(err)) 

            
}