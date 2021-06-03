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

    var Option=null;
    if(optionforbutton)
    Option = <Button  color="black" backcolor="#CFD9BA"><i style={{marginRight:"8px"}} className="fas fa-user-plus"></i>Takip Et</Button>;

    return (
        <Exterior>
            <Inner>
                {
                    !optionforbutton ?

                    <div style={{color:"#e5383b",width:"25px"}}>{usernumber}.</div>
                    :null
                }
               <Porfileimage profile={"/car.jpg"} width="40px" height="40px"></Porfileimage>
               <Name><span style={{color:"black"}}>{firstname}</span></Name>
               <Following>{children}</Following>
               {Option}
            </Inner>
        </Exterior>
    )
}
