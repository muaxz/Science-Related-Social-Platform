import styled,{createGlobalStyle,keyframes} from "styled-components";

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
     font-family: 'Poppins', sans-serif;
 }

 body {
  height:100%;
 }
`

export const Porfileimage=styled.div(({width,height,profile})=>`
width:${width};
height:${height};
background-color:white;
border-radius:50%;
cursor:pointer;
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

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  border-left: 2px solid #6c757d;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;



