import React,{useEffect,useState,useContext,useCallback, useRef} from 'react'
import styled from "styled-components";
import {createusercontext} from "../../context/Usercontext"
import {Porfileimage} from "../../components/styledcomponents/button"
import {Createuserrelation,Getuserprofilecontent,Createrelationreq,UpdateNotificationactive} from "../../Api/Api"
import Contentcard from "../../components/shared/Contentcard";
import {Button} from "@material-ui/core"
import Link from "next/link";
import useScroll from "../../hooks/Scroll";
import { EditRounded, Notifications, NotificationsActive,Settings,Person} from '@material-ui/icons';
import Contentmap from "../../components/pages/Profile/contentmap";
import Editwindow from "../../components/pages/Profile/Editwindow"


const Exteriordiv=styled.div`
max-width:1400px;
padding-top:60px;
width:100%;
height:100vh;
overflow:${({editactive})=>editactive ? "hidden" : "visible"};
padding-bottom:20px;
padding-left:60px;
@media (max-width:940px){
    padding-left:0;
}
`

const Innerdiv=styled.div`
height:100%;
`

const Imagesection=styled.div`
position:relative;
height:250px;
position:relative;
`

const ProfileImageholder=styled.div`
position:absolute;
width:120px;
height:120px;
top:-120px;
left:140px;
@media (max-width:1050px){
    position:absolute;
    width:90px;
    height:90px;
    top:-100px;
    left:160px;
    color:White;
}
`

