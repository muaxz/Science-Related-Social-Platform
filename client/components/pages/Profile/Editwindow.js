import React from 'react'
import styled from "styled-components"
import {Black,Porfileimage} from "../../styledcomponents/button"

const Exterior = styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
transform:translateX(-50%);
left:50%;
top:70px;
max-width:600px;
width:90%;
height:550px;
background-color:white;
border-radius:10px;
z-index:1000;
`
const Inner = styled.div`
position:relative;

`

const Background = styled.div`
width:100%;
border-top-left-radius:10px;
border-top-right-radius:10px;
height:200px;
background-image:url(/led.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const ProfileImageholder=styled.div`
position:absolute;
width:120px;
height:120px;
top:160px;
left:30px;
`

export default function Editwindow({active}){
    return (
        <div>
            <Black aktif={active}/>
            <Exterior active={active}>
                <Inner>
                    <Background></Background>
                    <ProfileImageholder>
                        <Porfileimage width="80px" height="80px" profile={"/car.jpg"}></Porfileimage>
                    </ProfileImageholder>
                </Inner>
            </Exterior>
        </div>
    )
}
