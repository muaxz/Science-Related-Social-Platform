import React, {useEffect,useState,useContext} from 'react'
import Contentcard from "../../components/shared/Cards/Contentcard";
import styled from "styled-components";
import {Homereq,Createrelationreq,Notificationreq} from "../../Api/requests";
import {createusercontext} from "../../context/Usercontext";
import {makeStyles} from "@material-ui/core/styles"
import Showfollower from "../../components/pages/Main/Showfoller";
import useScroll from "../../hooks/Scroll";
import {Spinner} from "../../components/styledcomponents/Globalstyles"
import uniqid from "uniqid";
import { ArrowBackIos, ArrowForwardIos, FormatQuote } from '@material-ui/icons';



const CssTextField = makeStyles({
    root: {
      '& .MuiSelect-root': {
        color: "black"
      }
    }
});

const Flexdiv=styled.div`
display:flex;
justify-content:space-between;
max-width:1250px;
width:100%;
@media (max-width:940px){
    justify-content:center;
}
`
const TitleDiv=styled.div`
width:100%;
padding:10px;
height:300px;
background-image:url(/way.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const ContentDiv=styled.div`
max-width:650px;
padding-top:20px;
width:100%;
padding-right:25px;
@media (max-width:940px){
    justify-content:center;
    padding-left:25px;
}
`

const ShortDiv=styled.div`
position:sticky;
top:60px;
height:50px;
max-width:650px;
width:100%;
margin:auto;
margin-bottom:10px;
overflow-x:hidden;
background-color:white;
z-index:120;
`

const InnershortDiv=styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
justify-content:space-around;
transition-duration:0.5s;
position:relative;
right:${({slidevalue})=>slidevalue};
`

const Selectionboxes=styled.div`
width:100px;
font-weight:600;
padding:5px;
margin-left:5px;
text-align:center;
font-size:14px;
border-radius:50px;
cursor:pointer;
background-color:${({selected})=>selected ? "#ef233c" :"#ced4da"};
color:${({selected})=>selected ? "white" :"black"};
flex-shrink:0;
`
const Iconholder=styled.div`
display:flex;
justify-content:center;
color:red;
align-items:center;
position:absolute;
padding:6px;
height:100%;
cursor:pointer;
background-color:white;
opacity:1;
z-index:150;
left:${({leftvalue})=>leftvalue};
top:50%;
font-size:20px;
transition-duration:0.1s;
transform:translateY(-50%);
right:${({rightvalue})=>rightvalue};
box-shadow:10px 10px 60px 30px white;
`
const Container=styled.div`
padding-left:100px;
@media (max-width:940px){
 padding-left:0;
}
`
//flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor



