import React, { useContext, useState } from 'react'
import {Porfileimage} from "../../../styledcomponents/Globalstyles"
import styled,{keyframes} from "styled-components";
import {TextField,Button} from "@material-ui/core"
import {createusercontext} from "../../../../context/Usercontext"
import {CreateNightMode} from "../../../../context/Nightmode"
import {AddComment} from "@material-ui/icons"
import router from "next/router"

const Writecomment=styled.div`
width:100%;
padding-bottom:30px;
`
const Innerdiv=styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const Options=styled.div`
width:${({flex})=>flex};
padding-right:10px;
color:red;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default function Commentsection({Producecomment,spinner}){

    const [commentvalue,setcommentvalue]=useState("");
    const {userdata} = useContext(createusercontext)
    const {nightmode} = useContext(CreateNightMode)
    

    const Changevalue=(e)=>{

        if(commentvalue.length >= 140)
        return false;

        setcommentvalue(e.target.value)
    }

    const Submitcomment=()=>{
      if(!userdata.UserId) return router.push("/login")
      if(commentvalue.length > 0){

        Producecomment(commentvalue);

      }

      setcommentvalue("");
    }

    return (
        <Writecomment>
            <Innerdiv>
               <Options>
                  <Porfileimage width="50px" height="50px" profile="/car.jpg"></Porfileimage>
                </Options>
                <Options flex={"70%"}>
                    <TextField
                      inputProps={{style:{color:nightmode ? "white" : "black",fontWeight:"bold",borderColor:"red"}}}
                      value={commentvalue}
                      onChange={Changevalue}
                      style={{width:"100%"}}
                      placeholder="Write a comment..."           
                      variant="outlined"
                    >
                    </TextField> 
                </Options>
                <Options>
                       <Button color="secondary" onClick={Submitcomment} variant="contained"><AddComment></AddComment></Button>
                </Options>  
            </Innerdiv>
            {
              spinner ? 
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Spinner></Spinner> 
                </div> : null
            }
        </Writecomment>
    )
}
