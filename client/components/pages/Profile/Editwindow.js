import { CameraAlt } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from "styled-components"
import {Black,Porfileimage} from "../../styledcomponents/button"
import {TextField} from "@material-ui/core"

const Exterior = styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
transform:translateX(-50%);
left:50%;
top:70px;
max-width:600px;
width:90%;
height:580px;
background-color:white;
border-radius:10px;
z-index:1000;
overflow:auto;
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
    console.log(editdata)
    const [userinfo,setuserinfo] = useState({
        username:{
            value:"Muaxz232",
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

    const Submitupdated = ()=>{

    }

    const Inputhandler = (key,event)=>{

        const mutated = {...userinfo}
        mutated[key].value=event.target.value
        setuserinfo(mutated)
    }

    return (
        <div>
            <Black onClick={closefunc} aktif={active}/>
            <Exterior active={active}>
                <Inner>
                    <Background>
                        <Labelimage htmlFor="file"></Labelimage>
                        <CameraAlt style={{color:"white"}}></CameraAlt>
                        <input accept="image/png, image/gif, image/jpeg" id="file" type="file" style={{display:"none"}}></input>
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
                </Inner>
            </Exterior>
        </div>
    )
}
