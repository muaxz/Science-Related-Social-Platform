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
                console.log(req.body)
                console.log(req.files)
                /*
                const {width,height,x,y} = req.params
                // uploadB , uploadP 
                        var counter = 0 ;
                        var fileURL = {}
                        req.files.upload.forEach(fileobj => {

                                
                                sharp(fileobj.data).resize({height:300,width:400}).extract({
                                    width:parseInt(width),height:parseInt(height),left:parseInt(x),top:parseInt(y)
                                }).toFormat("png").toBuffer({resolveWithObject:true}).then(({data,info})=>{
                            
                                console.log(info)
                                const blob = firebase.bucket.file(fileobj.name)
                                
                                const blobwriter = blob.createWriteStream({
                                    metadata:{
                                        contentType:"image/"+info.format
                                    }
                                })
                
                                blobwriter.on("error",(err)=>{
                                    console.log(err)
                                })
                
                                blobwriter.on("finish",(data)=>{

                                    counter++

                                    
                                    blob.getSignedUrl({action:"read",expires:"03-09-2391"}).then((geturl)=>{
                                        fileURL[count] = geturl[0]
                                        if(counter == 1){
                                            req.fileurls = fileURL
                                        }
                                    })
                                    
                                    
                                })
                
                                blobwriter.end(data)
                    
                                        
                            }).catch((err)=>console.log(err)) 
                        
                        });
                        */
}