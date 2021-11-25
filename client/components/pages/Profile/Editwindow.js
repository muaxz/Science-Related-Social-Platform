import { CameraAlt } from '@material-ui/icons'
import React, { useState,useEffect} from 'react'
import styled from "styled-components"
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
background-image:url(/led.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
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
margin-top:20px;
`
const Information = styled.div`
padding-top:80px;
padding-left:20px;
padding-right:20px; 
padding-bottom:20px;
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

export default function Editwindow({active,editdata,closefunc}){


    const [file,setfile] = useState(null)
    const [crop,setcrop] = useState({aspect:16/16})
    const [src,setsrc] = useState(null)
    const [image,setimage] = useState(null)
    const [iscropperactive,setcropperactive] = useState(false)
    const [filename,setfilename] = useState(null)
    const [userinfo,setuserinfo] = useState({
        username:{
            value:editdata.username,
            label:"Kullanici Adi",
            warning:false,
            multiline:false
        },
        firstname:{
            value:editdata.firstname,
            label:"Ad",
            warning:false,
            multiline:false
        },
        surname:{
            value:editdata.lastname,
            label:"Soyad",
            warning:false,
            multiline:false
        },
        personaltext:{
            value:editdata.Personaltext,
            label:"Kisisel Bilgiler",
            warning:false,
            multiline:true
        },
    })
    
    useEffect(()=>{
        setcropperactive(false)
    },[active])
    useEffect(()=>{
        console.log(image)
    },[image])

    useEffect(()=>{
        const trial = document.querySelector("#trial")
        trial.addEventListener("load",()=>{
            console.log(trial.width)
        })
    },[src])

    const Upload = async ()=>{
        const formData=new FormData();

        formData.append("upload",file);

        try{
            console.log(crop.width)
            console.log(crop.height)
            await axios.post(`/upload/${crop.width}/${crop.height}/${crop.x}/${crop.y}`,formData);
   
         }catch(err){
   
            return console.log(err);
            
         }

        
    }

    const Inputhandler = (key,event)=>{

        const mutated = {...userinfo}
        mutated[key].value=event.target.value
        setuserinfo(mutated)
    }

    const Updatefile = (event)=>{
        setcropperactive(true)
        
        setsrc(URL.createObjectURL(event.target.files[0]))
        console.log(URL.createObjectURL(event.target.files[0]))
        setfile(event.target.files[0])
        setfilename(event.target.files[0].name);
      
    }

    const updatecrop = (newcrop)=>{
        console.log(newcrop)
        setcrop(newcrop)
    }

    return (
        <div>
            <Black onClick={closefunc} aktif={active}/>
            <img style={{visibility:"hidden",position:"absolute"}} id="trial" src={src}></img>
            <Exterior getcropper={iscropperactive} active={active}>
                <Inner>
                    {
                        iscropperactive 
                        
                        ? 
                            <div style={{textAlign:"center"}}>
                                <Cropper onImageLoaded={setimage} imageStyle={{height:"300px",width:"200px",objectFit:"contain"}}  src={src} crop={crop} onChange={(newcrop)=>updatecrop(newcrop)}/> 
                                <div style={{textAlign:"center"}}>
                                 <Button onClick={()=>Upload()} variant="contained" >Upload the file to server</Button>
                                </div>
                            </div>
                        
                        :

                             (<> 
                                <Background>
                                    <Labelimage  htmlFor="file"></Labelimage>
                                    <CameraAlt style={{color:"white"}}></CameraAlt>
                                    <input onChange={(e)=>Updatefile(e)} name="upload" accept="image/png, image/gif, image/jpeg" id="file" type="file" style={{display:"none"}}></input>
                                </Background>
                                <ProfileImageholder>
                                    <Porfileimage style={{display:"flex",justifyContent:"center",alignItems:"center"}} width="80px" height="80px" profile={"/car.jpg"}>
                                        <Labelimage htmlFor="file2"></Labelimage>
                                        <CameraAlt style={{color:"white"}}></CameraAlt>
                                        <input accept="image/png, image/gif, image/jpeg" id="file2" type="file" style={{display:"none"}}></input>
                                    </Porfileimage>
                                </ProfileImageholder>
                                <Information>
                                    {
                                        Object.keys(userinfo).map((item,index)=>{

                                            return (<Inputholder>
                                                        <TextField
                                                        multiline={userinfo[item].multiline}
                                                        rows={4}
                                                        onChange={(e)=>Inputhandler(item,e)}
                                                        style={{width:"100%"}}
                                                        label={userinfo[item].label}
                                                        variant="outlined"
                                                        value={userinfo[item].value}
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
