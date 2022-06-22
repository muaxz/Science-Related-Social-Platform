const sharp = require("sharp")
const firebase = require("../firebase/firebase")
const {v4} = require("uuid")

module.exports = (file,cropValues,key)=>{
    
        if(file.size/1024 < 3000){

            return new Promise(async(resolve)=>{

                const {data,info} = await sharp(file.data).resize({width:600,height:cropValues.naturalHeight}).extract({
                    left:Math.round(cropValues.x),top:Math.round(cropValues.y),width:cropValues.width,height:cropValues.height
                }).toFormat("png").toBuffer({resolveWithObject:true})

                const generatedTokenForName = v4()
                const blob = firebase.bucket.file(generatedTokenForName)
                const generatedToken = v4()
            
                const blobwriter = blob.createWriteStream({
                        metadata:{
                                contentType:"image/png",
                                metadata:{
                                    firebaseStorageDownloadTokens: generatedToken //generating uniqe token
                                    
                                },
                                        
                        }
                })
                    
                blobwriter.on("error",(err)=>{
                        console.log(err)
                })
                    
                blobwriter.on("finish",(data)=>{
                    resolve({uploaded:true,url:`https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${generatedTokenForName}?alt=media&token=${generatedToken}`,state:"success",key:key})
                })

                blobwriter.end(data)
            })


        }else{
            
            return  {uploaded:false,url:"ERROR",state:"Big"}

        }
}