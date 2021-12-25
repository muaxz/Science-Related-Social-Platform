const multer=require("multer");
const path=require("path");
const firebase = require("../firebase/firebase")
const {v4} = require("uuid")
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


module.exports=(req,res,next)=>{

            
                const userprofile = JSON.parse(req.body.Profilevalues)
                
                var numberoffiles = 0
                if(userprofile["backcrop"].width == "" && req.files["profile"].width == ""){

                    numberoffiles = 0

                }else if(userprofile["backcrop"].width == ""){

                    numberoffiles = 1
                    req.files["upload"].cordinates = userprofile.profile

                }else if(userprofile["profile"].width == ""){

                    numberoffiles = 1
                    req.files["upload"].cordinates = userprofile.backcrop

                }
                else{

                    numberoffiles = 2
                    req.files["upload"].cordinates = userprofile.backcrop
                    req.files["upload2"].cordinates = userprofile.profile

                }
              
            
                // uploadB , uploadP 
                       var counter = 0
                       fileURLs = {}
                        console.log(req.files)
                        if(numberoffiles > 0){
                            
                                for (const key in req.files) {
                                  
                                    sharp(req.files[key].data).resize({height:350,width:300}).extract({
                                        width:req.files[key].cordinates.width,height:req.files[key].cordinates.height,left:req.files[key].cordinates.x,top:req.files[key].cordinates.x
                                    }).toFormat("png").toBuffer({resolveWithObject:true}).then(({data,info})=>{
                                
                                      
                                    const blob = firebase.bucket.file(req.files[key].name)
                                    const generatedToken = v4()
                                    const blobwriter = blob.createWriteStream({
                                        metadata:{
                                            contentType:"image/"+info.format,
                                            firebaseStorageDownloadTokens: generatedToken
                                        }
                                    })
                    
                                    blobwriter.on("error",(err)=>{
                                        console.log(err)
                                    })
                    
                                    blobwriter.on("finish",(data)=>{

                                        fileURLs[counter] = {
                                            token : generatedToken,
                                            filename : req.files[key].name
                                        }

                                      
                                        counter++
                                        if(counter == numberoffiles){
                                            req.urlconfig = fileURLs
                                            next()
                                        }

                                        
                                    })
                    
                                    blobwriter.end(data)
                        
                                            
                                }).catch((err)=>console.log(err)) 
                            }

                        }
                        
                   

                             
}