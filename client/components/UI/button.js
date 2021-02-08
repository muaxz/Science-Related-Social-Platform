import styled from "styled-components";

export const Button=styled.button(({color,backcolor,width})=>
`
width:${width};
padding:10px;
outline:none;
border:none;
border-radius:8px;
color:${color};
background:${backcolor};
transition:0.3s;
border:1px solid white;
&:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor:pointer;
}
`)

