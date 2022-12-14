import React, {useEffect,useState,useContext,Suspense, useRef} from 'react'
import Contentcard from "../../components/shared/Cards/Contentcard";
import styled,{ThemeProvider} from "styled-components";
import {Homereq,Createrelationreq} from "../../Api/requests";
import {createusercontext} from "../../context/Usercontext";
import {CreateUtilContext} from "../../context/UtilContext"
import useScroll from "../../hooks/Scroll";
import dynamic from "next/dynamic"
import uniqid from "uniqid";
import SelectionPart from "../../components/pages/Main/SelectionPart"
import { calculatedate } from '../../utilsfunc';

const Showfollower = dynamic(() => import("../../components/pages/Main/Showfoller"), {
    suspense: true,
})


const Flexdiv=styled.div`
max-width:1250px;
width:100%;
margin:auto;
`

const ContentDiv=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
width:1200px;
padding-top:60px;
width:100%;
@media (max-width:1300px){
    justify-content:center;
    padding-left:25px;
}
`


const Container=styled.div`
padding:30px;
@media (max-width:940px){
 padding-left:0;
}
`
//flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

const BackgroundHome = styled.div`
position:relative;
width:100%;
height:420px;
`

const Trial = styled.div`
position:absolute;
bottom:0;
height:50px;
width:100%;
box-shadow: rgba(50, 50, 93, 1) 0px 30px 60px -12px, rgba(222, 222, 222, 0.9) 0px 18px 36px -18px;
`


export default function Home(){
    
    const {bottom}=useScroll();
    const firstLoad = useRef(true)
    const {setSavedWindow,setSavedWindowText} = useContext(CreateUtilContext)
    const {userdata} = useContext(createusercontext)
    const [contentdata,setcontentdata]=useState([]);
    const [order,setorder]=useState(0);
    const [errormsg,seterror]=useState(false);
    const [selectionlist,setselectionlist] = useState({
        Felsefe:{
            selected:true,
            stoprequesting:false,
        },
        Metafizik:{
            selected:false,
            stoprequesting:false,
        },
        Uzay:{
            selected:false,
            stoprequesting:false,
        },
        Biyoloji:{
            selected:false,
            stoprequesting:false,
        },   
        Biyolos:{
            selected:false,
            stoprequesting:false,
        },   
        Biyolojs:{
            selected:false,
            stoprequesting:false,
        },    
    })
    const [selectedKey,setSelectedKey]=useState(1);
    const [windowlist,setwindowlist]=useState({
        list:[],
        attribute:"",
    });
   
    useEffect(()=>{


          if(bottom || firstLoad){

                firstLoad.current = false

                Homereq({
                    currentdata:contentdata,
                    setcontentdata:setcontentdata,
                    order:order, 
                    paignation:true,
                    selectionlist:selectionlist,
                    setselection:setselectionlist,
                    category:selectedKey,
                    seterrmsg:seterror,
                })
          }

    },[order])

    useEffect(()=>{
        
        console.log("jererere")
        if(bottom){

            setorder(contentdata.length); 

        }

    },[bottom])

    const createrelation = async (postId,attribute,typeofrelation,userid)=>{
        
        await Createrelationreq({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
            relationtype:typeofrelation,
            UserIdofcontent:userid,
            setSavedWindow:setSavedWindow,
        })
        /*
        if(attribute == "Readlater" && typeofrelation == "Create"){
            setSavedWindow(true)
            setSavedWindowText("Added To Saved Posts")
        }
        */

    }
    
    
    const Showfollowers=(statelist,type)=>{
        
        const Mutatedwindow={...windowlist};
        Mutatedwindow.list = statelist;
        Mutatedwindow.attribute = type;
        setwindowlist(Mutatedwindow);

    }

    return (
            <div style={{height:`${windowlist.list.length > 0 ? "100vh" : "100%"}`,overflow:windowlist.list.length > 0 ? "hidden": "visible"}}> 
                        
                        {windowlist.list.length > 0 && (<Suspense fallback={""}><Showfollower setlist={()=>setwindowlist(prev=>{return {...prev,list:[]}})} attribute={windowlist.attribute} list={windowlist.list}></Showfollower></Suspense>)}
                        <BackgroundHome>
                            <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={"/yaprak.jpg"}></img>
                            <Trial></Trial>
                        </BackgroundHome>
                    <Container>
                        <SelectionPart  keyName={selectedKey} setSelectedKey={setSelectedKey} listContent={contentdata} setListContent={setcontentdata}></SelectionPart>
                        <Flexdiv>
                            <ContentDiv>
                                {
                                    contentdata.map((item,index)=>(
                                        <div key={uniqid()} style={{padding:"20px",maxWidth:"600px",width:"100%"}}>
                                            <Contentcard 
                                                isHomeCard={true}
                                                categoryType={item.Category != null && item.Category.categoryName}
                                                postId={item.id}
                                                content={item.content}
                                                createrelationforsmh={createrelation}
                                                showwindow={(stateoflist,type)=>Showfollowers(stateoflist,type)}
                                                like={item.Like}//bu bir obje array
                                                retweet={item.Retweet}
                                                comment={item.allcomments}
                                                readlater={item.Readlater}
                                                key={index}//key numarası
                                                description={item.description}
                                                profileimage={item.personal.mainUrl}
                                                followeds={item.personal.Followed}
                                                title={item.title}
                                                titleimage={item.titleimage != null ? item.titleimage : "/yaprak.jpg"}
                                                userfirstname={item.personal !== null ? item.personal.firstname : "notyet"}
                                                usersurname={item.personal !== null ? item.personal.lastname : "notyet"}//bir obje props
                                                userid={item.personal !== null ? item.personal.id: "notyet"}
                                                subtitle={item.subtitle}
                                                date={item.difference || calculatedate(item.createdAt)}
                                            /> 
                                        </div>
                                    ))
                                }
                            </ContentDiv>
                        </Flexdiv>
                    </Container>
                </div>
    )
}



/*<Sectionpart>
<div style={{width:"40%",marginRight:"15px"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Gönderi Türü</InputLabel>
        <Select className={usestyles.root}>
            <MenuItem value="Felsefe">Felsefe</MenuItem>
            <MenuItem value="Tarih">Tarih</MenuItem> 
            <MenuItem value="Biyoloji">Tarih</MenuItem>   
        </Select>
    </FormControl>
</div>

<div style={{width:"40%"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Sıralama Ölçütü</InputLabel>
        <Select>
            <MenuItem value="Like">Beğeni Sayısı</MenuItem>
            <MenuItem value="Date">Yüklenme Tarihi</MenuItem> 
            <MenuItem value="Retweet">Retweet Sayısı</MenuItem>   
        </Select>
    </FormControl>
</div>
<div style={{marginLeft:"auto"}}>
    <Button endIcon={<SearhIcon></SearhIcon>} variant="contained" color="secondary">Ara</Button>
</div>
</Sectionpart>
*/