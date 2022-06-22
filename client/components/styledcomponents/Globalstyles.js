import styled,{createGlobalStyle,keyframes} from "styled-components";

export const Button=styled.button(({color,backcolor,width,hoverback})=>
`
width:${width};
padding:10px;
outline:none;
border:none;
border-radius:5px;
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
     font-family: 'Raleway', sans-serif;
 }
 body {
  height:100%;
 }

 html{
   scroll-behavior:smooth;
 }
`

export const Porfileimage=styled.div(({width,height,profile})=>`
width:${width};
height:${height};
border-radius:50%;
cursor:pointer;
background-image:url(${profile});
background-size:cover;
background-repeat: no-repeat;
background-position: center; 
`)



export const Black=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:${({aktif})=>aktif ? "150" : "-300"};
background:rgba(0, 0, 0, ${({aktif})=>aktif ? "0.7" : "0"});
`


export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SavedInfoDiv = styled.div`
position:fixed;
bottom:${({active})=>active ? "40px" : "10px"};
left:100px;
padding:20px;
background-color:#97DBAE;
font-weight:bold;
border-radius:7px;
color:white;
transition-duration:0.5s;
z-index:152;
opacity:${({active})=>active ? "1" : "0"}
`


export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  border-left: 2px solid #6c757d;
  background: transparent;
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;


