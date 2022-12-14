import React from 'react'
import styled from "styled-components";
import {Black} from "../styledcomponents/Globalstyles";
import {Button} from "@material-ui/core"
import {Error} from "@material-ui/icons"

const External=styled.div`
position:absolute;
left:50%;
transform:translate(-50%,-50%);
width:300px;
padding-bottom:20px;
text-align:center;
transition:${({aktif})=>aktif ? "top 0.4s" : "top 0.4s, z-index 0.6s"};
top:${({aktif})=>aktif ? "50%" : "200px"};
z-index:${({aktif})=>aktif ? "180" : "-200"};
opacity:${({aktif})=>aktif ? "1" : "0"};
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
    else if(type == "garbage"){
      icon=<i className="fa-solid fa-trash fa-2x" style={{color:"black",marginBottom:"10px"}}></i>
    }

    return (
       <div>
         <Black onClick={closefunction} aktif={active}/>
         <External aktif={active}>
            <Textbox>
                  {icon}
                  <p style={{textAlign:'center',wordWrap:'break-word',lineHeight:"25px"}}>
                     {children}
                  </p>
            </Textbox>
            <div style={{paddingTop:"15px"}}>
               {
                  type == "garbage" ? 
                  
                  (<React.Fragment>
                     <Button style={{marginRight:"10px",backgroundColor:"#e63946",color:"white"}} onClick={()=>closefunction("DELETE")} variant="contained">Delete</Button>
                     <Button onClick={()=>closefunction("CANCEL")} variant="contained">Cancel</Button>
                  </React.Fragment>) 
                  
                  : <Button onClick={closefunction} color="primary" variant="contained">OK</Button>
               }

            </div>
         </External>
       </div>
    )
}


export default Window;
