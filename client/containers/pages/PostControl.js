import React, { useState,useEffect,useContext} from 'react';
import styled from "styled-components";
import {checkTheContent,SearchContentsForMods,GetContentsForMods} from "../../Api/requests"
import {CreateUtilContext} from "../../context/UtilContext"
import {Black} from "../../components/styledcomponents/Globalstyles"
import {HighlightOffOutlined,SecurityOutlined,VisibilityOff,Visibility,Search} from "@material-ui/icons"
import {Button,TextField,InputAdornment} from "@material-ui/core"
import HtmlParser from "react-html-parser"
import useScroll from '../../hooks/Scroll';


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
`

const CardOutside = styled.div`
width:400px;
height:200px;
padding-right:15px;
padding-bottom:15px;
cursor:pointer;
`

const CardOutsideSingle = styled.div`
position:fixed;
width:${({extend})=>extend ? "90%" : "0"};
height:${({extend})=>extend ? "600px" : "0"};
top:${({extend})=>extend ? "55%" : "0"};
left:${({extend})=>extend ? "50%" : "0"};
transition-duration:0.4s;
transform:${({extend})=>extend ? "translate(-50%,-50%)" : "translate(0,0)"};
z-index:${({extend})=>extend ? "151" : "0"};
padding-bottom:10px;
`

const CardInner = styled.div`
position:relative;
display:flex;
height:100%;
padding:10px;
padding-right:70px;
word-break:break-word;
width:100%;
overflow:auto;
background-color:#F7F5F2;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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

const IconHolder = styled.div`
position:absolute;
top:${({top})=>top+"px"};
right:${({right})=>right+"px"};
`

const ButtonHolderChecked = styled.div`
position:absolute;
top:30px;
left:30px;
`

const InputHolder = styled.div`
padding-bottom:10px;
display:flex;
align-items:center;
`


const Postcontrol=({contentData})=>{
    const {bottom} = useScroll()
    const [selectedCard,setSelectedCard] = useState({});
    const {setSavedWindow,setSavedWindowText} = useContext(CreateUtilContext)
    const [contentDataState,setContentData] = useState(contentData)
    const [searchValue,setSearchValue] = useState("");
  
    useEffect(()=>{
        
        if(bottom){
            GetContentsForMods({
                order:contentDataState.length,
                setContent:setContentData,
            })
        }
    
    },[bottom])

    const blackHandler = ()=>{
        setSelectedCard({})
    }

    const CheckingHandler = async (actionType,publicValue)=>{

        await checkTheContent({
            contentID:selectedCard.id,
            publicValue:publicValue,
            actionType:actionType
        })

        const contentCopy = [...contentDataState];
        const IndexOfCopy = contentCopy.findIndex((item)=>item.id == selectedCard.id);

        if(actionType == "CHECK_POST"){

            contentCopy[IndexOfCopy].checked = true;
            setSavedWindowText("Post Checked")
            setSavedWindow(true);

        }else{
            
            contentCopy[IndexOfCopy].phase = publicValue;
            
        }

        setContentData(contentCopy)
        setSelectedCard(contentCopy[IndexOfCopy])
    }

    const InputSearcHandler = (event)=>{

         if(event.key == "Enter"){
            return ButtonSearcHandler()
         }
         
         setSearchValue(event.target.value)
    }   

    const ButtonSearcHandler=()=>{
        
        if(searchValue.length <= 0) return
        
        SearchContentsForMods(searchValue,setContentData)
    
    }

    return (
        <ExteriorDiv allowScroll={selectedCard.id ? true : false}>
            <Black onClick={blackHandler} aktif={selectedCard.id ? true : false}></Black>
            <InputHolder id="SearchBar">
                <TextField
                   onChange={InputSearcHandler} 
                   onKeyPress={InputSearcHandler}
                   value={searchValue}
                   size="small"
                   InputProps={{
                      style:{cursor:"pointer"},
                      endAdornment: <InputAdornment position="end"><Search></Search></InputAdornment>,
                    }} 
                    variant="outlined" 
                    label="Search For Title...">
                </TextField>
                <Button onClick={ButtonSearcHandler} style={{marginLeft:"10px",fontWeight:"bold",textTransform:"capitalize"}} variant="contained">Search</Button>
            </InputHolder>
            {
                selectedCard.id ?
                <CardOutsideSingle extend={true}>
                        <CardInner>
                            <ButtonHolderChecked>
                                <Button onClick={()=>CheckingHandler("CHECK_POST")} endIcon={<SecurityOutlined style={{color:selectedCard.checked ? "#00C897" : "#E83A14"}}></SecurityOutlined>} style={{marginRight:"10px",color:selectedCard.checked ? "green" : "#E83A14",textTransform:"capitalize"}} variant="contained" disabled={selectedCard.checked}>{selectedCard.checked ? "Checked" : "Check"}</Button>
                                <Button onClick={()=>CheckingHandler("CHANGE_PUBLIC",selectedCard.phase == "Published" ? "Unpublished" : "Published")} style={{marginRight:"10px",color:"#E83A14",textTransform:"capitalize"}}  variant="contained">{selectedCard.phase == "Published" ? "Make Unpublic" : "Make Public"}</Button>
                            </ButtonHolderChecked>
                            <CloseWindowIcon onClick={blackHandler}><HighlightOffOutlined style={{fontSize:"40px",color:"#F24A72",cursor:"pointer"}}></HighlightOffOutlined></CloseWindowIcon>
                            <div style={{flex:2,padding:"10px"}}>
                                <div style={{textAlign:"center",marginBottom:"15px"}}>
                                    <TitleForSingle><b>{selectedCard.title}</b></TitleForSingle>
                                    <h4><b>{selectedCard.subtitle}</b></h4>
                                    <ContentPha>{"Post Sahibi : "+selectedCard.personal.firstname+" "+selectedCard.personal.lastname}</ContentPha>
                                </div>
                                <div id="editor" className="ck-content">{HtmlParser(selectedCard.content)}</div>
                            </div>
                        </CardInner>
                </CardOutsideSingle> : null
            }
          
            <InnerDiv>
                {
                    contentDataState.map((item,index)=>{
                        return (
                            <CardOutside extend={false} onClick={()=>setSelectedCard(item)}>
                                <CardInner>
                                    <IconHolder top="10" right="10"><SecurityOutlined style={{color:item.checked ? "#00C897" : "#E83A14"}}></SecurityOutlined></IconHolder>
                                    {
                                       item.phase == "Published" ? 
                                       <IconHolder top="10" right="40"><Visibility style={{color:"#00C897"}}></Visibility></IconHolder> :
                                       <IconHolder top="10" right="40"><VisibilityOff style={{color:"#E83A14"}}></VisibilityOff></IconHolder>
                                    }
                                    <TitleImageDiv>
                                        <TitleImage src={item.titleimage}></TitleImage>
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