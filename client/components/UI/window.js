import React from 'react'
import styled from "styled-components";
import {Black} from "../styledcomponents/button";

const External=styled.div`
position:absolute;
left:50%;
transform:translate(-50%,-50%);
width:300px;
height:200px;
transition:0.5s;
top:${({aktif})=>aktif ? "50%" : "-200px"};
background-color:white;
z-index:25;
border-radius:10px;
`

const Textbox=styled.div`
width:80%;
margin:50px auto;
text-align:center;
`

const Window=({children,active,type})=>{
    var icon= null;
    if(type == "error"){
       icon=<i className="fas fa-exclamation-circle fa-2x" style={{color:"red",marginBottom:"10px"}}></i>
    }
    else if(type == "confirm"){
       icon=<i className="fas fa-check-circle fa-2x" style={{color:"green",marginBottom:"10px"}}></i>
    }
    return (
       <div>
         <Black aktif={active}/>
         <External aktif={active}>
            <Textbox>
               {icon}
                  <p style={{textAlign:'center',wordWrap:'break-word',lineHeight:"25px"}}>
                     {children}
                  </p>
            </Textbox>
         </External>
       </div>
    )
}


export default Window;
