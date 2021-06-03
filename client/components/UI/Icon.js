import React from 'react'
import styled from "styled-components";

const Iconspan=styled.span(({width,height,color,backcolor,position,top,left,right,bottom,lineheight,hovercolor,hoverback,rotate})=>`
position:${position};
top:${top};
left:${left};
right:${right};
bottom:${bottom};
border-radius:50%;
display:block;
line-height:${lineheight};
width:${width};
height:${height};
cursor:pointer;
text-align:center;
color:${color};
background-color:${backcolor};
transform:rotate(${rotate ? "180deg" : "0deg"});
&:hover{
 background-color:${hoverback};
 color:${hovercolor};
}
`)

export default function Icon({className,Iconconfig,activefunc}) {
    return (
       <Iconspan onClick={activefunc} {...Iconconfig}>
           <i className={className}></i>
       </Iconspan>
    )
}
