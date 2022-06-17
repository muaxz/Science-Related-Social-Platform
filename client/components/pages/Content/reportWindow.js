import React, { useState } from 'react';
import styled from "styled-components"
import {FormGroup,FormControlLabel,Checkbox,TextField,Button} from "@material-ui/core"
import {Black} from "../../styledcomponents/Globalstyles"
import {ReportUserReq} from "../../../Api/requests"

const ExteriorDiv = styled.div`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:350px;
background-color:#F7F7F7;
padding:10px;
border-radius:7px;
z-index:200;
`

const InnerDiv = styled.div`
`

const AddMessageDiv = styled.div`
margin-bottom:10px
`

const BoxSelectionDiv= styled.div`
display:flex;
justify-content:center;
margin-bottom:20px;
`


var reportCategories = {
    0:"Ciplaklik",
    1:"Nefret Soylemi",
    2:"Siyasi icerik",
    3:"Hakaret"
}

function Reportwindow({setActiveFunc,ContentId,reportedUserId}){
    const [message,setmessage] = useState("")
    const [checkBox,setCheckBox] = useState({
        0:{
            label:"Ciplaklik",
            value:false

        },
        1:{
            label:"Nefret Soylemi",
            value:false

        },
        2:{
            label:"Siyasi icerik",
            value:false

        },
        3:{
            label:"Hakaret",
            value:false
        }
    })

    const ChangeHandler = (e,key)=>{

       const copy = {...checkBox}
    
       for (const key in checkBox) {
         copy[key].value = false;
       }

       copy[key].value = e.target.checked

       setCheckBox(copy)
    }

    const SubmitHandler = ()=>{

        var value = null
        for (const key in checkBox) {
            if(checkBox[key].value == true){
                value = key
            }
        }
        
        ReportUserReq({
            message:message,
            checkBoxValue:value,
            ContentId:ContentId,
            reportedUserId:reportedUserId
        })

        setActiveFunc()
    }

    return (  
        <div>
            <Black onClick={setActiveFunc} aktif={true}></Black>
            <ExteriorDiv>
                   <InnerDiv>
                        <BoxSelectionDiv>
                            <FormGroup>
                                {
                                    Object.keys(checkBox).map((item)=>{
                                        return (<FormControlLabel
                                                
                                                control={<Checkbox onChange={(e)=>ChangeHandler(e,item)} checked={checkBox[item].value} ></Checkbox>}
                                                label={checkBox[item].label}
                                                />)
                                    })
                                }
                            </FormGroup>
                        </BoxSelectionDiv>
                       <AddMessageDiv>
                          <TextField
                                onChange={(e)=>setmessage(e.target.value)}
                                id="filled-multiline-static"
                                label="Aciklama Ekle..."
                                multiline
                                rows={4}
                                value={message}
                                variant="outlined"
                                fullWidth
                                />
                       </AddMessageDiv>
                       <Button onClick={SubmitHandler} style={{color:"white",backgroundColor:"#B91646"}} fullWidth variant="contained">Report</Button>
                   </InnerDiv>
            </ExteriorDiv>
        </div>
    );
}

export default Reportwindow;