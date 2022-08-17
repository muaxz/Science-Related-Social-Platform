import React,{useEffect,useState,useContext,useCallback, useRef, Suspense} from 'react'
import styled from "styled-components";
import {createusercontext} from "../../context/Usercontext"
import {NightLightP, Porfileimage} from "../../components/styledcomponents/Globalstyles"
import {Createuserrelation,Getuserprofilecontent,Createrelationreq,UpdateNotificationactive,Userprofilefollowlist,DeletePost} from "../../Api/requests"
import {Button} from "@material-ui/core"
import Link from "next/link";
import useScroll from "../../hooks/Scroll";
import dynamic from "next/dynamic"
import Window from "../../components/UI/window"
import {Notifications, NotificationsActive,Settings,Person} from '@material-ui/icons';
import Contentmap from "../../components/pages/Profile/contentmap";
import Followlist from '../../components/pages/Profile/followlists';


const Editwindow = dynamic(()=>import("../../components/pages/Profile/Editwindow"),{
    suspense:true
})



const Exteriordiv=styled.div`
padding-top:60px;
width:100%;
height:${({noScroll})=>noScroll ? "100vh" : "100%"};
overflow:${({noScroll})=>noScroll ? "hidden" : "visible"};
@media (max-width:940px){
    padding-left:0;
}
`

const Innerdiv=styled.div`
height:100%;
width:100%;
`

const Imagesection=styled.div`
position:relative;
height:250px;
background-color:#723d46;
position:relative;
`

const ProfileImageholder=styled.div`
position:absolute;
width:120px;
height:120px;
top:-120px;
left:120px;
@media (max-width:1400px){
    position:absolute;
    width:90px;
    height:90px;
    top:-100px;
    left:130px;
    color:White;
}
`