const BackgroundImage=styled.div`
width:100%;
height:100%;
background-image:url(/yaprak.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const Contentpart=styled.div`
display:flex;
padding-bottom:20px;
`

const Usersection=styled.div`
position:sticky;
top:250px;
margin-top:80px;
align-self:flex-start;
max-width:400px;
text-align:center;
width:100%;
@media (max-width:1050px){
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:100px;
    color:White;
}
`

const Contentsection=styled.div`
max-width:1000px;
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
color:${({applyborder})=>applyborder ? "#d62828" : "black"};
`

const ButtonHolder=styled.div`
display:flex;
align-items:center;
position:absolute;
bottom:10px;
right:10px;
`

const P = styled.p`
font-weight:600;
`

const Description=styled.div`
width:80%;
margin:auto;
@media (max-width:1050px){
  display:none;
}
`


export default function Profile({Mydata,Counts,Contentdata,query}){

    //use reducer try on it
    const{userdata}=useContext(createusercontext);
    const Preventspam = useRef(true)
    const Preventspam2 = useRef(true)
    const {bottom} = useScroll();
    const[contentdata,setcontentdata]=useState(Contentdata);
    const[order,setorder]=useState(10);
    const[profiledata,setprofiledata]=useState(Mydata)
    const[checkuserid,setcheckuserid]=useState(false);
    const[beingfollowed,setbeingfollowed]=useState(false);
    const[Timetorender,settimetorender]=useState(false);
    const[notificationactive,setnotificationactive]=useState(false);
    const[spinner,setspinner]=useState(false);
    const[activeedit,setactiveedit] = useState(false);
    const[editforsettings,seteditforsettings] = useState(false)
    const[options,setoptions]=useState({
        Post:{
            name:"Gönderiler",
            bottom:false,
        },
        Like:{
            name:"Beğeniler",
            bottom:false,
        },
        Reshow:{
            name:"İşaretler",
            bottom:false,
        } 
    })
   
console.log(Mydata);

   useEffect(()=>{
      //sadece paignation zaten query değişince ilk 10 value serverside tarafından çekiliyor
      var Leakcontrolloer = true;
      var Requestpermission = false;

      if(Requestpermission){
            setspinner(true);
            Getuserprofilecontent({
                UserId:query.username,
                category:query.name,
                setdata:setcontentdata,
                setspinner:setspinner,
                paignation:false,
                ownerpost:query.name == "Post" ? "true" : "fasle",
                Leakcontrolloer:Leakcontrolloer,
                order:10,
                currentdata:contentdata,
            })
      }

      return ()=>{
         Leakcontrolloer=false;
         Requestpermission=true;
      }

   },[query])

    useEffect(()=>{

        const optionobj={...options};
        optionobj[query.name].bottom=true;
        setoptions(optionobj);

    },[])

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

      setprofiledata({...Mydata})
      setcontentdata([...Contentdata])

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

        if(isforedit){
        
            seteditforsettings(true)
            
        }

        if(close){

            seteditforsettings(false)
            
        }

        setactiveedit(!activeedit)
    }
    /*
    const Profileupdate = () =>{

        UpdateProfile({
            
        })
    }
    */

    return (
        <Exteriordiv editactive={activeedit}>
            <Editwindow isWindowforedit={editforsettings} closefunc={()=>Editwindowhandler(false,true)} editdata={profiledata} active={activeedit} />
            <Innerdiv>
                <Imagesection>
                    <BackgroundImage ImageforBack={"/way.jpg"} /> 
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
                            <Button onClick={()=>Followingrequest(beingfollowed)} style={{color:"white",backgroundColor:"#0ead69",textTransform:"none"}} variant="contained">{beingfollowed ? "Takipten Çık" : "Takip Et"}</Button>
                        </ButtonHolder>)

                        : 
                          Timetorender &&
                            (<ButtonHolder>
                                <Button onClick={()=>Editwindowhandler(true,false)} style={{borderRadius:"25px",marginRight:"10px"}} variant="contained"><Settings></Settings></Button>
                                <Button onClick={()=>Editwindowhandler(false,false)} endIcon={<Person></Person>} variant="contained" style={{color:"white",backgroundColor:"#e63946",textTransform:"none",borderRadius:"25px"}}>Profili Duzenle</Button>
                            </ButtonHolder>)
                    }     
                </Imagesection>
                <Contentpart>
                     <Usersection>
                         <ProfileImageholder>
                             <Porfileimage  style={{border:"4px solid white"}} width="100%" height="100%" profile="/car.jpg"></Porfileimage>
                         </ProfileImageholder>
                         <h4>{profiledata.firstname + " " + profiledata.lastname}</h4>
                         <span style={{color:"#6c757d"}}>UI designer</span>
                         <div style={{display:"flex",marginTop:"10px",marginBottom:"40px",justifyContent:"space-around"}}>
                            <div>
                                <P>{Counts.Followedcount}</P>
                                <P>Takipçi</P>
                            </div>
                            <div>
                                <P>{Counts.Followercount}</P>
                                <P>Takip Edilen</P>
                            </div>
                            <div>
                                <P>{Counts.Contentcount}</P>
                                <P>Gönderi</P>
                            </div>
                         </div>
                         <Description style={{width:"80%",margin:"auto"}}>
                             <hr></hr>
                             <p style={{padding:"15px"}}>You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink.</p>
                             <hr></hr>
                         </Description>
                     </Usersection>
                     <Contentsection>
                            <Optionbar>
                            {
                               Object.keys(options).map((item)=>(
                                   <Link  href={{
                                       pathname:`/profile/${query.username}`,
                                       query:{name:`${item}`}
                                   }}     
                                   scroll={false}                             
                                   >
                                      <Options applyborder={options[item].bottom} onClick={()=>Handleoptions(item)}>{options[item].name}</Options>
                                   </Link>
                               ))
                            }
                            </Optionbar>
                            {/*TODO separate this map function*/}
                           <div style={{paddingRight:"10px",paddingLeft:"10px",maxWidth:"700px",margin:"auto"}}>

                              <Contentmap  norecord={query.name} relationfunc={Relationrequest} contentlist={Contentdata}/> 

                           </div>
                     </Contentsection>
                </Contentpart>
            </Innerdiv>
        </Exteriordiv>
    )
}
