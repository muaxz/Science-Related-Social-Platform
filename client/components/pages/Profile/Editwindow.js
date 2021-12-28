import { CameraAlt } from '@material-ui/icons'
import React, { useState,useEffect} from 'react'
import styled from "styled-components"
import {ArrowDropUp,Email,Lock,Notifications} from "@material-ui/icons"
import {Black,Porfileimage} from "../../styledcomponents/button"
import {TextField,Button} from "@material-ui/core"
import Cropper from  "react-image-crop"
import axios from 'axios'
import "react-image-crop/dist/ReactCrop.css"

const Exterior = styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
transform:translateX(-50%);
left:50%;
top:${({getcropper})=>getcropper ? "150px" : "70px"};;
max-width:600px;
width:90%;
height:${({getcropper})=>getcropper ? "350px" : "580px"};
background-color:white;
border-radius:10px;
z-index:1000;
overflow:${({getcropper})=>getcropper ? "visible" : "auto"};;
`
const Inner = styled.div`
position:relative;
padding:10px;
`

const Holderforupicon = styled.div`
position:absolute;
transition-duration:0.5s;
top:-45px;
left:${({slipvalue})=>{
    if(slipvalue == 1){
        return "55px"
    }else if(slipvalue == 2){
        return "250px"
    }else{
        return "440px"
    }
}};
`

const Background = styled.div`
display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
width:100%;
border-top-left-radius:10px;
border-top-right-radius:10px;
height:200px;
opacity:0.8;
background-image:url(${({ImageforBack})=>ImageforBack});
background-size:cover;
background-repeat: no-repeat;
background-position:center; 
transition:0.4s;
&:hover{
    opacity:1;
}
`

const ProfileImageholder=styled.div`
position:absolute;
top:160px;
opacity:0.8;
left:30px;
transition:0.4s;
&:hover{
    opacity:1;
}
`
const Inputholder = styled.div`
display:${({displayed})=> displayed ? "block" : "none"};
margin-top:20px;
`
const Information = styled.div`
position:relative;
padding-top:${({isforedit})=>isforedit ? "10px" : "80px"};
background-color:${({isforedit})=>isforedit ? "#e9ecef" : "white"};
padding-left:20px;
padding-right:20px; 
padding-bottom:20px;
border-radius:20px;
`

const Labelimage=styled.label`
position:absolute;
width:100%;
height:200px;
display:block;
padding:6px;
padding-left:45px;
background-color:white;
cursor:pointer;
color:black;
opacity:0;
`
//selection bar for editing
const Selectionbar = styled.div`
display:flex;
justify-content:space-around;
height:30px;
margin-bottom:40px;
`

const Childsofselection = styled.div`
background-color:${({innercolor})=>innercolor ? "#7de2d1" : "#ff0a54"};
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:38px;
height:38px;
cursor:pointer;
transition-duration:0.18s;
padding:5px;
&:hover{
    background-color:
}
`

//email,password,notification
export default function Editwindow({isWindowforedit,updatefunc,active,editdata,closefunc}){

    console.log(editdata)
    const [file,setfile] = useState({
        Backimage:"",
        Profileimage:""
    })
    const [crop,setcrop] = useState({aspect:16/16,height:200,width:100,x:50,y:50})
    const [src,setsrc] = useState({
        Backimage:"",
        Profileimage:""
    })
    const [imagetype,setimagetype] = useState("")
    const [image,setimage] = useState(null)
    const [result,setresult] = useState({
        Backimage:{
            src:"",
            cropvalues:{
                width:"",
                height:"",
                x:"",
                y:""
            }
        },
        Profileimage:{
            src:"",
            cropvalues:{
                width:"",
                height:"",
                x:"",
                y:""
            }
        }
    })
    const [iscropperactive,setcropperactive] = useState(false)
    const [userinfo,setuserinfo] = useState({
        musername:{
            activate:isWindowforedit ? false : true,
            value:editdata.username,
            label:"Kullanici Adi",
            warning:false,
            multiline:false,
            msg:""
        },
        firstname:{
            activate:isWindowforedit ? false : true,
            value:editdata.firstname,
            label:"Ad",
            warning:false,
            multiline:false,
            msg:""
        },
        surname:{
            activate:isWindowforedit ? false : true,
            value:editdata.lastname,
            label:"Soyad",
            warning:false,
            multiline:false,
            msg:""
        },
        personaltext:{
            activate:isWindowforedit ? false : true,
            value:editdata.Personaltext,
            label:"Kisisel Bilgiler",
            warning:false,
            multiline:true,
            msg:""
        },
        email:{
            activate:isWindowforedit ? true : false,
            value:editdata.email,
            label:"E-Posta",
            warning:false,
            multiline:false,
            msg:"E-postani degistirmek istersen, yeni girdigin adrese bir kod gonderilicek lutfen onu gir."
        },
      
    })
    const [selectionchilds,setselectionchilds] = useState({
        Email:true,
        Password:false,
        Notification:false
    })
    const [selected,setselected] = useState(1)

    useEffect(()=>{

        const copy = {...userinfo}
      
        for (const key in copy){
            copy[key].activate = isWindowforedit ? false : true
            if(copy[key].label == "E-Posta"){
                    copy[key].activate = isWindowforedit ? true : false
            }
        }

        setuserinfo(copy)
      
    },[isWindowforedit])

    useEffect(()=>{
        setcropperactive(false)
    },[active])
    /*
    useEffect(()=>{

       if(src.Backimage !== ""){
           console.log("heyyo")
            const backimg = document.querySelector("#Backimg")
            backimg.addEventListener("load",()=>{
                setimage(backimg)
                console.log(backimg)
            })
       }    

    },[src])
    */

    const ToCanvas = async ()=>{
       
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext("2d");

        
    
        ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
        );
        
        const base64Image = canvas.toDataURL("imge/png")

        setresult((prev)=>{
            return {...prev,[imagetype]:{src:base64Image,cropvalues:{x:crop.x,y:crop.y,width:crop.width,height:crop.height}}}
        })

        setcropperactive(false)
        
    }

    const Inputhandler = (key,event)=>{

        const mutated = {...userinfo}
        mutated[key].value=event.target.value
        setuserinfo(mutated)
    }

    const Updatefile = (event,type)=>{

        if(type == "Backimage"){
            setcrop({
                aspect:16/9,
                height:200,
                width:300,
                unit:"px",
                x:0,
                y:50
            })
        }
        else{
            setcrop({
                aspect:16/16,
                height:200,
                width:200,
                unit:"px",
                x:50,
                y:50
            })
        }
        
        setimagetype(type)
        setcropperactive(true)
        setsrc((prev)=>{
            return {...prev,[type]:URL.createObjectURL(event.target.files[0])}
        })
        setfile((prev)=>{
            return {...prev,[type]:event.target.files[0]}
        })

      
    }

    const updatecrop = (newcrop)=>{
        //buraya bak
        if(crop.aspect > 1){
            setcrop((res)=>{
                return {...res,y:newcrop.y}
            })
        }
        else{
            setcrop((res)=>{
                return {...res,y:newcrop.y,x:newcrop.x}
            })
        }
        console.log(crop)

        //value of cropper width height x and y
    }

    const Sendupdates = async ()=>{

        const values = {}
        for (const key in userinfo){
            values[key] = userinfo[key].value
        }

        values.backcrop = result.Backimage.cropvalues
        values.profile  = result.Profileimage.cropvalues

        const formData=new FormData();

        if(file.Backimage !== "" && file.Profileimage !== ""){

            formData.append("upload",file.Backimage);
            formData.append("upload2",file.Profileimage)
            
        }
        else{
            
            formData.append("upload",file[imagetype])
        }

        formData.append("Profilevalues",JSON.stringify(values))
        
     

        try{

            await axios.post(`user/updateprofile`,formData,{withCredentials:true});
   
         }catch(err){
   
            return console.log("UPLOAD ERRORRRRRRR");
            
         }

    }

    const Selectionhandler=(keyname,index)=>{
        const copy = {...selectionchilds}
        for (const key in copy) {
           copy[key] = false
        }
        copy[keyname] = true
        setselected(index+1)
        setselectionchilds(copy)
    }

    const Iconcreater =(keyname)=>{
        if(keyname == "Email")
        return <Email></Email>
        if(keyname == "Password")
        return <Lock></Lock>
        if(keyname == "Notification")
        return <Notifications></Notifications>
    }

    return (
        <div>
            <Black onClick={closefunc} aktif={active}/>
            <img style={{visibility:"hidden",position:"absolute"}} id="Backimg" src={src["Backimage"]}></img>
            <img style={{visibility:"hidden",position:"absolute"}} id="Profileimg" src={src["Profileimage"]}></img>
            <Exterior getcropper={iscropperactive} active={active}>
                <Inner>
                    {
                        isWindowforedit &&
                        (<Selectionbar>
                            {
                                Object.keys(selectionchilds).map((item,index)=>{
                                    return (<Childsofselection innercolor={selectionchilds[item]} style={{color:selectionchilds[item] ? "white" : "white"}} onClick={()=>Selectionhandler(item,index)}>{Iconcreater(item)}</Childsofselection>)
                                })
                            }
                        </Selectionbar>)
                    }
                    {
                        iscropperactive 
                        
                        ? 
                            <div style={{textAlign:"center"}}>
                                <Cropper  onImageLoaded={(img)=>setimage(img)} style={{backgroundColor:"red",height:"350px",width:"300px"}}  imageStyle={{height:"350px",width:"300px",objectFit:"cover"}}  src={src[imagetype]} crop={crop} onChange={(newcrop)=>updatecrop(newcrop)}/> 
                                <div style={{textAlign:"center"}}>
                                 <Button onClick={()=>ToCanvas()} color="secondary" variant="contained" >Upload the file to server</Button>
                                </div>
                            </div>
                        
                        :

                             (<> 
                                    { !isWindowforedit &&  

                                        (<>
                                            <Background ImageforBack={src.Backimage}>
                                                <div style={{position:"absolute",top:"225px",right:"10px",zIndex:"1000"}}>
                                                    <Button onClick={()=>Sendupdates()} style={{textTransform:"capitalize",borderRadius:"25px"}} color="secondary" variant="contained">Kaydet</Button>
                                                </div>
                                                <Labelimage  htmlFor="file"></Labelimage>
                                                <CameraAlt style={{color:"white"}}></CameraAlt>
                                                <input onChange={(e)=>Updatefile(e,"Backimage")} name="upload" accept="image/png, image/gif, image/jpeg" id="file" type="file" style={{display:"none"}}></input>
                                            </Background>
                                            <ProfileImageholder>
                                                <Porfileimage style={{display:"flex",justifyContent:"center",alignItems:"center"}} width="80px" height="80px" profile={src.Profileimage}>
                                                    <Labelimage htmlFor="file2"></Labelimage>
                                                    <CameraAlt style={{color:"white"}}></CameraAlt>
                                                    <input onChange={(e)=>Updatefile(e,"Profileimage")} accept="image/png, image/gif, image/jpeg" id="file2" type="file" style={{display:"none"}}></input>
                                                </Porfileimage>
                                            </ProfileImageholder>
                                        </>)

                                    }
                                  
                                <Information isforedit={isWindowforedit}>
                                    {
                                        isWindowforedit &&
                                        <Holderforupicon slipvalue={selected}>
                                           <ArrowDropUp style={{fontSize:"80px",color:"#e9ecef"}}></ArrowDropUp>
                                        </Holderforupicon>
                                    }
                                   
                                    {
                                        Object.keys(userinfo).map((item,index)=>{

                                            return (<Inputholder displayed={userinfo[item].activate}>
                                                        <TextField   
                                                            multiline={userinfo[item].multiline}
                                                            rows={4}
                                                            onChange={(e)=>Inputhandler(item,e)}
                                                            style={{width:"100%"}}
                                                            label={userinfo[item].label}
                                                            variant="outlined"
                                                            value={userinfo[item].value}
                                                            helperText={userinfo[item].msg}
                                                        ></TextField>
                                                </Inputholder>)
                                        })
                                    }
                                </Information>
                        </>)
                    }
                </Inner>
            </Exterior>
        </div>
    )
}