const BackgroundImage=styled.div`
max-width:750px;
margin:auto;
height:100%;
background-image:${({photo})=>`url(${photo})`};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const Contentpart=styled.div`
display:flex;
padding-bottom:20px;
`

const Usersection=styled.div`
position:absolute;
top:360px;
left:15%;
padding-top:15px;
max-width:350px;
transform:translateX(-50%);
text-align:center;
width:100%;
@media (max-width:1400px){
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:180px;
    color:White;
}
`

const Contentsection=styled.div`
border-right:1px solid ${({theme})=>theme.contentSectionBorderColor};
border-left:1px solid ${({theme})=>theme.contentSectionBorderColor};
max-width:751px;
height:100vh;
margin:auto;
width:100%;
`
const Optionbar=styled.div`
display:flex;
justify-content:space-around;
margin:auto;
max-width:500px;
width:100%;
padding:20px;
`

const Options=styled.div`
cursor:pointer;
transition:all 0.1s;
font-weight:600;
color:${({applyborder,theme})=>applyborder ? "#d62828" : theme.p_Color};
`

const ButtonHolder=styled.div`
display:flex;
align-items:center;
position:absolute;
bottom:10px;
right:70px;
@media (max-width:1050px){
   top:-170px;
   left:15px;
}
`

const P = styled.p`
font-weight:600;
`

const Description=styled.div`
width:80%;
margin:auto;
@media (max-width:1400px){
  display:none;
}
`

const LabelsUnderCounts = styled.p`
background-color:lightgrey;
border-radius:25px;
margin-top:5px;
padding:7px;
cursor:pointer;
&:hover{
   
    box-shadow:-5px 5px #ef233c;
    transform:translate(5px,-5px);
    transition:0.2s;
}
`
const CountDisplay = styled.div`
padding-left:20px;
`

export default function Profile({Mydata,Counts,Contentdata,query}){

    //use reducer try on it
    console.log(Mydata)
    const{userdata}=useContext(createusercontext);
    const Preventspam = useRef(true)
    const Preventspam2 = useRef(true)
    const {bottom} = useScroll();
    const[contentdata,setcontentdata]=useState(Contentdata);
    const[GarbageAcitve,setGarbageActive] = useState(false)
    const[checkuserid,setcheckuserid]=useState(false);
    const[beingfollowed,setbeingfollowed]=useState(false);
    const[Timetorender,settimetorender]=useState(false);
    const[notificationactive,setnotificationactive]=useState(false);
    const[activeedit,setactiveedit] = useState(false);
    const[editforsettings,seteditforsettings] = useState(false)
    const[showfollowinglist,setshowfollowinglist] = useState("")
    const[FollowList,SetFollowList] = useState([]);
    const postWillBeDeleted = useRef(null)

    const[options,setoptions]=useState({
        Post:{
            name:"Posts",
            bottom:false,
        },
        Like:{
            name:"Likes",
            bottom:false,
        },
        Reshow:{
            name:"Signs",
            bottom:false,
        } 
    })
   
   useEffect(()=>{
      //sadece paignation zaten query değişince ilk 10 value serverside tarafından çekiliyor
      var Leakcontrolloer = true;
     
      
      //sadece scroll down oldugunda
      //console.log("sa")
      if(bottom){

            Getuserprofilecontent({
                UserId:query.username,
                category:query.name,
                setdata:setcontentdata,
                contentdata:contentdata,
                paignation:true,
                ownerpost:query.name == "Post" ? "true" : "false",
                Leakcontrolloer:Leakcontrolloer,
                order:contentdata.length,
                currentdata:contentdata,
            })
      }

      return ()=>{
         Leakcontrolloer=false;
      }

   },[bottom])

    useEffect(()=>{
        if(query.name == "Post" || query.name == "Liked" || query.name == "Reshow")
        Handleoptions(query.name)   
    },[query])

    useEffect(()=>{
         
        if(userdata.UserId){
              
            settimetorender(true);
            setcheckuserid(false);
            console.log(query.username)
            if(userdata.UserId == query.username){
             

                setcheckuserid(true);
                //burada takip et butonu ve bildirim butonu kalkıcak yerine belki ayarlar.
    
    
            }
            else{
    
                   Mydata.Followed.forEach(item=>{
            
                        if(item.id == userdata.UserId){
                            
                            if(item.UserUser.Active == true){

                                setnotificationactive(true)

                            }
                            setbeingfollowed(true)
                            //zaten buraya girememiş ise default değer false
                        }
                    
                    });
            }

        }
    
    },[userdata,query])

    useEffect(()=>{

      setcontentdata([...Contentdata])
      setshowfollowinglist("")
      setactiveedit(false)

    },[query])
    //
    const Relationrequest=useCallback((postId,attribute,typeofrelation,userid)=>{
        
        Createrelationreq({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
            relationtype:typeofrelation,
            UserIdofcontent:userid,
        })

    },[userdata.UserId])
    //sending following request
    const Followingrequest=()=>{

        //todo response gelene kadar bekle hamleye izin verme
       if(Preventspam2.current){

            Preventspam2.current = false
            setbeingfollowed(!beingfollowed);

            if(userdata.UserId){

                Createuserrelation({
                    UserId:userdata.UserId,
                    FollowedId:Mydata.id,
                    checkiffollow:beingfollowed,
                    Prevent:Preventspam2
                })

            }
       }
        
           
    }
    //Aactivate notification bell
    const NotificationActivate = ()=>{

        if(Preventspam.current){

            Preventspam.current = false
            setnotificationactive(!notificationactive)

            UpdateNotificationactive({
                FollowerId:userdata.UserId,
                FollowedId:Mydata.id,
                currentactive:notificationactive,
                Prevent:Preventspam
            })
        }
       
    }
    //handling sorting bar
    const Handleoptions=(optiontype)=>{
        
        const optionobj={...options};

        for (const key in optionobj) {
            optionobj[key].bottom=false;
        }
        
        optionobj[optiontype].bottom=true;
        setoptions(optionobj);
    }

    const Editwindowhandler=(isforedit,close)=>{

        if(isforedit) seteditforsettings(true)

        if(close) seteditforsettings(false)
            
        setactiveedit(!activeedit)
    }

    const ShowFollowList = (requestType)=>{
        
        Userprofilefollowlist({
            requestType:requestType,
            UserId:query.username,
            SetFollowList:SetFollowList,
            FollowList:FollowList
        })

        setshowfollowinglist(requestType)

    }

    const prepForDeletion=(prepType,PostId)=>{
      
        if(prepType == "DELETE"){

            const copyContents = [...contentdata]
            const index = copyContents.findIndex((item)=>item.id == postWillBeDeleted.current)
            console.log(index)
            copyContents.splice(index,1)
            setcontentdata(copyContents)
            DeletePost({PostId:postWillBeDeleted.current}) 
            setGarbageActive(false)

        }else if(prepType == "CANCEL"){

            setGarbageActive(false)

        }
        else if(prepType == null){
            
            setGarbageActive(true)  
            postWillBeDeleted.current = PostId;  

        }

    }

    return (
        <Exteriordiv noScroll={activeedit || GarbageAcitve}>
            <Window closefunction={(value)=>prepForDeletion(value,null)} active={GarbageAcitve} type="garbage">Are your sure that you want to delete this post ?</Window>
            {
                activeedit &&

                (<Suspense fallback=""><Editwindow isWindowforsettings={editforsettings} closefunc={()=>Editwindowhandler(false,true)} editdata={Mydata} active={activeedit} /></Suspense>)

            }
            <Innerdiv>
                <Imagesection>
                    <BackgroundImage photo={Mydata.backgroundUrl} /> 
                    {       //burada context userId yok ise buna izin vermiyorum ancak setstate oldugunda gösterim var
                            //TODO this should be fixed during navigaiton
                            //userdata.userıd yoksa kullanıcı giriş yapmamıştır
                            !checkuserid && Timetorender ?

                            (<ButtonHolder>
                                {
                                    beingfollowed && (

                                    <React.Fragment>
                                        
                                        {
                                            notificationactive ? 
                                                                                    
                                            (<NotificationsActive style={{color:"white",marginRight:"10px",cursor:"pointer"}} onClick={NotificationActivate}></NotificationsActive>)

                                            :

                                            (<Notifications style={{color:"white",marginRight:"10px",cursor:"pointer"}} onClick={NotificationActivate}></Notifications>)
                                        }

                                    </React.Fragment>)
                                }
                            <Button onClick={()=>Followingrequest(beingfollowed)} style={{color:"white",backgroundColor:"#0ead69",textTransform:"none"}} variant="contained">{beingfollowed ? "Unfollow" : "Follow"}</Button>
                        </ButtonHolder>)

                        : 
                          Timetorender &&
                            (<ButtonHolder>
                                <Button onClick={()=>Editwindowhandler(true,false)} style={{borderRadius:"25px",marginRight:"10px"}} variant="contained"><Settings></Settings></Button>
                                <Button onClick={()=>Editwindowhandler(false,false)} endIcon={<Person></Person>} variant="contained" style={{color:"white",backgroundColor:"#e63946",textTransform:"none",borderRadius:"25px"}}>Edit Profile</Button>
                            </ButtonHolder>)
                    }     
                </Imagesection>
                <Contentpart>
                     <Usersection>
                         <ProfileImageholder>
                             <Porfileimage  style={{border:"4px solid white"}} width="100%" height="100%" profile={Mydata.mainUrl ?? "/realuserphoto.png"}></Porfileimage>
                         </ProfileImageholder>
                         <NightLightP>{Mydata.firstname + " " + Mydata.lastname}</NightLightP>
                         <span style={{color:"#6c757d"}}>{Mydata.occupation}</span>
                         <div style={{display:"flex",marginTop:"10px",marginBottom:"40px"}}>
                            <CountDisplay>
                                <NightLightP>{Counts.Followedcount}</NightLightP>
                                <LabelsUnderCounts  onClick={()=>ShowFollowList("FOLLOWER")}>Followers</LabelsUnderCounts>
                            </CountDisplay>
                            <CountDisplay>
                                <NightLightP>{Counts.Followercount}</NightLightP>
                                <LabelsUnderCounts  onClick={()=>ShowFollowList("FOLLOWING")}>Following</LabelsUnderCounts>
                            </CountDisplay>
                            <CountDisplay>
                                <NightLightP>{Counts.Contentcount}</NightLightP>
                                <LabelsUnderCounts  >Gönderi</LabelsUnderCounts>
                            </CountDisplay>
                         </div>
                         <Description style={{width:"80%",margin:"auto"}}>
                             <hr></hr>
                             <NightLightP style={{padding:"15px"}}>{Mydata.Personaltext}</NightLightP>
                             <hr></hr>
                         </Description>
                     </Usersection>
                     <Contentsection>
                            {
                                showfollowinglist.length == 0 &&

                                <Optionbar>
                                    {
                                        Object.keys(options).map((item,index)=>(
                                            <Link  
                                                key={index}
                                                href={{
                                                    pathname:`/profile/${query.username}`,
                                                    query:{name:item}
                                                }}     
                                                scroll={false}                             
                                            >
                                                <Options applyborder={options[item].bottom} onClick={()=>Handleoptions(item)}>{options[item].name}</Options>
                                            </Link>
                                        ))
                                    }
                                </Optionbar>
                            }   
                           <div style={{paddingRight:"10px",paddingLeft:"10px",maxWidth:"700px",margin:"auto",paddingBottom:"20px"}}>
                                {
                                  showfollowinglist.length > 0 ? <Followlist type={showfollowinglist} goBackToContent={()=>setshowfollowinglist("")} list={FollowList}></Followlist> : <Contentmap  deleteThePost={prepForDeletion} norecord={query.name} relationfunc={Relationrequest} contentlist={contentdata}/> 
                                }
                           </div>
                     </Contentsection>
                </Contentpart>
            </Innerdiv>
        </Exteriordiv>
    )
}
