import React, {useEffect,useState,useContext} from 'react'
import Contentcard from "../../components/shared/Contentcard";
import styled from "styled-components";
import {Homereq,Createrelationreq,Notificationreq} from "../../Api/Api";
import {createusercontext} from "../../context/Usercontext";
import {FormControl,InputLabel,Select,MenuItem,Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Showfollower from "../../components/pages/Main/Showfoller";
import Leaderboard from '../../components/pages/Main/Leaderboard';
import useScroll from "../../hooks/Scroll";
import {Spinner} from "../../components/styledcomponents/button"
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
`
const TitleDiv=styled.div`
width:90%;
padding:10px;
height:300px;
background-color:red;
background-image:url(/black.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const ContentDiv=styled.div`

`

const ShortDiv=styled.div`
height:50px;
max-width:500px;
margin:auto;
margin-bottom:10px;
overflow-x:hidden;
`

const InnershortDiv=styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
transition-duration:0.5s;
position:relative;
right:${({slidevalue})=>slidevalue};
`

const Selectionboxes=styled.div`
width:100px;
font-weight:600;
padding:5px;
text-align:center;
margin-left:15px;
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
align-items:center;
border-radius:50%;
position:absolute;
cursor:pointer;
left:${({leftvalue})=>leftvalue};
top:50%;
font-size:20px;
transform:translateY(-50%);
right:${({rightvalue})=>rightvalue}
`
//flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor



export default function Home({mydata}){
   
    const {bottom}=useScroll();
    const [slidevalue,setslidevalue]=useState(0);
    const {userdata} = useContext(createusercontext)
    const [contentdata,setcontentdata]=useState([...mydata]);
    const [order,setorder]=useState(0);
    const [errormsg,seterror]=useState(false);
    const [selectionlist,setselectionlist] = useState({
        Felsefe:{
            selected:false
        },
        Metafizik:{
            selected:false
        },
        Uzay:{
            selected:false
        },
        Biyoloji:{
            selected:false
        },    
    })
    const [selectedkey,setselectedkey]=useState("");
    //followerlist
    const [list,setlist]=useState([]);
    const [stoprequesting,setstopreq]=useState(false);
    const [spinner,setspinner]=useState(false);

   
    useEffect(()=>{
    
        if(!stoprequesting && bottom){
            
            setspinner(true);
            Homereq({
                currentdata:contentdata,
                setcontentdata:setcontentdata,
                order:order,
                setspinner:setspinner,
                paignation:true,
                category:selectedkey,
                seterrmsg:seterror,
                setstopreq:setstopreq,
            })

        }

    },[order])

    const Requestagain=(keyname)=>{
        
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
            setstopreq:setstopreq,
        })
        
    }

  
    const Setslidevalue=(value)=>{

       if(value == "Back" && slidevalue !== 0){
         setslidevalue(slidevalue-220)
       } 
       else if(value == "forward" && slidevalue < 600){
        setslidevalue(slidevalue+220)
       }
    }


    useEffect(()=>{
        
        if(bottom)
        setorder(mydata.length+10);

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

       const Mutated = {...selectionlist};

       for (const key in Mutated) {
           Mutated[key].selected=false;
       }
       Mutated[keyname].selected = true;
       Requestagain(keyname);
       setselectionlist(Mutated);
       setselectedkey(keyname)
    }
   

    return (
        <div style={{height:`${list.length > 0 ? "100vh" : "100%"}`,overflow:"hidden"}}> 
            <div style={{paddingLeft:"100px"}}>
                <TitleDiv>
                    <h3 style={{color:"white"}}><FormatQuote style={{transform:"rotateY(180deg)"}}></FormatQuote> Bil ki nezaket başkasını rahatsız etmemek değil, asıl başkası için rahatsızlık duymaktır.<FormatQuote></FormatQuote></h3>
                </TitleDiv>
                { list.length > 0 ?

                  <Showfollower setlist={()=>setlist([])} list={list}></Showfollower>

                : null
                
                }
                <Flexdiv>
                    <ContentDiv style={{maxWidth:"650px",paddingTop:"10px"}}>
                       <div style={{position:"relative"}}>
                               <Iconholder onClick={()=>Setslidevalue("Back")} leftvalue="20px" rightvalue={""}>
                                        <ArrowBackIos style={{color:"black",fontSize:"20px"}}></ArrowBackIos>
                                </Iconholder>
                                <Iconholder onClick={()=>Setslidevalue("forward")} leftvalue={""} rightvalue="15px">
                                        <ArrowForwardIos  style={{color:"black",fontSize:"20px"}}></ArrowForwardIos>
                                </Iconholder>
                              <ShortDiv>
                                  
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
                            
                       </div>
                       <div style={{textAlign:"center",display:"flex",justifyContent:"center",marginBottom:"20px"}}>
                                {
                                    spinner ? <Spinner></Spinner> : null
                                }
                        </div>

                        {

                        contentdata.length &&

                        contentdata.map((item,index)=>(
                            <Contentcard 
                            postId={item.id}
                            content={item.content}
                            createrelationforsmh={createrelation}
                            showwindow={(stateoflist)=>setlist(stateoflist)}
                            like={item.Like}//bu bir obje array
                            retweet={item.Retweet}
                            comment={item.allcomments}
                            readlater={item.Readlater}
                            key={index}//key numarası
                            profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                            title={item.title}
                            titleimage={"yaprak.jpg"}
                            username={item.personal !== null ? item.personal.firstname : "notyet"}
                            usersurname={item.personal !== null ? item.personal.lastname : "notyet"}//bir obje props
                            userid={item.personal !== null ? item.personal.id: "notyet"}
                            subtitle={item.subtitle}
                            date={item.createdAt}
                            />
                        ))
                        }
                    </ContentDiv>
                </Flexdiv>
           </div>
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