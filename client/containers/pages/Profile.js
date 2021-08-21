import React,{useEffect,useState,useContext} from 'react'
import styled from "styled-components";
import {createusercontext} from "../../context/Usercontext"
import {Porfileimage} from "../../components/styledcomponents/button"
import {Createuserrelation} from "../../Api/Api"
import Contentcard from "../../components/shared/Contentcard";
import {Button} from "@material-ui/core"
import Link from "next/link";
import { Notifications, NotificationsActive } from '@material-ui/icons';
import router, { useRouter } from 'next/router';
import axious from "axios"

const Exteriordiv=styled.div`
max-width:1400px;
width:100%;
padding-bottom:20px;
padding-left:60px;
`

const Innerdiv=styled.div`
height:100%;
`

const Imagesection=styled.div`
position:relative;
height:250px;
position:relative;
`

const BackgroundImage=styled.div`
width:100%;
height:100%;
background-image:url(/black.jpg);
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


export default function Profile({Mydata,Counts,query}){
    
    const{userdata}=useContext(createusercontext);
    const route = useRouter();
    const[contentdata,setcontentdata]=useState([...Mydata.personal]);
    const[order,setorder]=useState(10);
    const[profiledata,setprofiledata]=useState({...Mydata})
    const[stoprequesting,setstopreq]=useState(false);
    const[spinner,setspinner]=useState(false);
    const[checkuserid,setcheckuserid]=useState(false);
    const[beingfollowed,setbeingfollowed]=useState(false);
    const[notificationactive,setnotificationactive]=useState(false);
    const[options,setoptions]=useState({
        Post:{
            name:"Gönderiler",
            bottom:true,
        },
        Like:{
            name:"Beğeniler",
            bottom:false,
        },
        Retweet:{
            name:"İşaretler",
            bottom:false,
        } 
    })




    useEffect(()=>{
         
        if(userdata.UserId == query.username){
             

            setcheckuserid(true);
            //burada takip et butonu ve bildirim butonu kalkıcak yerine belki ayarlar.


        }
        else{

            if(userdata.UserId){
                
                /*Mydata.Followed.find(element => {
                    return element.id == userdata.UserId
                })
                */

                Mydata.Followed.forEach(item=>{
        
                    if(item.id == userdata.UserId){
            
                        setbeingfollowed(true)
                        //zaten buraya girememiş ise default değer false
                    }
                
                });
            }

        }
    
    },[userdata,query])

    useEffect(()=>{

      setprofiledata({...Mydata})
      setcontentdata([...Mydata.personal])

    },[query])

    

    const Followingrequest=()=>{

        setbeingfollowed(!beingfollowed);

        if(userdata.UserId){

            Createuserrelation({
                UserId:userdata.UserId,
                FollowedId:Mydata.id,
                checkiffollow:beingfollowed,
            })

        }
        
           
    }

    const Handleoptions=(optiontype)=>{

        const optionobj={...options};

        for (const key in optionobj) {
            optionobj[key].bottom=false;
        }

        optionobj[optiontype].bottom=true;
        setoptions(optionobj);
    }

    return (
        <Exteriordiv>
            <Innerdiv>
                <Imagesection>
                    <BackgroundImage/> 
                    {       //burada context userId yok ise buna izin vermiyorum ancak setstate oldugunda gösterim var
                            //TODO this should be fixed during navigaiton
                            !checkuserid && userdata.UserId &&

                            (<ButtonHolder>
                                {
                                    beingfollowed && 

                                    notificationactive ? 
                                    
                                    (<NotificationsActive style={{color:"white",marginRight:"10px",cursor:"pointer"}} onClick={()=>setnotificationactive(false)}></NotificationsActive>)

                                    :

                                    (<Notifications style={{color:"white",marginRight:"10px",cursor:"pointer"}} onClick={()=>setnotificationactive(true)}></Notifications>)
                                }
                            <Button onClick={()=>Followingrequest(beingfollowed)} style={{color:"white",backgroundColor:"#0ead69",textTransform:"none"}} variant="contained">{beingfollowed ? "Takipten Çık" : "Takip Et"}</Button>
                        </ButtonHolder>)
                    }     
                </Imagesection>
                <Contentpart>
                     <Usersection>
                         <Porfileimage style={{position:"absolute",top:"-150px",left:"140px",border:"4px solid white"}} width="120px" height="120px" profile="/led.jpg"></Porfileimage>
                         <h4>{profiledata.firstname + " " + profiledata.lastname}</h4>
                         <span style={{color:"#6c757d"}}>UI designer</span>
                         <div style={{display:"flex",marginTop:"10px",marginBottom:"40px",justifyContent:"space-around"}}>
                            <div>
                                <P>{Counts.Contentcount}</P>
                                <P>Takipçi</P>
                            </div>
                            <div>
                                <P>{Counts.Followercount}</P>
                                <P>Takip Edilen</P>
                            </div>
                            <div>
                                <P>{Counts.Followedcount}</P>
                                <P>Gönderi</P>
                            </div>
                         </div>
                         <div style={{width:"80%",margin:"auto"}}>
                             <hr></hr>
                             <p style={{padding:"15px"}}>You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink.</p>
                             <hr></hr>
                         </div>
                     </Usersection>
                     <Contentsection>
                            <Optionbar>
                            {
                               Object.keys(options).map((item)=>(
                                   <Link href={{
                                       pathname:`/profile/${Mydata.id}`,
                                       query:{name:`${item}`}
                                   }}                                  
                                   >
                                      <Options applyborder={options[item].bottom} onClick={()=>Handleoptions(item)}>{options[item].name}</Options>
                                   </Link>
                               ))
                            }
                            </Optionbar>
                           <div style={{paddingRight:"10px",paddingLeft:"10px",maxWidth:"700px",margin:"auto"}}>
                            {
                                contentdata.map((item,index)=>(
                                    <Contentcard 
                                    postId={item.id}
                                    content={item.content}
                                    showwindow={(stateoflist)=>setlist(stateoflist)}
                                    like={item.Like}//bu bir obje array
                                    retweet={item.Retweet}
                                    comment={item.allcomments}
                                    readlater={item.Readlater}
                                    key={index}//key numarası
                                    profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                                    title={item.title}
                                    titleimage={"/yaprak.jpg"}
                                    username={"Duhan"}
                                    like={[]}//bu bir obje array
                                    retweet={[]}
                                    comment={[]}
                                    readlater={[]}
                                    usersurname={"Öztürk"}//bir obje props
                                    subtitle={item.subtitle}
                                    date={item.createdAt}
                                    />
                                ))        
                            }
                           </div>
                     </Contentsection>
                </Contentpart>
            </Innerdiv>
        </Exteriordiv>
    )
}
