import React from 'react'
import styled from "styled-components";
import {Porfileimage,Button} from "../styledcomponents/button"

const Exterior=styled.div`
width:100%;
margin-bottom:10px;
`
const Inner=styled.div`
display:flex;
align-items:center;
`

const Name=styled.div`
margin-left:10px;
`

const Following=styled.div`
margin-left:auto;
margin-right:10px;
`
export default function Usercard({firstname,surname,imageurl,optionforbutton,children,usernumber}) {
    var Option = <Button  color="black" backcolor="#CFD9BA"><i style={{marginRight:"8px"}} className="fas fa-user-plus"></i>Takip Et</Button>;
    if(!optionforbutton)
    Option=null;

    return (
        <Exterior>
            <Inner>
               <div style={{marginRight:"5px",color:"#e5383b",width:"25px"}}>{usernumber}.</div>
               <Porfileimage profile={imageurl} width="40px" height="40px"></Porfileimage>
               <Name><span style={{color:"black",fontWeight:"bold"}}>{firstname}Emre</span></Name>
               <Following>{children}</Following>
            </Inner>
        </Exterior>
    )
}
