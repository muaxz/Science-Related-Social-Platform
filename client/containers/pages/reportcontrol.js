import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Parser from "react-html-parser"
import {IconButton,Button,TextField,FormControl,MenuItem,Select,InputLabel,Box} from "@material-ui/core"
import {makeThePostUnpublic,deleteTheReport,sendReportMessage} from "../../Api/requests"
import {Delete,Email,VisibilityOff,Send} from "@material-ui/icons"
import {Porfileimage} from "../../components/styledcomponents/Globalstyles"

const ExteriorDiv = styled.div`
max-width:1300px;
height:600px;
margin:auto;
margin-top:40px;
`

const InnerDiv = styled.div`
display:flex;
padding:10px;
`

const LeftDiv = styled.div`
flex:2;
padding-right:10px;
padding-top:10px;
height:600px;
overflow:auto;
`

const RightDiv = styled.div`
position:relative;
border:3px solid lightgrey;
flex:3;
border-radius:7px;
height:580px;
background-color:white;
`

const ContentBoxes = styled.div`
position:relative;
height:150px;
background-color:white;
width:100%;
overflow:hidden;
padding:10px;
border-radius:7px;
line-height:20px;
margin-bottom:10px;
border:3px solid ${({activeClick})=>activeClick ? "#FF6363" : "#D3DEDC"};
&:hover{
    cursor:pointer;

}
`

const MessageBox = styled.div`
position:absolute;
padding:10px;
border-radius:7px;
text-align:center;
top:50%;
left:50%;
max-width:400px;
width:80%;
transform:translate(-50%,-50%);
background-color:white;
z-index:101;
`



const BottomShadow = styled.div`
position:absolute;
bottom:${({bottomValue})=>bottomValue}px;
height:20px;
width:100%;
background-color:white;
opacity:${({opacityValue})=>opacityValue};
`
const CounterDiv = styled.div`
position:absolute;
top:5px;
right:5px;
border-radius:50%;
width:25px;
height:25px;
background-color:#C65D7B;
color:white;
text-align:center;
`
const CoverDiv = styled.div`
position:absolute;
width:100%;
height:580px;
border-radius:7px;
background: rgba(0, 0, 0,${({activeCover})=>activeCover ? "0.7" : "0"});
z-index:${({activeCover})=>activeCover ? "100" : "-1"};
`

const SearchBar = styled.div`
display:flex;
margin-bottom:10px;

`
const reportDetail = {
0:"Ciplakik",
1:"Nefret Soylemi",
2:"Siyasi icerik",
3:"Hakaret"
}

const OptionsForCover = {
MAKE_UNPUBLIC_OR_PUBLIC : "MAKE_UNPUBLIC_OR_PUBLIC",
SEND_MESSAGE  : "SEND_MESSAGE",
DELETE_REPORT : "DELETE_REPORT"
}


