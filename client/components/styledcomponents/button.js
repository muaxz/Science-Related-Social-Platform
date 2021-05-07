import styled,{createGlobalStyle} from "styled-components";

export const Button=styled.button(({color,backcolor,width,hoverback})=>
`
width:${width};
padding:10px;
outline:none;
border:none;
border-radius:8px;
color:${color};
background-color:${backcolor};
transition:0.3s;
&:hover {
    background-color:${hoverback};
    cursor:pointer;
}
`)


export const Global=createGlobalStyle`
 *{
     box-sizing:border-box;
     margin:0px;
     font-family: 'IBM Plex Serif', serif;
 }

 body {
    
    background-color:#EAEAEA;
    height:100%;
   
 }
`

export const Porfileimage=styled.div(({width,height,profile})=>`
width:${width};
height:${height};
background-color:white;
border-radius:50%;
background-image:url(${profile});
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`)



export const Black=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
transition:background 0.4s;
height:100%;
z-index:${({aktif})=>aktif ? "40" : "-300"};
background:rgba(0, 0, 0, ${({aktif})=>aktif ? "0.7" : "0"});
`



