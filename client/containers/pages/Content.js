import React, { useEffect,useState,useRef, useContext,useCallback} from 'react'
import Icon from "../../components/UI/Icon";
import styled from "styled-components";
import {Porfileimage} from "../../components/styledcomponents/Globalstyles";
import {Producecommentreq,Commentreq,Commentanswerreq,Editcomment,handleCommentLike} from "../../Api/requests";
import {createusercontext} from "../../context/Usercontext";
import Commentpart from '../../components/pages/Content/Commentsection/Commentpart';
import useScroll from "../../hooks/Scroll"
import useClickOutside from "../../hooks/Clikcoutisde"
import Parser from "react-html-parser"
import ReportWindow from "../../components/pages/Content/reportWindow"







const Exteriorcontent=styled.div`
background-color:${({iscomment})=>iscomment ? "" : "white"};
max-width:950px;
width:100%
height:100%;

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
padding:8px;
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
   
    const attributeList =useRef([{icon:"fas fa-bookmark",desc:"Gönderiyi Kaydet"},{icon:"fas fa-thumbs-up",desc:"Gönderiyi Beğen"},{icon:"fas fa-retweet",desc:"Gönderiyi Profil Sayfamda Göster"},{icon:"fa-solid fa-circle-exclamation",desc:"Gonderiyi Bildir"}])
    const {bottom} = useScroll();
    const isInitialLoad = useRef(true)
    const {visible,setvisible,ref} = useClickOutside();
    const [content,setcontent]=useState(Contentdata);
    const [commentlist,setcommentlist]=useState(comments);
    const [numberofcomment,setnumbercom]=useState(0);
    const [active,setactive]=useState(false);
    const [actives,seterrmsg]=useState(false);
    const [activeproduce,setactiveproduce]=useState(false);
    const [isReportActive,setisReportActive]=useState(false);
    const {userdata}=useContext(createusercontext);
    
    //const {id}=router.query;
  
    useEffect(()=>{
   
      if(userdata.UserId && userdata.UserId == Contentdata.personal.id){

        var currentRef = attributeList.current;
        currentRef.splice(3,1);
        attributeList.current = currentRef
         
      }

    },[userdata])
    
    
    useEffect(()=>{

        if(numberofcomment > 0){
    
            //TODO Create a function for the coment req
            setactiveproduce(true);
            Commentreq({
                contentId:id,
                setcomment:setcommentlist,
                commentlist:commentlist,
                last:"true",
                order:commentlist.length,
                setactiveproduce:setactiveproduce,
                seterrmsg:seterrmsg,
            })
        }

    },[numberofcomment])

    useEffect(()=>{

    
       if(bottom && !isInitialLoad.current){
            
            Commentreq({
                contentId:id,
                setcomment:setcommentlist,
                commentlist:commentlist,
                last:"false",
                order:commentlist.length,
                setactiveproduce:setactiveproduce,
                seterrmsg:seterrmsg,
            })
       }

       isInitialLoad.current = false;

    },[bottom])

    useEffect(()=>{
       //changeable
       setcontent(Contentdata);
       setcommentlist(comments);
    },[id])
    
    const Produce=useCallback((message)=>{
        
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

    const AttributeCaseHandler = (whichAttribute)=>{

        if(whichAttribute == "fa-solid fa-circle-exclamation"){
              setisReportActive(true)
              setvisible(false)
        }
    }

    const commentRelationHandler = (commentId,elementtype,actionType,userid)=>{
            handleCommentLike({
                commentId:commentId,
                actionType:actionType
            })
    }
   
    return (
        <div style={{maxWidth:"950px",margin:"100px auto"}}>
            {
                isReportActive && (<ReportWindow ContentId={id} reportedUserId={Contentdata.personal.id} setActiveFunc={()=>setisReportActive(false)}></ReportWindow>)
            }
            <Exteriorcontent>
                <div>
                    <ImageDiv ref={ref}>
                        <img src={"/car.jpg"} style={{objectFit:"cover",width:"100%",height:"100%"}} ></img>
                        <Icon  activefunc={()=>setvisible(true)} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",top:"10px",right:"10px",color:"black",borderRadius:"50%",width:"25px",height:"25px",backcolor:"lightgrey",hovercolor:"black",backcolor:"grey",lineheight:"25px"}}></Icon>
                        <Attribute active={visible}>
                            {attributeList.current.map(item=>(
                            <Attributeholder onClick={()=>AttributeCaseHandler(item.icon)} key={item.icon}>
                                <Icon className={item.icon} Iconconfig={{width:"28px",height:"28px",lineheight:"30px"}}></Icon>
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
                        <div style={{wordBreak:"break-word"}} id="editor" className="ck-content">
                            
                            {Parser(Contentdata.content)}
                            
                        </div>
                    </ContentDiv>
                </div>
            </Exteriorcontent>
            <hr style={{clear:"right"}}></hr>
            <p style={{clear:"right"}}>{commentlist.length+ " comments"}</p>
            <Commentdiv>
                <Commentpart  commentRelationHandler={commentRelationHandler} Editcommenthandler={EditCommentFunc} handleanswer={Answerhandler} spinner={activeproduce} list={commentlist} Producecomment={Produce}></Commentpart>
            </Commentdiv>
        </div>
        
    )
}