function ReportControl({reportList,controlType}){

    const [selectedReport,setSelectedReport] = useState({})
    const [List,setList] = useState(reportList)
    const [searchValues,setSearchValues] = useState({
        text : "",
        select : "default"
    })
    const [activeCover,setActiveCover] = useState("")
    const [valueReportMessage,setValueReportMessage] = useState("")
    var coverContent = null;
    
    if(activeCover == OptionsForCover.SEND_MESSAGE){

       coverContent = 
       (<MessageBox>
           <div>
             <TextField value={valueReportMessage} onChange={(e)=>setValueReportMessage(e.target.value)} fullWidth multiline rows={4} variant="outlined" label="Aciklama..." />
           </div>
            <div style={{marginTop:"10px"}}>
                <Button onClick={sendMessage} endIcon={<Send></Send>} color="secondary" fullWidth variant="contained">Gonder</Button>
            </div>
       </MessageBox>)

    }else if(activeCover == OptionsForCover.MAKE_UNPUBLIC_OR_PUBLIC){

       coverContent = 
           (<MessageBox>
                 {selectedReport.visibilityDetail ? "Gonderiyi yayindan kaldirmak istediginden emin misin?" : "Gonderiyi tekrar yayina almak istediginden emin misin ?"}
                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"40px"}}>
                    <div><Button style={{marginRight:"10px"}} variant="contained" color="secondary" onClick={()=>actionHandler("YES",OptionsForCover.MAKE_UNPUBLIC_OR_PUBLIC)}>Evet</Button></div>
                    <div><Button variant="contained" color="primary" onClick={()=>actionHandler("NO",OptionsForCover.MAKE_UNPUBLIC_OR_PUBLIC)}>Hayir</Button></div>
                 </div>
           </MessageBox>)

    }else if(activeCover == OptionsForCover.DELETE_REPORT){

        coverContent =
            (<MessageBox>
              Raporu Silmek istediginden Emin misin?
                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"40px"}}>
                    <div><Button style={{marginRight:"10px"}} variant="contained" color="secondary" onClick={()=>actionHandler("YES",OptionsForCover.DELETE_REPORT)}>Evet</Button></div>
                    <div><Button variant="contained" color="primary" onClick={()=>actionHandler("NO",OptionsForCover.DELETE_REPORT)}>Hayir</Button></div>
                 </div>
            </MessageBox>)

    }
    
    useEffect(()=>{
           const Reports = [...List]
           for (let i = 0; i < Reports.length; i++) {
                Reports[i].reportDetail = reportDetailHandler(Reports[i].ReportCheckBox)
                Reports[i]._index_ = i
                Reports[i].visibilityDetail = Reports[i].Content.phase == "Unpublished" ? false : true
           }
           setList(Reports)
           setSelectedReport(List[0])
    },[])
   
    const SwhowOnRight = (index,item)=>{
        setSelectedReport(item)
    }

    const reportDetailHandler=(numCheckBox)=>{
         for (const key in reportDetail) {
              if(numCheckBox == key){
                 return reportDetail[key]
              }
         }
    }

    const deleteBox=(item)=>{
        
        const Reports = [...List]
        var indexOfElement = Reports.findIndex((item)=>item.id == selectedReport.id)
        Reports.splice(indexOfElement,1)
        deleteTheReport({
            reportID:selectedReport.id
        })
        setList(Reports)
        setSelectedReport({})
        setActiveCover("")
    }

    const actionHandler=(yesNoValue,actionType)=>{

        setActiveCover(actionType)

        if(yesNoValue == "YES"){

            if(actionType == OptionsForCover.MAKE_UNPUBLIC_OR_PUBLIC){

                 makePublic_or_Unpublic()

            }
            else if(actionType == OptionsForCover.DELETE_REPORT){

                 deleteBox()

            }else if(actionType == OptionsForCover.SEND_MESSAGE){

                 sendMessage()

            }
        }
        else if(yesNoValue == "NO"){
            setActiveCover("")
        }
    
    }
    
    const makePublic_or_Unpublic=()=>{
        const Reports = [...List]
        Reports[selectedReport._index_].visibilityDetail = !Reports[selectedReport._index_].visibilityDetail;
        setList(Reports)
        setSelectedReport(Reports[selectedReport._index_])
        setActiveCover("")
        makeThePostUnpublic({
            contentID:Reports[selectedReport._index_].Content.id,
            publicValue:selectedReport.visibilityDetail
        })
    }

   
    function sendMessage(){
        console.log("burada")
        sendReportMessage({
            TakerId:selectedReport.Content.personal.id,
            reportMessage:valueReportMessage,
            ContentId:selectedReport.Content.id
        })

        setActiveCover("")
        setValueReportMessage("")
    }
    
    function handleChange(event,valueKey){
        const searchValues_Mutated = {...searchValues}
        searchValues_Mutated[valueKey] = event.target.value
        setSearchValues(searchValues_Mutated)
    }

    return (  
        <ExteriorDiv>
            
            <InnerDiv>
                <LeftDiv>
                    {
                        true ? 
                        <SearchBar>
                            <div style={{paddingRight:"10px"}}>
                               <TextField  variant='outlined' value={searchValues.text} onChange={(e)=>handleChange(e,"text")} label="Baslik Ara..."></TextField>
                            </div>
                            <div style={{flex:1}}>
                                <FormControl fullWidth>
                                        
                                        <Select
                                            
                                            variant="outlined"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={searchValues.select}
                                            onChange={(e)=>handleChange(e,"select")}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        
                                        >
                                            <MenuItem disabled value="default">
                                                <em>Katagori Sec</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            <MenuItem value={40}>Ten</MenuItem>
                                            <MenuItem value={50}>Twe</MenuItem>
                                            <MenuItem value={60}>Thirty</MenuItem>
                                          
                                        </Select>
                                       
                                    </FormControl>
                            </div>
                           
                        </SearchBar> : null
                    }
                    {
                        List.length > 0 ?
                        
                        List.map((item,index)=>{
                            return (
                                <ContentBoxes key={index} activeClick={selectedReport.id == item.id} onClick={()=>SwhowOnRight(index,item)}>
                                     <CounterDiv>{index+1}</CounterDiv>
                                     <BottomShadow opacityValue={0.9} bottomValue={0}></BottomShadow>
                                     <BottomShadow opacityValue={0.7} bottomValue={20}></BottomShadow>
                                     <BottomShadow opacityValue={0.4} bottomValue={40}></BottomShadow>
                                     <BottomShadow opacityValue={0.1} bottomValue={60}></BottomShadow>
                                      {item.Content.content}The Nairobi Expressway is Kenya’s first major public-private partnership, which started in October 2019. The Kenya National Highways Authority (KeNHA) has collaborated with the Chinese company, China Road and Bridge Corporation, for the design, construction, and financing of the 27-kilometer road.

                                      Kenya hopes the $600 million toll road sparks modernization and increases tourism as it links Jomo Kenyatta International Airport east of the capital city with the Nairobi-Nakuru highway west of the capitol. In an interview with state outlet Kenya Broadcasting Corportation (KBC), Transport Cabinet Secretary James Macharia said the road will cut down on the city’s notorious traffic from as long as three hours during rush hour to as fast as 20 minutes. Macharia added it would save money lost in bad traffic and create more jobs.
                                </ContentBoxes>
                            )
                        })

                        : "Henuz bi rapor bildirimi yok..."
                        
                        
                    }
                </LeftDiv>
                <RightDiv>
                    {activeCover.length > 0 ? coverContent : null}
                    <CoverDiv activeCover={activeCover.length > 0 ? true : false}></CoverDiv>
                    {
                        selectedReport["id"] ?

                        <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                            <div>
                                <p><b>Rapor Turu: {selectedReport.reportDetail}</b></p>
                                <p><b>Rapor Aciklamasi : {selectedReport.ReportMessage}</b></p>
                                <div style={{display:"flex",alignItems:"center",marginTop:"20px"}}>
                                    <Porfileimage width={"35px"} height="35px" profile="/boxHistory.jpg"></Porfileimage>
                                    <p style={{marginRight:"7px",marginLeft:"10px"}}>{selectedReport.Content.personal.firstname}</p>
                                    <p>{selectedReport.Content.personal.lastname}</p>
                                </div>
                                <div className="ck-content" style={{marginTop:"20px",wordBreak:"break-word"}}>{Parser(selectedReport.Content.content)}</div>
                            </div>
                            <div style={{display:"flex"}}>
                                <div>
                                   <IconButton onClick={()=>actionHandler("",OptionsForCover.MAKE_UNPUBLIC_OR_PUBLIC)} size="medium"><VisibilityOff style={{color:selectedReport.visibilityDetail ? "" : "red"}} fontSize="large"></VisibilityOff></IconButton>
                                </div>
                                <div>
                                   <IconButton onClick={()=>actionHandler("",OptionsForCover.DELETE_REPORT)} size="medium"><Delete fontSize="large"></Delete></IconButton>
                                </div>
                                <div>
                                   <IconButton onClick={()=>actionHandler("",OptionsForCover.SEND_MESSAGE)} size="medium"><Email fontSize="large" style={{color:"#FF5959"}}></Email></IconButton>
                                </div>
                            </div>
                        </div>

                        : null
                    }
                </RightDiv>
            </InnerDiv>
        </ExteriorDiv>
    );
}

export default ReportControl;