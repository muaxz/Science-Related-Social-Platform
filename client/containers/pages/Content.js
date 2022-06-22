import React, { useEffect,useState,useRef, useContext,useCallback} from 'react'
import Icon from "../../components/UI/Icon";
import styled from "styled-components";
import {Porfileimage} from "../../components/styledcomponents/Globalstyles";
import {Producecommentreq,Commentreq,Commentanswerreq,Editcomment,handleCommentLike,Createrelationreq} from "../../Api/requests";
import {createusercontext} from "../../context/Usercontext";
import {CreateUtilContext} from "../../context/UtilContext";
import Commentpart from '../../components/pages/Content/Commentsection/Commentpart';
import useScroll from "../../hooks/Scroll"
import useClickOutside from "../../hooks/Clikcoutisde"
import Parser from "react-html-parser"
import ReportWindow from "../../components/pages/Content/reportWindow"
import {calculatedate} from "../../utilsfunc"
import Link from 'next/link';
import {Checkbox} from "@material-ui/core"
import {FavoriteBorder,Favorite,BookmarkBorder,BookmarkOutlined,FlagOutlined} from "@material-ui/icons"







const Exteriorcontent=styled.div`
background-color:${({iscomment})=>iscomment ? "" : "white"};
max-width:950px;
width:100%
height:100%;
`

const InnerDiv = styled.div`
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



const ToolBarIconHolder=styled.div`
cursor:pointer;
display:flex;
align-items:center;
`

const ToolBar = styled.div`
display:flex;
padding-left:10px;
align-items:center;
padding-right:10px;
padding-bottom:10px;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
border-bottom:1px solid #bcb8b1;
`
//todo map array to create attribute list

export default function Content({Contentdata,comments,id}){

    const {bottom} = useScroll();
    const isInitialLoad = useRef(true)
    const [content,setcontent]=useState(Contentdata);
    const [commentlist,setcommentlist]=useState(comments);
    const [numberofcomment,setnumbercom]=useState(0);
    const [actives,seterrmsg]=useState(false);
    const [activeproduce,setactiveproduce]=useState(false);
    const [isReportActive,setisReportActive]=useState(false);
    const {userdata}=useContext(createusercontext);
    const {setSavedWindow}=useContext(CreateUtilContext);
    const [isContentLiked,setIsContentLiked] = useState(false);
    const [isContentSaved,setIsContentSaved] = useState(false);
  
    /*
    useEffect(()=>{
   
      if(userdata.UserId && userdata.UserId == Contentdata.personal.id){

        var currentRef = attributeList.current;
        currentRef.splice(3,1);
        attributeList.current = currentRef
         
      }

    },[userdata])
    */

    useEffect(()=>{
    
       content.Like.forEach((item)=>{
            if(item.id == userdata.UserId){
                setIsContentLiked(true)
            }
       })

       content.Readlater.forEach((item)=>{
        if(item.id == userdata.UserId){
            setIsContentSaved(true)
        }
   })

       

    },[userdata])

    useEffect(()=>{

        if(numberofcomment > 0){
    
            //TODO Create a function for the coment req
            setactiveproduce(true);
            fetchComments("true")
        }

    },[numberofcomment])

    useEffect(()=>{

    
       if(bottom && !isInitialLoad.current){
            
            fetchComments("false")
       }

       isInitialLoad.current = false;

    },[bottom])

    useEffect(()=>{
       //changeable
       setcommentlist(comments);
    },[id])

    const fetchComments = (isLast)=>{

        Commentreq({
            contentId:id,
            setcomment:setcommentlist,
            commentlist:commentlist,
            last:isLast,
            order:commentlist.length,
            setactiveproduce:setactiveproduce,
            seterrmsg:seterrmsg,
        })

    }
    
    const Produce = useCallback((message)=>{
        
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

    const toolBarActionHandler = async (actionType,attribute)=>{

        if(actionType == "REPORT"){

              setisReportActive(true)

        }else if(actionType == "LIKE"){

            await Createrelationreq({
                UserId:userdata.UserId,
                PostId:content.id,
                attribute:attribute,
                relationtype:isContentLiked ? "Destroy" : "Create",
                UserIdofcontent:content.personal.id,
                setSavedWindow:setSavedWindow,
            })
            setIsContentLiked(!isContentLiked)

        }else if(actionType =="SAVE"){

            await Createrelationreq({
                UserId:userdata.UserId,
                PostId:content.id,
                attribute:attribute,
                relationtype:isContentSaved ? "Destroy" : "Create",
                UserIdofcontent:content.personal.id,
                setSavedWindow:setSavedWindow,
            })

            setIsContentSaved(!isContentSaved)
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
                <InnerDiv>
                    <ImageDiv>
                        <img src={Contentdata.titleimage} style={{objectFit:"cover",width:"100%",height:"100%"}} ></img>
                    </ImageDiv>
                    <ProfileDiv>
                        <Link  href={{
                            pathname:`/profile/${content.personal.id}`,
                            query:{name:"Post"}
                        }}>
                           <Porfileimage profile="/yaprak.jpg" width="40px" height="40px"></Porfileimage>
                        </Link>
                        <div style={{marginLeft:"10px"}}>
                            <span>{content.personal.firstname+" "+content.personal.lastname}</span>
                            <p style={{color:"#5c6b73",fontSize:"15px"}}>{calculatedate(content.createdAt).time+" "+calculatedate(content.createdAt).express+" ago"}</p>
                        </div>
                    </ProfileDiv>
                    <ContentDiv>
                        <h2 style={{marginBottom:"10px",color:"#e63946"}}>{content.title}</h2>
                        <h3 style={{marginBottom:"10px"}}>{content.subtitle}</h3>
                        <div style={{wordBreak:"break-word"}} id="editor" className="ck-content ck-content-height">
                            {Parser(Contentdata.content)}
                        </div>
                    </ContentDiv>
                    <ToolBar>
                        <ToolBarIconHolder onClick={()=>toolBarActionHandler("LIKE","Like")} >
                           <Checkbox  checked={isContentLiked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </ToolBarIconHolder>
                        <ToolBarIconHolder onClick={()=>toolBarActionHandler("SAVE","Readlater")}>
                           <Checkbox  checked={isContentSaved} icon={<BookmarkBorder />} checkedIcon={<BookmarkOutlined />} />
                        </ToolBarIconHolder>
                        <ToolBarIconHolder onClick={()=>toolBarActionHandler("REPORT")} style={{marginLeft:"auto",backgroundColor:"#ef233c",color:"white",height:"30px",borderRadius:"7px",padding:"10px"}}>
                           <FlagOutlined></FlagOutlined>
                           <span style={{marginLeft:"5px"}}>Report</span>
                        </ToolBarIconHolder>
                    </ToolBar>
                </InnerDiv>
            </Exteriorcontent>
            <Commentdiv>
                <Commentpart  commentRelationHandler={commentRelationHandler} Editcommenthandler={EditCommentFunc} handleanswer={Answerhandler} spinner={activeproduce} list={commentlist} Producecomment={Produce}></Commentpart>
            </Commentdiv>
        </div>
        
    )
}
