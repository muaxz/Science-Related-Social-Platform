import React from 'react'
import styled from "styled-components";

const Navbarext=styled.div`
position:fixed;
display:flex;
align-items:center;
justify-content:flex-end;
top:0;
left:0;
width:100%;
height:65px;
padding-left:250px;
background-color:#E0E2E1;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
z-index:100;
`

export default function Navigation() {
    return (
        <Navbarext>
            <div style={{marginRight:"20px",position:"relative"}}>
                <i class="fas fa-bell fa-lg"></i>
                <span style={{display:"block",position:"absolute",borderRadius:"50%",backgroundColor:"red",color:"white",fontSize:"10px",width:"15px",textAlign:"center",left:"-5px",top:"0px"}}>2</span>
            </div>
        </Navbarext>
    )
}
