import React,{useEffect,useState,useContext} from 'react'
import styled from "styled-components";
import {Porfileimage} from "../../components/styledcomponents/button"
import {Homereq} from "../../Api/Api"
import Contentcard from "../../components/shared/Contentcard";

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
position:sticky;
top:0px;
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
margin-top:80px;
padding-bottom:20px;
`

const Usersection=styled.div`
position:sticky;
top:250px;
align-self:flex-start;
max-width:400px;
text-align:center;
width:100%;
`

const Contentsection=styled.div`
max-width:1000px;
width:100%;
`

export default function Profile(){

    const[contentdata,setcontentdata]=useState([]);
    const[order,setorder]=useState(10);
    const[errormsg,seterror]=useState(false);
    const[activelike,setactivelike]=useState()
    const[list,setlist]=useState([]);
    const [stoprequesting,setstopreq]=useState(false);
    const [spinner,setspinner]=useState(false);

    useEffect(()=>{

        Homereq({
            currentdata:contentdata,
            setcontentdata:setcontentdata,
            order:10,
            setspinner:setspinner,
            seterrmsg:seterror,
            setstopreq:setstopreq,
        })

    },[])

    return (
        <Exteriordiv>
            <Innerdiv>
                <Imagesection>
                    <BackgroundImage/>       
                </Imagesection>
                <Contentpart>
                     <Usersection>
                         <Porfileimage style={{position:"absolute",top:"-150px",left:"150px",border:"2px solid white"}} width="120px" height="120px" profile="/led.jpg"></Porfileimage>
                         <h4>Emre Özer</h4>
                         <span style={{color:"#8B8B8B"}}>UI designer</span>
                         <div style={{display:"flex",marginTop:"10px",marginBottom:"40px",justifyContent:"space-around"}}>
                            <div>
                                <p>246</p>
                                <p>Takipçi</p>
                            </div>
                            <div>
                                <p>12</p>
                                <p>Takip Edilen</p>
                            </div>
                            <div>
                                <p>2</p>
                                <p>Gönderi</p>
                            </div>
                         </div>
                         <div style={{width:"80%",margin:"auto"}}>
                             <hr></hr>
                             <p style={{padding:"15px"}}>You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink.</p>
                             <hr></hr>
                         </div>
                     </Usersection>
                     <Contentsection>

                            {
                            
                            contentdata.length > 0 ?
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
                                usersurname={"Öztürk"}//bir obje props
                                subtitle={item.subtitle}
                                date={item.createdAt}
                                />
                            ))
                            : null
                            }
                     </Contentsection>
                </Contentpart>
            </Innerdiv>
        </Exteriordiv>
    )
}
