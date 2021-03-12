import React from 'react'
import styled from "styled-components";


const Navbarext=styled.div`
position:fixed;
display:flex;
align-items:center;
top:0;
left:0;
width:100%;
height:65px;
padding-left:100px;
background-color:#f8f4ff;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
z-index:100;
`
const Iconholder=styled.div`
position:relative;
margin-right:10px;
`

const InputHolder=styled.div`
position:relative;
flex:2;
`

const Input=styled.input`
padding:5px;
padding-left:10px;
border:none;
width:100%;
outline:none;
border-radius:4px;
background-color:#CCCFCE;
color:black;
::placeholder {
    color:black;
}
&:focus {
    box-shadow:0px 0px 2px 3px #2ADB90;
    color:black;
}
`
const Iconsecure=styled.i`
position:absolute;
padding:7px;
border-left:1px solid white;
right:20px;
color:black;
top:50%;
transform:translate(50%,-50%);
`

export default function Navigation() {
    return (
        <Navbarext>
            <InputHolder>
               <Input placeholder="Ara"></Input>
               <Iconsecure className="fas fa-search"></Iconsecure>
            </InputHolder>
            <div style={{flex:6,display:"flex",justifyContent:"flex-end",marginRight:"20px"}}>
                <Iconholder>
                    <span style={{display:"block",backgroundColor:"#2C7585",color:"white",borderRadius:"50%",width:"35px",height:"35px",textAlign:"center",lineHeight:"35px"}}>
                        <i className="fas fa-users"></i>
                    </span>
                </Iconholder>
                <Iconholder>
                    <span style={{display:"block",backgroundColor:"#E16060",color:"white",borderRadius:"50%",width:"35px",height:"35px",textAlign:"center",lineHeight:"35px"}}>
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </Iconholder>
                <Iconholder>
                    <span style={{display:"block",backgroundColor:"lightgrey",borderRadius:"50%",width:"35px",height:"35px",textAlign:"center",lineHeight:"35px"}}>
                        <i class="fas fa-bell fa-lg"></i>
                        <span style={{display:"block",position:"absolute",borderRadius:"50%",backgroundColor:"red",color:"white",fontSize:"10px",height:"20px",width:"20px",textAlign:"center",right:"-10px",top:"-5px",lineHeight:"20px"}}>2</span>
                    </span>
                </Iconholder>
            </div>
        </Navbarext>
    )
}
