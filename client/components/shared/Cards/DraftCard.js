import React, { useState } from 'react';
import styled from "styled-components"
import {DeletePost} from "../../../Api/requests"
import {Edit,DeleteForeverOutlined} from "@material-ui/icons"
import Window from "../../UI/window"


const OuterDiv = styled.div`
position:relative;
width:200px;
height:200px;
background-color:#aa4465;
border-radius:7px;
`

const EditIconHolder = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:40px;
height:40px;
border-radius:50%;
background-color:white;
cursor:pointer;
`

const AliasHolder = styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:80%;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`

const ListIconHolder = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
width:30px;
height:30px;
border-radius:50%;
top:5px;
right:5px;
cursor:pointer;
color:white;
&:hover{
    background-color:white;
    color:black;
}
`


export default function DraftCard({draftContent}){
    const [windowActive,setWindowActive] = useState(false);
    const {alias,id} = draftContent;
    
    const draftActionHandler = (closeType)=>{

        if(closeType == "DELETE") DeletePost({PostId:id})
    
        setWindowActive(false)
    }

    return (
        <React.Fragment>
           
            <Window closefunction={draftActionHandler} active={windowActive} type="garbage">Are your sure about deleting this draft ?</Window>
            <OuterDiv>
                    <ListIconHolder onClick={()=>setWindowActive(true)}>    
                            <DeleteForeverOutlined></DeleteForeverOutlined>
                    </ListIconHolder>
                    <AliasHolder>
                        <EditIconHolder>
                            <Edit/>
                        </EditIconHolder>
                        <p style={{paddingTop:"15px",color:"white"}}>{alias ? alias : "Culture"}</p>
                    </AliasHolder>
            </OuterDiv>
        </React.Fragment>
    )
}