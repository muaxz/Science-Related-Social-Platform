import React from 'react'
import styled from "styled-components";
import {Black} from "../styledcomponents/button";
import {Button} from "@material-ui/core"
import {Error} from "@material-ui/icons"

const External=styled.div`
position:absolute;
left:50%;
transform:translate(-50%,-50%);
width:300px;
height:200px;
text-align:center;
transition:top 0.4s;
top:${({aktif})=>aktif ? "50%" : "200px"};
z-index:${({aktif})=>aktif ? "50" : "-200"};
background-color:white;
border-radius:10px;
`

const Textbox=styled.div`
width:80%;
margin:30px auto;
text-align:center;

`

const Window=({children,active,type,closefunction})=>{
    var icon= null;
    if(type == "error"){
       icon=<i className="fas fa-exclamation-circle fa-2x" style={{color:"red",marginBottom:"10px"}}></i>
    }
    else if(type == "confirm"){
       icon=<i className="fas fa-check-circle fa-2x" style={{color:"green",marginBottom:"10px"}}></i>
    }
    return (
       <div>
         <Black onClick={closefunction} aktif={active}/>
         <External aktif={active}>
            <Textbox>
                  <Error style={{fontSize:"40px"}} color="error"></Error>
                  <p style={{textAlign:'center',wordWrap:'break-word',lineHeight:"25px"}}>
                     {children}
                  </p>
            </Textbox>
            <div style={{paddingTop:"15px"}}>
              <Button onClick={closefunction} variant="contained">OK</Button>
            </div>
         </External>
       </div>
    )
}


export default Window;
