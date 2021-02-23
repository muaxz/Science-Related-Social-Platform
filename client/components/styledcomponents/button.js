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
     padding:0px;
     font-family: 'Tinos', serif;
 }
`


