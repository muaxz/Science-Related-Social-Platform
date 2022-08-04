import React from 'react';
import styled from "styled-components"

const OuterDiv = styled.div`
position:absolute;
display:${({isActive})=>isActive ? "block" : "none"};
top:40px;
right:1px;
height:auto;
padding:10px;
border-radius:10px;
text-align:right;
background-color:#06d6a0;
box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
z-index:100;
`
export default function PostSample({src,isActive,setActive}){

    return(
        <OuterDiv isActive={isActive} >  
            <i onClick={setActive} style={{color:"white",cursor:"pointer",marginBottom:"10px"}} className="fas fa-times-circle fa-lg"></i>
            <img style={{width:"100%",borderRadius:"10px"}} src={src}></img>
        </OuterDiv>
    )

}