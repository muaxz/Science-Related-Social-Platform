import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import {Black} from "../../components/styledcomponents/Globalstyles"
import {HighlightOffOutlined} from "@material-ui/icons"

const ExteriorDiv = styled.div`
max-width:1200px;
padding-top:100px;
margin:auto;
overflow:${({allowScroll})=>allowScroll ? "hidden" : "visible"};
height:${({allowScroll})=>allowScroll ? "100vh" : ""};
`

const InnerDiv = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
justify-content:center;
`

const CardOutside = styled.div`
width:400px;
height:200px;
padding-right:10px;
padding-bottom:10px;
`

const CardOutsideSingle = styled.div`
position:fixed;
width:${({extend})=>extend ? "90%" : "0"};
height:${({extend})=>extend ? "600px" : "0"};
top:${({extend})=>extend ? "55%" : "0"};
left:${({extend})=>extend ? "50%" : "0"};
transition-duration:0.4s;
transform:${({extend})=>extend ? "translate(-50%,-50%)" : "translate(0,0)"};
z-index:${({extend})=>extend ? "1000" : "0"};
padding-bottom:10px;
`

const CardInner = styled.div`
position:relative;
display:flex;
height:100%;
cursor:pointer;
overflow:hidden;
padding:10px;
word-break:break-word;
width:100%;
background-color:lightgrey;
border-radius:10px;
`

const TitleImageDiv = styled.div`
flex:1;
`

const ContentDiv = styled.div`
text-align:center;
flex:2;
`

const TitleImage = styled.img`
width:100%;
flex:4;
border-radius:10px;
height:100%;
object-fit:cover;
`

const TitleForSingle = styled.h1`

`

const ContentPha = styled.div`
margin-top:10px;
`

const dropDownIcon = styled.div`
position:absolute;
`
const CloseWindowIcon = styled.div`
position:absolute;
top:10px;
right:10px;
`

const Postcontrol=({contentData})=>{
    const [selectedCard,setSelectedCard] = useState({});
    const [extendValue,setExtend] = useState(false);
    
    useEffect(()=>{
        if(selectedCard.id){
            setTimeout(() => {
                setExtend(true)
            },60);
        }
    },[selectedCard])


    const blackHandler = ()=>{
        setSelectedCard({})
        setExtend(false)
    }

    return (
        <ExteriorDiv allowScroll={selectedCard.id ? true : false}>
            <Black onClick={blackHandler} aktif={selectedCard.id ? true : false}></Black>
            {
                selectedCard.id ?
                <CardOutsideSingle extend={extendValue}>
                        <CardInner>
                            <CloseWindowIcon onClick={blackHandler}><HighlightOffOutlined style={{fontSize:"40px",color:"white"}}></HighlightOffOutlined></CloseWindowIcon>
                            <TitleImageDiv>
                                <TitleImage src="/boxHistory.jpg"></TitleImage>
                            </TitleImageDiv>
                            <ContentDiv>
                                    <TitleForSingle><b>{selectedCard.title}</b></TitleForSingle>
                                    <h4><b>{selectedCard.subtitle}</b></h4>
                                    <ContentPha>{"Post Sahibi : "+selectedCard.personal.firstname+" "+selectedCard.personal.lastname}</ContentPha>
                            </ContentDiv>
                        </CardInner>
                </CardOutsideSingle> : null
            }
          
            <InnerDiv>
                {
                    contentData.map((item,index)=>{
                        return (
                            <CardOutside extend={false} onClick={()=>setSelectedCard(item)}>
                                <CardInner>
                                    <TitleImageDiv>
                                        <TitleImage src="/boxHistory.jpg"></TitleImage>
                                    </TitleImageDiv>
                                    <ContentDiv>
                                        <p><b>{item.title}</b></p>
                                        <p><b>{item.subtitle}</b></p>
                                        <ContentPha>{"Post Sahibi : "+item.personal.firstname+" "+item.personal.lastname}</ContentPha>
                                    </ContentDiv>
                                </CardInner>
                            </CardOutside>
                        )
                    })
                }
            </InnerDiv>
        </ExteriorDiv>
    )
}


export default Postcontrol;