export default function Home({mydata}){
    
    const {bottom}=useScroll();
    const [slidevalue,setslidevalue]=useState(-30);
    const {userdata} = useContext(createusercontext)
    const [contentdata,setcontentdata]=useState(mydata);
    const [order,setorder]=useState(0);
    const [errormsg,seterror]=useState(false);
    const [selectionlist,setselectionlist] = useState({
        Felsefe:{
            selected:false,
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
    const [selectedkey,setselectedkey]=useState("Uzay");
    const [windowlist,setwindowlist]=useState({
        list:[],
        attribute:"",
    });
    const [stoprequesting,setstopreq]=useState(false);
    const [spinner,setspinner]=useState(false);

  
    useEffect(()=>{

        
        if(!selectionlist[selectedkey].stoprequesting && bottom){
           
            setspinner(true);
            Homereq({
                currentdata:contentdata,
                setcontentdata:setcontentdata,
                order:order, 
                setspinner:setspinner,
                paignation:true,
                selectionlist:selectionlist,
                setselection:setselectionlist,
                category:selectedkey,
                seterrmsg:seterror,
            })

        }

    },[order])

    const Requestagain=(keyname)=>{

        const selections = {...selectionlist};
        selections[keyname].stoprequesting = false;
        setselectionlist(selectionlist);

        setspinner(true);
        setorder(10);
        Homereq({
            currentdata:contentdata,
            setcontentdata:setcontentdata,
            order:10,
            setspinner:setspinner,
            category:keyname,
            paignation:false,
            seterrmsg:seterror,
        })
        
    }

  
    const Setslidevalue=(value)=>{

       if(value == "Back" && slidevalue >= 20){
         setslidevalue(slidevalue-220)
       } 
       else if(value == "forward" && slidevalue < 600){
        setslidevalue(slidevalue+220)
       }
    }


    useEffect(()=>{
        console.log(bottom);
        if(bottom){
            setorder(contentdata.length+10); 
        }

    },[bottom])

    const createrelation=(postId,attribute,typeofrelation,userid)=>{
        
        Createrelationreq({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
            relationtype:typeofrelation,
            UserIdofcontent:userid,
        })
    }
    
    const Selectionhander = (keyname) =>{
        
       window.scrollTo({top:350,behavior:"auto"})
       
       if(keyname == selectedkey){
         return;
       }
       else{
           
            const Mutated = {...selectionlist};

            for (const key in Mutated) {
                Mutated[key].selected=false;
            }
            Mutated[keyname].selected = true;
    
            Requestagain(keyname);
            setselectionlist(Mutated);
            setselectedkey(keyname)
       }
      
      
    }

    const Showfollowers=(statelist,type)=>{
        
        const Mutatedwindow={...windowlist};
        Mutatedwindow.list = statelist;
        Mutatedwindow.attribute = type;
        setwindowlist(Mutatedwindow);

    }
   

    return (
        <div style={{height:`${windowlist.list.length > 0 ? "100vh" : "100%"}`,overflow:windowlist.list.length > 0 ? "hidden": "visible"}}> 
            <Container>
                {windowlist.list.length > 0 ?

                  <Showfollower setlist={()=>setwindowlist(prev=>{return {...prev,list:[]}})} attribute={windowlist.attribute} list={windowlist.list}></Showfollower>

                : null
                
                }
                <Flexdiv>
                    <ContentDiv style={{maxWidth:"650px",minHeight:"600px",paddingTop:"30px",width:"100%",paddingRight:"30px"}}>
                            <ShortDiv>
                                <Iconholder onClick={()=>Setslidevalue("Back")} leftvalue="0" rightvalue={""}>
                                   <i style={{color:"red"}} class="fas fa-chevron-left"></i>
                                </Iconholder>
                                <Iconholder onClick={()=>Setslidevalue("forward")} leftvalue={""} rightvalue="0">
                                   <i style={{color:"black"}} class="fas fa-chevron-right"></i>
                                </Iconholder>   
                                <InnershortDiv slidevalue={slidevalue+"px"}>
                                    {
                                        Object.keys(selectionlist).map((item)=>{

                                            return (
                                                <Selectionboxes selected={selectionlist[item].selected} onClick={()=>Selectionhander(item)}>
                                                    <span>{item}</span>                           
                                                </Selectionboxes>
                                            )

                                        })
                                    }
                                </InnershortDiv>
                                </ShortDiv> 

                       <div style={{textAlign:"center",display:"flex",justifyContent:"center",marginBottom:"20px",marginTop:"30px"}}>
                                {
                                    spinner ? <Spinner></Spinner> : null
                                }
                        </div>

                        {

                            contentdata.map((item,index)=>(
                                <Contentcard 
                                postId={item.id}
                                content={item.content}
                                createrelationforsmh={createrelation}
                                showwindow={(stateoflist,type)=>Showfollowers(stateoflist,type)}
                                like={item.Like}//bu bir obje array
                                retweet={item.Retweet}
                                comment={item.allcomments}
                                readlater={item.Readlater}
                                key={uniqid()}//key numarası
                                profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                                title={item.title}
                                titleimage={"yaprak.jpg"}
                                userfirstname={item.personal !== null ? item.personal.firstname : "notyet"}
                                usersurname={item.personal !== null ? item.personal.lastname : "notyet"}//bir obje props
                                userid={item.personal !== null ? item.personal.id: "notyet"}
                                subtitle={item.subtitle}
                                date={item.createdAt}
                                />
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