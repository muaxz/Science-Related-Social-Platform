import React, { useEffect,useState,useRef, useContext,useCallback} from 'react'
import Icon from "../../components/UI/Icon";
import styled from "styled-components";
import {Porfileimage} from "../../components/styledcomponents/Globalstyles";
import {Producecommentreq,Commentreq,Commentanswerreq,Editcomment} from "../../Api/requests";
import {createusercontext} from "../../context/Usercontext";
import Commentpart from '../../components/pages/Content/Commentsection/Commentpart';
import useScroll from "../../hooks/Scroll"




const Exteriorcontent=styled.div`
background-color:${({iscomment})=>iscomment ? "" : "white"};
max-width:950px;
margin:50px auto;
width:100%
`

const Commentdiv=styled.div`
margin:50px auto;
max-width:700px;
`

const ImageDiv=styled.div`
position:relative;
width:100%;
height:400px;
`

const ContentDiv=styled.div`
margin-top:20px;
padding:25px;
`

const ProfileDiv=styled.div`
box-sizing:border-box;
padding-left:25px;
padding-top:15px;
padding-bottom:15px;
display:flex;
align-items:center;
`

const Attribute=styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
top:35px;
right:35px;
border-radius:7px;
background-color:white;
`



const Attributeholder=styled.div`
display:flex;
align-items:center;
border-radius:7px;
padding:5px;
&:hover{
 background-color:#E2E3E3;
 cursor:pointer;
}
`
//todo map array to create attribute list

export default function Content({Contentdata,comments,id}){

    const {current}=useRef([{icon:"fas fa-bookmark",desc:"Gönderiyi Kaydet"},{icon:"fas fa-thumbs-up",desc:"Gönderiyi Beğen"},{icon:"fas fa-retweet",desc:"Gönderiyi Profil Sayfamda Göster"}])
    const {bottom} = useScroll();
    const [content,setcontent]=useState(Contentdata);
    const [commentlist,setcommentlist]=useState(comments);
    const [numberofcomment,setnumbercom]=useState(0);
    const [active,setactive]=useState(false);
    const [actives,seterrmsg]=useState(false);
    const [activeproduce,setactiveproduce]=useState(false);
    const {userdata}=useContext(createusercontext);
    //const {id}=router.query;
  
    console.log(commentlist)
    useEffect(()=>{

        if(numberofcomment > 0){
            //ilk sayfa geldiginde isteği önlemk için
            setactiveproduce(true);
            Commentreq({
                contentId:id,
                setcomment:setcommentlist,
                commentlist:commentlist,
                last:true,
                order:commentlist.length+10,
                setactiveproduce:setactiveproduce,
                seterrmsg:seterrmsg,
            })
        }

    },[numberofcomment])

    useEffect(()=>{

       if(bottom){
            
            Commentreq({
                contentId:id,
                setcomment:setcommentlist,
                commentlist:commentlist,
                last:false,
                order:commentlist.length+10,
                setactiveproduce:setactiveproduce,
                seterrmsg:seterrmsg,
            })

       }

    },[bottom])

    useEffect(()=>{
       //changeable
       setcontent(Contentdata);
       setcommentlist(comments);
    },[id])
    
    const Produce=useCallback((message)=>{
        console.log(content.personal.id)
        Producecommentreq({
            ContentId:id,
            UserId:userdata.UserId,
            Message:message,
            TakerId:content.personal.id,
            setnumbercom:setnumbercom,
            seterrmsg:seterrmsg,
        })

    },[userdata.UserId])

    const Answerhandler=(Answer,UpperId,MainparentID)=>{
          console.log("BURADAAA")
          Commentanswerreq({
              UppercommentId:UpperId,
              UserId:userdata.UserId,
              Answer:Answer,
              ContentId:id,//post
              MainparentID:MainparentID,
              setcommentlist:setcommentlist,
              commentlist:commentlist
          })

    }

    const EditCommentFunc=({commentID,message,setloading,seteditcomment})=>{
        console.log("burada")
        Editcomment({
            commentID:commentID,
            message:message,
            setloading:setloading,
            seteditcomment:seteditcomment
        })

    }
   
    return (
        <div style={{maxWidth:"950px",margin:"auto"}}>
            <Exteriorcontent>
                <div>
                    <ImageDiv>
                        <img src={"/car.jpg"} style={{objectFit:"cover",width:"100%",height:"100%"}} ></img>
                        <Icon  activefunc={()=>setactive(!active)} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",top:"10px",right:"10px",color:"white",borderRadius:"50%",width:"25px",height:"25px"}}></Icon>
                        <Attribute active={active}>
                            {current.map(item=>(
                            <Attributeholder key={item.icon}>
                                <Icon className={item.icon} Iconconfig={{width:"28px",height:"28px"}}></Icon>
                                <span style={{marginLeft:"5px",fontSize:"13px"}}>{item.desc}</span>
                            </Attributeholder>  
                            ))}
                        </Attribute>
                    </ImageDiv>
                    <ProfileDiv>
                        <Porfileimage profile="/black.jpg" width="40px" height="40px"></Porfileimage>
                        <div style={{marginLeft:"10px"}}>
                            <span>Duhan Öztürk</span>
                            <p style={{color:"#5c6b73",fontSize:"15px"}}>12/08/2020</p>
                        </div>
                        
                    </ProfileDiv>
                    <ContentDiv>
                        <h2 style={{marginBottom:"10px",color:"#e63946"}}> The state plans to pay around 20 percent</h2>
                        <h3 style={{marginBottom:"10px"}}>The structre of the culture in ottoman empire</h3>
                        <div>
                            <p>
                            The state plans to pay around 20 percent of the project from its central budget. The rest will come from a $1.5 billion Chinese bank loan to Hungary. The documents say that all the work will be done by Chinese, not Hungarian, workers and all the material will be Chinese.

                            “The Chinese are doing everything, while we’re doing only one thing: paying,” Karacsony said.

                            Hungary’s government follows the economic thinking known as “Eastern Opening.” It favors increased diplomacy and trade with countries like China, Russia, Turkey and others in Central Asia. Although it joined the European Union in 2004, the Orban government often has disputes with other E.U. members.

                            Peter Kreko is the director of the Budapest-based research company Political Capital. He believes the Fudan project is part of China’s efforts to increase soft power. And he said the project could help China’s spy operations.

                            Hungary is a popular place for Russian and Chinese spies because the government shows, Kreko said, “the lack of willingness of intelligence forces to push back malign foreign influence.”

                            Neither the Hungarian government’s spokesperson nor the ministry leading the project answered requests for comments.
                            </p>
                        </div>
                    </ContentDiv>
                </div>
            </Exteriorcontent>
            <hr></hr>
            <p>{commentlist.length+ " Yorum"}</p>
            <Commentdiv>
                <Commentpart  Editcommenthandler={EditCommentFunc} handleanswer={Answerhandler} spinner={activeproduce} list={commentlist} Producecomment={Produce}></Commentpart>
            </Commentdiv>
        </div>
        
    )
}
