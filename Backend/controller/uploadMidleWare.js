const multer=require("multer");
const path=require("path");
const firebase = require("../firebase/firebase")
const {v4} = require("uuid")
const sharp = require("sharp")

/*
const storage=multer.diskStorage({
    destination:path.join(__dirname,"/../../client/public"),
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const getupload=multer({
    storage:storage
}).single("upload");

*/

//this middle-ware is for user editing

module.exports=(req,res,next)=>{
                next();
   
                /*
                const userprofile = JSON.parse(req.body.Profilevalues)
                console.log(userprofile)
                const {typeofupdate} = req.params
                console.log(typeofupdate)
                var Allowupload = false
                if(typeofupdate == "Profile")
                Allowupload = true
                else
                return next()
                

            
                if(Allowupload){

                            const userprofile = JSON.parse(req.body.Profilevalues)
                            console.log(userprofile)
                            console.log(req.files)
                            var fileURLs = {}
                            var whichfile = ""
                            var numberoffiles = 0

                            if(userprofile["backcrop"].width == "" && userprofile["profile"].width  == ""){
            
                                whichfile = ""
                                fileURLs["0"] = {
                                    type:"NoFile"
                                }

                                req.urlconfig = fileURLs
            
                            }else if(userprofile["backcrop"].width == ""){
                                numberoffiles = 1
                                whichfile = "Profile"
                                req.files["upload"].cordinates = userprofile.profile
            
                            }else if(userprofile["profile"].width == ""){
                                
                                numberoffiles = 1
                                whichfile = "Background"
                                req.files["upload"].cordinates = userprofile.backcrop
            
                            }
                            else{
                                
                                numberoffiles = 2
                                whichfile = "Back&Profile"
                                req.files["upload"].cordinates = userprofile.backcrop
                                req.files["upload2"].cordinates = userprofile.profile
            
                            }
                        
                            console.log(numberoffiles)
                            // uploadB , uploadP 
                                var counter = 0
                                
                                    if(numberoffiles > 0){
                                            console.log(numberoffiles)
                                            for (const key in req.files) {
                                            
                                                sharp(req.files[key].data).resize({height:350,width:300}).extract({
                                                    width:req.files[key].cordinates.width,height:req.files[key].cordinates.height,left:req.files[key].cordinates.x,top:req.files[key].cordinates.x
                                                }).toFormat("png").toBuffer({resolveWithObject:true}).then(({data,info})=>{
                                            
                                                
                                                const blob = firebase.bucket.file(req.files[key].name)
                                                const generatedToken = v4()
                                                console.log(generatedToken)
                                                const blobwriter = blob.createWriteStream({
                                                    metadata:{
                                                        contentType:"image/"+info.format,
                                                        metadata:{
                                                            firebaseStorageDownloadTokens: generatedToken //generating uniqe token
                                                        }
                                                    
                                                    }
                                                })
                                
                                                blobwriter.on("error",(err)=>{
                                                    console.log(err)
                                                })
                                
                                                blobwriter.on("finish",(data)=>{
            
                                                    fileURLs[counter] = {
                                                        token : generatedToken,
                                                        filename : req.files[key].name,
                                                        type: whichfile
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
            
                                    }else{

                                        return next()
                                        
                                    }
                }
                */
                     
}