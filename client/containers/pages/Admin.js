import React, { useRef, useState } from 'react';
import styled from "styled-components";
import EditCategory from "../../components/pages/Admin/EditCategory"
import EditModerator from "../../components/pages/Admin/EditModerator"


const OuterDiv = styled.div`
display:flex;
padding-right:50px;
padding-left:50px;
justify-content:center;
align-items:center;
height:100vh;
`

const InnerDiv = styled.div`
border:1px groove lightgrey;
display:flex;
max-width:1200px;
height:400px;
width:100%;
`

const LeftOptions = styled.div`
padding:10px;
padding-top:40px;
width:170px;
height:100%;
background-color:#1b9aaa;
`

const OptionChild = styled.div`
text-align:center;
color:white;
margin-bottom:30px;
cursor:pointer;
padding:10px;
border-radius:25px;
background-color:${({selected})=>selected ? "#d81159" : ""};
&:hover{
background-color:#d81159;
}
`

const RightDisplayer = styled.div`
padding:15px;
`

const AdminPage=()=>{

    const [options,setOptions] = useState([{label:"Edit Categories",selected:false},{label:"Edit Moderators",selected:false}])
    const [willBeDisplayed,setWillBeDisplayed] = useState();

    const selectOptionHandler = (index)=>{
        const copyOptions = [...options];
        copyOptions.forEach(element => {
            element.selected = false;
        });
       
        copyOptions[index].selected = true;
        setWillBeDisplayed(displayHandler(index))
        setOptions(copyOptions)
    }

    const displayHandler = (index)=>{
       
        if(index === 0) return <EditCategory/>
        if(index === 1) return <EditModerator/>
    }

    return (
        <OuterDiv>
            <InnerDiv>
                <LeftOptions>
                    {options.map((item,index)=>(
                        <OptionChild selected={options[index].selected} onClick={()=>selectOptionHandler(index)}>
                            {item.label}
                        </OptionChild>
                    ))}
                </LeftOptions>
                <RightDisplayer>
                        {willBeDisplayed}
                </RightDisplayer>
            </InnerDiv>
        </OuterDiv>
    )

}

//creating editor account, adding a new category, 
export default AdminPage;