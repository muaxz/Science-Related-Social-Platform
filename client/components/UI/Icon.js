import React from 'react'
import styled from "styled-components";

const Iconspan=styled.span(({width,middle,height,color,backcolor,position,top,left,right,bottom,lineheight,hovercolor,hoverback,rotate,zindex})=>`
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
z-index:${zindex};
background-color:${backcolor};
transform:rotate(${rotate ? "180deg" : "0deg"});
transform:translate(${middle ? "-50%" : "0"},${middle ? "-50%" : "0"});
&:hover{
 background-color:${hoverback};
 color:${hovercolor};
}
`)

const Subtext = styled.p`

`

export default function Icon({className,Iconconfig,activefunc}) {
    return (
        <div>
            <Iconspan onClick={activefunc} {...Iconconfig}>
                <i className={className}></i>
            </Iconspan>
            
        </div>
    )
}
