import React,{createRef, useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import {verifyEmailCode} from "../../Api/requests"
import {Button} from "@material-ui/core"


const OuterDiv = styled.div`
position:absolute;
width:400px;
background-color:white;
height:300px;
top:50%;
padding-left:20px;
left:50%;
transform:translate(-50%,-50%);
z-index:1000;
border-radius:10px;
`
const InnerDiv = styled.div`
display:flex;
align-items:center;
height:50%;
width:100%;
justify-content:space-around;
`

const DigitBox = styled.div`
width:40px;
margin-right:20px;
height:40px;
`

const InputDigit = styled.input`
height:100%;
width:100%;
font-size:30px;
text-align:center;
outline:none;
border:1px solid grey;
border-radius:10px;
`

export default function VerificationWindow({userEmail,setEmailWindow}){
    const [refs,setRefs] = useState([])
    const [inputs,setInputs] = useState(["","","","","",""])

    useEffect(()=>{

        const copyRefs = [...refs]
        for (let i = 0; i < 6; i++) {
            copyRefs[i] = React.createRef()
        }
        setRefs(copyRefs)
    },[])
    
    useEffect(()=>{
        if(refs.length > 0){
            refs[0].current.focus()
        }
    },[refs])

    useEffect(()=>{

        var allowSubmit = true;

        inputs.forEach(element => {
            if(element === ""){
                allowSubmit = false
            }   
        });

        if(allowSubmit) submitTheCode()

    },[inputs])

    const handleChange = (e,index)=>{

        if(isNaN(e.target.value)) return 

        const inputsCopy = [...inputs]
        if(e.target.value.length === 1){
            inputsCopy[index] = e.target.value
            setInputs(inputsCopy)
        }
        

        if(index < 5){ 
            refs[index+1].current.focus()
        }
       
    }

    
    const submitTheCode = ()=>{
        const code = inputs.join("")
        verifyEmailCode({
            code:code,
            newEmail:userEmail,
            setEmailWindow:setEmailWindow
        })
       
    }

    return(
        <OuterDiv>
            <InnerDiv>
                {[0,0,0,0,0,0].map((element,index)=>{
                    return (
                        <DigitBox>
                            <InputDigit ref={refs[index]} value={inputs[index]}  onChange={(e)=>handleChange(e,index)}/>
                        </DigitBox>
                    )
                })}
            </InnerDiv>
            <Button onClick={()=>setInputs(["","","","","",""])} color="secondary" variant="contained">Clean</Button>
            <p style={{paddingTop:"30px"}}>`To update your email, you need to enter 6-digit verification code sent to your previous email.`,</p>
        </OuterDiv>

    )

}