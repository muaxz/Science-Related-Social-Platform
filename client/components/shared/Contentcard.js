import React,{useState,useEffect,useContext} from 'react'
import styled,{keyframes} from "styled-components";
import {createusercontext} from "../../context/Usercontext";
import {Porfileimage} from "../styledcomponents/button";
import Link from "next/link";
import Icon from "../UI/Icon"
import {feed, Feedback} from "@material-ui/icons"
import {calculatedate} from "../../utilsfunc"
import useClickoutside from "../../hooks/Clikcoutisde";


const Likeanimaton=keyframes`
0% {font-size:18px}
30% {font-size:19px}
50% {font-size:21px}
70% {font-size:22px}
100% {font-size:18px}
`
const Outsidediv=styled.div`
position:relative;
margin:auto;
margin-bottom:30px;
width:100%;
background-color:${({iscomment})=>!iscomment ? "#faf9f9": "#faf9f9"};
border-radius:7px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Imagediv=styled.div`
padding-right:5px;
padding-left:5px;

`
const Imageholder=styled.div`
flex:1;
`
const Contentholder=styled.div`
flex:2;
display:flex;
flex-direction:column;

`
const Contentdiv=styled.div`
padding: ${({iscomment})=>iscomment ? "15px": "0px"};
padding-left:15px;
padding-right:15px;
flex:1;
`
const Toolbar=styled.div`
display:${({foruser})=>foruser ? "none" : "flex"};
padding-left:15px;
border-radius:5px;
`

const Img=styled.img`
width:100%;
height:150px;
object-fit:cover;
`

const İconholder=styled.div`
margin-right:10px;
display:flex;
align-items:center;
`

const Profilediv=styled.div`
width:100%;
padding-top:10px;
padding-bottom:10px;
transition:all 0.3s;
`



const Icons=styled.i`
font-size:16px;
cursor:pointer;
color:${({ismarked,color})=>ismarked ? color : "grey" };
animation-name:${({ismarked})=>ismarked ? Likeanimaton : ""};
animation-duration:0.08s;
`
const Optionwindow=styled.div`
display:${({active})=>active ? "block" : "none"};
width:350px;
padding:5px;
position:absolute;
top:35px;
right:25px; 
border-radius:7px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
background-color:white;
z-index:1000;
`
const Optionholder=styled.div`
display:flex;
position:relative;
align-items:center;
padding:10px;
border-radius:6px;
&:hover{
    background-color:#EBEBEB;
    cursor:pointer;
}
`

const Profileimageholder=styled.div`
cursor:pointer; 
position:${({iscomment})=>iscomment ? "absolute" : "relative"};
left:${({iscomment})=>iscomment ? "-60px" : "0px"};;
`

//içerik sayısı,takipçi sayısı,
export default function Contentcard({readlater,profileimage,content,titleimage,title,iscomment,username,usersurname,date,comment,retweet,like,showwindow,createrelationforsmh,postId,foruser,foruseroption,indexnum,userid}){
    
    const[elements,setelements]=useState({
        Like:{
            number:like.length,
            ismarked:false,
        },
        reshow:{
            number:retweet.length,
            ismarked:false
        },
        Readlater:{
            ismarked:false,
            number:0,
        }
    });
    const {ref,visible,setvisible} = useClickoutside();
    const {userdata} = useContext(createusercontext);

    var textforopiton="";
    switch (foruseroption) {
        case "Readlater":
            textforopiton="Kaydedilen gönderilerden kaldır";
            break;
        case "Like":
            textforopiton="Beğenilen Gönderilerden kaldır"
            break;        
    }

    useEffect(() =>{


       const currentelements={...elements};

        if(!foruser){

            like.forEach((user)=>{
                if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
                currentelements["Like"].ismarked=true;
                }
            })
    
            retweet.forEach((user)=>{
                if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
                    currentelements["reshow"].ismarked=true;
                }
            })
    
            readlater.forEach((user)=>{
                if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
                    currentelements["Readlater"].ismarked=true;
                }
            })
   
       }
       
       
       setelements(currentelements);

    },[userdata])
    
    const Countplus=(elementtype)=>{

        const currentelements={...elements};
  
       
        if(currentelements[elementtype].ismarked==false){
         
            currentelements[elementtype].ismarked=true;
            currentelements[elementtype].number= currentelements[elementtype].number+1;
            createrelationforsmh(postId,elementtype,"Create",userid);
           
        }
        else{

            currentelements[elementtype].ismarked = false;
            currentelements[elementtype].number = currentelements[elementtype].number-1;
            createrelationforsmh(postId,elementtype,"Destroy");
        }

        setelements(currentelements);
       
    }


    return (
       <Outsidediv iscomment={iscomment}>
           {
              //left arrow
              iscomment ?  <Icon className="fas fa-caret-left fa-lg" Iconconfig={{position:"absolute",left:"-6px",top:"8px",color:"white"}}></Icon> : null
           }

           {
               
            !iscomment ?  
                
            <div style={{backgroundColor:"red"}} ref={ref}>   
      
                <Icon activefunc={()=>{setvisible(!visible)}} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",right:"10px",top:"10px",color:"#2A2A2A"}}></Icon>
                {
                    visible ?
                    <Optionwindow active={true}>
                        <Optionholder>
                        <Icon className="fas fa-user-minus" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px",color:"#757575"}}>
                            <p style={{color:"black"}}>Duhan Öztürk'ü takipten çık</p>
                            <p style={{fontSize:"13px"}}>Bu kullanıcıdan gelen bildirimleri görme</p>
                        </div>
                        </Optionholder>
                        <Optionholder>
                        <Icon className="fas fa-link" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px",color:"#757575"}}>
                            <p style={{color:"black"}}>Paylaş</p>
                            <p style={{fontSize:"13px"}}>Bağlantı adresini kopyala</p>
                        </div>
                        </Optionholder>  
                        {
                            foruser ?
                            <Optionholder onClick={()=>createrelationforsmh(postId,foruseroption,"Destroy",indexnum)}>
                                <Icon className="fas fa-trash-alt fa-sm" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                                <div style={{marginLeft:"8px",color:"#757575"}}>
                                    <p style={{color:"black"}}>Kaldır</p>
                                    <p style={{fontSize:"13px"}}>{textforopiton}</p>
                                </div>
                            </Optionholder>  
                            : null
                        }   
                    </Optionwindow> 
                    : null
                }
                </div>
              : 
              <div ref={ref}>
                <Icon activefunc={()=>{setvisible(!visible)}} className="fas fa-ellipsis-v" Iconconfig={{position:"absolute",right:"10px",top:"10px",color:"#2A2A2A"}}></Icon>
                {
                    visible && 
                    (<Optionwindow active={true}>
                        <Optionholder>
                            <Feedback></Feedback>
                            <div style={{marginLeft:"8px"}}>
                                <p>Bildir</p>
                            </div>
                        </Optionholder>
                   </Optionwindow>)
                }
              </div>
           }
           <Profilediv>
               <div style={{display:'flex',alignItems:"center",height:"100%",marginLeft:"5px"}}>
                  <Profileimageholder iscomment={iscomment}>
                      <Link href={{
                          pathname:`/profile/${userid}`,
                          query:{name:"Post"}
                        }}>
                        <Porfileimage width={iscomment ? "40px" : "35px"} height={iscomment ? "40px" : "35px"} profile={profileimage}></Porfileimage>
                      </Link>
                  </Profileimageholder>
                  <div style={{marginLeft:"10px",fontSize:"15px"}}><p style={{color:"black"}}>
                      <strong>{username+" "+usersurname}</strong></p>
                      <div style={{marginLeft:"auto",fontSize:"13px",marginRight:"10px",color:"#7D7D7D"}}><span>{calculatedate(date).time + " " + calculatedate(date).express + " Önce"}</span></div>
                  </div>           
               </div>
           </Profilediv>
           <div style={{display:foruser ? "block" : "flex"}}>
               {
                   iscomment ? null : 

                    <Imageholder>
                        <Imagediv>
                                <Img src={titleimage}></Img>
                        </Imagediv>
                    </Imageholder>
               }
                <Contentholder iscomment={iscomment}>
                    {
                        iscomment ? 
                        
                            <Contentdiv iscomment={iscomment}>     
                                <p style={{textAlign:"left",wordBreak:"bre"}}>{content}</p> 
                            </Contentdiv>   
                            : 
                            <Contentdiv iscomment={iscomment}>
                            
                                <h3 style={{marginBottom:"10px",color:"#A70909"}}>{title}</h3>
                                
                                <Link href="/content/[id]" as={`/content/${postId}`}>
                                    <p style={{textAlign:"left",wordBreak:"bre",cursor:"pointer"}}>While the Crypto Professors may set specific requirements for some....</p> 
                                </Link>
                            </Contentdiv> 
                    }
                      
                    <Toolbar foruser={foruser}>
                        <İconholder style={{flex:1}}>
                            <Icons  ismarked={elements.reshow.ismarked} color={"green"}  onClick={()=>Countplus("reshow")}  className="fas fa-retweet fa-sm"></Icons><span   onClick={()=>showwindow(retweet)} style={{marginLeft:"5px"}}>{elements.reshow.number}</span>
                        </İconholder>
                        <İconholder style={{flex:1}}>
                            <Icons  ismarked={elements.Like.ismarked} color={"#C72121"}  onClick={()=>Countplus("Like")} className="fas fa-heart fa-sm"></Icons><span  onClick={()=>showwindow(like)} style={{marginLeft:"5px"}}>{elements.Like.number}</span>
                        </İconholder>
                        <İconholder style={{flex:1}}>
                            <Icons className="fas fa-comment-alt fa-sm"></Icons><span style={{marginLeft:"5px",color:""}}>{comment.length}</span>
                        </İconholder>
                        <İconholder style={{flex:4,display:"flex",justifyContent:"flex-end",color:"grey"}}>
                            <Icons  ismarked={elements.Readlater.ismarked} color={"black"} onClick={()=>Countplus("Readlater")}  className="fas fa-bookmark"></Icons>
                        </İconholder>  
                    </Toolbar>
                </Contentholder>
           </div>
       </Outsidediv>
    )
}
