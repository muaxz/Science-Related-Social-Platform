import React,{useState,useEffect,useContext,useMemo, createElement} from 'react'
import styled,{keyframes} from "styled-components";
import {createusercontext} from "../../../context/Usercontext";
import {CreateUtilContext} from "../../../context/UtilContext";
import {Porfileimage,Spinner,NightLightP} from "../../styledcomponents/Globalstyles";
import Link from "next/link";
import {useRouter} from "next/router"
import Icon from "../../UI/Icon"
import {AddComment,feed,Feedback,Send,Delete, Edit,FavoriteBorder,SearchOutlined} from "@material-ui/icons"
import {calculatedate} from "../../../utilsfunc"
import useClickoutside from "../../../hooks/Clikcoutisde";
import { TextField ,Button,InputAdornment,Checkbox} from '@material-ui/core';
import {CreateNightMode} from "../../../context/Nightmode"
import ReactParser from "react-html-parser"
import {Createuserrelation,DeletePost} from "../../../Api/requests"

//TODO creating seperate parts of the card
const Likeanimaton=keyframes`
0% {font-size:16px}
50% {font-size:10px}
70% {font-size:3px}
80% {font-size:10px}
90% {font-size:21px}
95% {font-size:18px}
100% {font-size:16px}
`

const Newcommentanimation=keyframes`
0% {background-color:lightgrey}
50% {background-color:grey}
100% {background-color:lightgrey}
`

const Outsidediv=styled.div`
position:relative;
cursor:pointer;
height:100%;
width:100%;
background-color:${({theme})=>theme.cardBackground};
border:1px solid white;
border-radius:7px;
box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
animation-duration:2s;
animation-timing-function:ease-in-out;
animation-name:${({animation,timing})=>{
    if(timing.time < 3 && animation &&timing.express == "Saniye"){
        return Newcommentanimation
    }

    return ""
}};
animation-iteration-count:3;
&:hover{
    box-shadow:-5px 5px ${({theme})=>theme.cardShadowColor};
    transform:translate(5px,-5px);
    transition:0.2s;
}
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
padding-bottom:10px;
padding-left:15px;
width:100%;
padding-right:15px;
flex:1;
`

const SecondPart = styled.div`
display:${({foruser})=>foruser ? "block":"flex"};
@media (max-width:540px){
    display:block;
}
`

const Toolbar=styled.div`
display:${({foruser})=>foruser ? "none" : "flex"};
padding-left:15px;
padding-bottom:5px;
border-radius:5px;
`

const Img=styled.img`
width:100%;
height:150px;
object-fit:cover;
object-position:contain;
@media (max-width:540px){
    height:200px;
}
`

const Spanfor = styled.span`
margin-left:5px;
&:hover {
    text-decoration-line:underline;
    cursor:pointer;
}
`

const İconholder=styled.div`
margin-right:10px;
display:flex;
align-items:center;
&: hover ${Spanfor}{
    color:${({howercolor})=>howercolor};
}
`

const Profilediv=styled.div`
width:100%;
padding-top:10px;
padding-bottom:10px;
transition:all 0.3s;
`

const Icons=styled.i`
display:flex;
justify-content:center;
align-items:center;
font-size:16px;
transition-duration:0.5s;
width:30px;
height:30px;
border-radius:50%;
cursor:pointer;
animation-duration:0.2s;
animation-timing-function:linear;
&:hover {
    background:rgba(${({howercolor})=>howercolor});
};
color:${({ismarked,color})=>ismarked ? color : "grey" };
animation-name:${({animation})=> animation ? Likeanimaton : ""};
`
const Optionwindow=styled.div`
display:block;
width:350px;
padding:5px;
position:absolute;
top:35px;
right:10px; 
border-radius:7px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
background-color:white;
z-index:480;
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



//comment-answer section
const Inputholder = styled.div`
display:flex;
align-items:center;
padding-left:15px;
padding-bottom:15px;
padding-top:15px;
`
const Profileimageholder=styled.div`
cursor:pointer; 
position:${({iscomment})=>iscomment ? "absolute" : "relative"};
left:${({iscomment})=>iscomment ? "-60px" : "0px"};
`

const CategoryDiv = styled.div`
position:absolute;
top:10px;
right:50px;
color:white;
border-radius:25px;
padding:3px;
padding-right:6px;
padding-left:6px;
background-color:#6c757d;
font-size:13px;
`

//içerik sayısı,takipçi sayısı,
function Contentcard({isHomeCard,categoryType,followeds,Animateforcomment,Answer_To,mainparentID,imagefilename,Editcommenthandler,Childlength,Answerhandler,readlater,draft,profileimage,content,titleimage,title,iscomment,userfirstname,usersurname,date,comment,retweet,like,showwindow,createrelationforsmh,postId,foruser,foruseroption,indexnum,userid,isMainparent,deleteThePost}){
    
    const[elements,setelements]=useState({
        Like:{
            number:like.length,
            array:like,
            animation:false,
            ismarked:false,
        },
        reshow:{
            number:retweet.length,
            array:retweet,
            animation:false,
            ismarked:false
        },
        Readlater:{
            ismarked:false,
            animation:false,
            number:0,
        }
    });
    const {setSavedWindow,setSavedWindowText} = useContext(CreateUtilContext)
    const {ref,visible,setvisible} = useClickoutside();
    const {nightmode} = useContext(CreateNightMode)
    const [loading_commentedit,setloading_commentedit] = useState(false)
    const [commentanswer,setcommentanswer]=useState(false);
    const [answervalue,setanswervalue]=useState("");
    const [editcomment,seteditcomment] = useState(false)
    const [commenteditvalue,setcommenteditvalue] = useState(content)
    const {userdata} = useContext(createusercontext);
    const [isfollowing,setisfollowing] = useState(false);
    const router = useRouter()

 


    var textforopiton="";
    switch (foruseroption){
        case "Readlater":
            textforopiton="Kaydedilen gönderilerden kaldır";
            break;
        case "Like":
            textforopiton="Beğenilen Gönderilerden kaldır"
            break;  
    }
    
    useEffect(() =>{


       const currentelements={...elements};

        if(!foruser && userdata.UserId){

            like.forEach((user)=>{
                if(userdata.UserId == user.id || userdata.UserId == user){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
                 
                 currentelements["Like"].ismarked=true;
                 const Indexofcurrentuser = currentelements["Like"].array.findIndex((item)=>item.id == userdata.UserId);
                 currentelements["Like"].array.splice(Indexofcurrentuser,1);
                 currentelements["Like"].array.unshift(user);

                }
            })
    
            retweet.forEach((user)=>{
                if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek

                    currentelements["reshow"].ismarked=true;
                    const Indexofcurrentuser = currentelements["reshow"].array.findIndex((item)=>item.id == userdata.UserId);
                    currentelements["reshow"].array.splice(Indexofcurrentuser,1);
                    currentelements["reshow"].array.unshift(user);

                }
            })
    
            readlater.forEach((user)=>{
                if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
                    currentelements["Readlater"].ismarked=true;
                }
            })
            
            if(followeds){
                followeds.forEach((user)=>{
                    if(user.id == userdata.UserId){
                        setisfollowing(true)
                    }
                })
            }
           
   
       }
       
       
       setelements(currentelements);

    },[userdata])
    
    //like , sign and save operations
    const relationHandler=(elementtype)=>{
        
        const currentelements={...elements};
  
       
        if(!currentelements[elementtype].ismarked && userdata.UserId){
         
            currentelements[elementtype].ismarked=true;
            currentelements[elementtype].animation=true;
            currentelements[elementtype].number= currentelements[elementtype].number+1;
            if(elementtype == "reshow" || elementtype == "Like"){
                currentelements[elementtype].array.unshift({
                    firstname:userdata.userfirstname,
                    lastname:userdata.Usersurname,
                    id:userdata.UserId
                })
            }
            
            createrelationforsmh(postId,elementtype,"Create",userid);
               
        }
        else if(currentelements[elementtype].ismarked && userdata.UserId){

            currentelements[elementtype].ismarked = false;
            currentelements[elementtype].animation=false;
            currentelements[elementtype].number = currentelements[elementtype].number-1;
            if(elementtype == "reshow" || elementtype == "Like"){
               currentelements[elementtype].array.splice(0,1);
            }

            createrelationforsmh(postId,elementtype,"Destroy",userid);

        }
        else{
            router.push("/login")
        }

        setelements(currentelements);
       
    }

    const Editcommentactiveness=(determiner)=>{

        if(determiner == "cancel"){

            seteditcomment(false)
            setcommenteditvalue(content)
            return;

        }else if(determiner == "save"){
            setloading_commentedit(true)
            Editcommenthandler({
                message:commenteditvalue,
                commentID:postId,
                setloading:setloading_commentedit,
                seteditcomment:seteditcomment
            })
        }

        seteditcomment(true)
        setvisible(false)//turning off option window
        setcommentanswer(false)//turning off other things
    }

    const Makeacomment=()=>{
  
        Answerhandler(answervalue,postId,mainparentID)
        setanswervalue("")
        setcommentanswer(false)
    }

    const subString=(content)=>{

        const extracted = content.slice(content.indexOf("<p")+1,content.lastIndexOf("</p>"))
        const cleanText = extracted.replace("p>","")
        var additional = ""
        if(cleanText.length > 200){
            additional = " . . ."
        }

        return cleanText.substring(0,200)+additional
    }
    

    const userRelationHandler = ()=>{
         Createuserrelation({
            UserId:userdata.UserId, // current user
            FollowedId:userid, // this is the target user
            checkiffollow:isfollowing,
            Prevent:{}
        })
        setisfollowing(!isfollowing)
    }   

    const copyLink=()=>{
      
        navigator.clipboard.writeText(`http://localhost:3000/content/${postId}`)
        setSavedWindow(true)
        setSavedWindowText("Link Copied")
    }


    return (
        <Outsidediv  nightmode={nightmode} animation={Animateforcomment} timing={date}  iscomment={iscomment}>  
                {
                    //Comment Left Icon
                    iscomment ?  <Icon className="fas fa-caret-left fa-lg" Iconconfig={{position:"absolute",left:"-6px",top:"8px",color:"#faf9f9"}}></Icon> : null
                }

                {
                    //Options on top right
                    !iscomment ?  
                        
                    <div ref={ref}>   
                           <NightLightP><Icon activefunc={()=>{setvisible(!visible)}} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",right:"10px",top:"10px",hoverback:"#ea526f",width:"30px",height:"30px",lineheight:"30px",hovercolor:"white"}}></Icon></NightLightP>
                            <CategoryDiv>{categoryType}</CategoryDiv>
                            {
                                visible ?
                                <Optionwindow active={true}>
                                <React.Fragment>
                                        {
                                            userid !== userdata.UserId &&
                                                    <Optionholder onClick={userRelationHandler} style={{display:userdata.UserId ? "flex" : "none"}}>
                                                        <Icon className={isfollowing ?  "fas fa-user-minus" : "fa-solid fa-user-plus"} Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                                                        <div style={{marginLeft:"8px",color:"#757575"}}>
                                                            <span>{isfollowing ? "unfollow" : "follow"}</span>
                                                            <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{userfirstname}</span>
                                                            <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{usersurname}</span>
                                                            <p style={{fontSize:"13px",textTransform:"capitalize"}}>{!isfollowing && "Get noitfied when the user post a content" }</p>
                                                        </div>
                                                    </Optionholder>   
                                        }
                                        <Optionholder onClick={copyLink}>
                                            <Icon className="fas fa-link" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                                                <div style={{marginLeft:"8px",color:"#757575"}}>
                                                    <p style={{color:"black"}}>Share</p>
                                                    <p id="link" style={{fontSize:"13px"}}>Copy the link</p>
                                                </div>
                                        </Optionholder> 
                                        {
                                            userid == userdata.UserId && !isHomeCard && 
                                                (<Optionholder onClick={()=>deleteThePost(null,postId)}>
                                                    <Icon className="fa-solid fa-trash" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                                                        <div style={{marginLeft:"8px",color:"#757575"}}>
                                                            <p style={{color:"black"}}>Delete The Post</p>
                                                            <p style={{fontSize:"13px"}}>People will not see this post anymore</p>
                                                        </div>
                                                </Optionholder>)
                                        }
                                    </React.Fragment>
                                    {/*this is for usercontent page*/}
                                    {
                                        foruser ?
                                        <Optionholder onClick={()=>createrelationforsmh(postId,foruseroption,"Destroy",indexnum,foruseroption)}>
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
                    //Comment Report 
                    <div ref={ref}>
                         <NightLightP><Icon activefunc={()=>{setvisible(!visible)}} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",right:"10px",top:"10px",hoverback:"#ea526f",width:"30px",height:"30px",lineheight:"30px",hovercolor:"white"}}></Icon></NightLightP>
                        {
                            visible && 
                            
                            (<Optionwindow active={true}>
                                {
                                    userid == userdata.UserId ? 
                                    <>
                                        <Optionholder onClick={Editcommentactiveness}>
                                            <Edit></Edit>
                                            <div style={{marginLeft:"8px"}}>
                                                <p>Duzenle</p>
                                            </div>
                                        </Optionholder>
                                        <Optionholder>
                                            <Delete></Delete>
                                            <div style={{marginLeft:"8px"}}>
                                                <p>Yorumu Sil</p>
                                            </div>
                                        </Optionholder>
                                    </>
                                    :
                                    <Optionholder>
                                        <Feedback></Feedback>
                                        <div style={{marginLeft:"8px"}}>
                                            <p>Bildir</p>
                                        </div>
                                    </Optionholder>

                                }
                            
                        </Optionwindow>)
                        }
                    </div>
                }
                    <Profilediv>
                            <div style={{display:'flex',alignItems:"center",height:"100%",marginLeft:"5px"}}>
                                <Profileimageholder isMainparent={isMainparent} length={Childlength} iscomment={iscomment}>
                                    <Link href={{
                                        pathname:`/profile/${userid}`,
                                        query:{name:"Post"}
                                    }}>
                                    <Porfileimage width={iscomment ? "40px" : "35px"} height={iscomment ? "40px" : "35px"} profile={profileimage ?? "/userphoto2.png"}></Porfileimage>
                                    </Link>
                                </Profileimageholder>
                                <div style={{marginLeft:"10px",fontSize:"15px",textTransform:"capitalize"}}>
                                    <NightLightP><strong>{userfirstname+" "+usersurname}</strong></NightLightP>
                                    <div style={{marginLeft:"auto",fontSize:"13px",marginRight:"10px",color:"#7D7D7D"}}><span>{date.time+ " " + date.express + " ago"}</span></div>
                                </div>           
                            </div>
                    </Profilediv>
                <SecondPart foruser={foruser}>
                    {
                        iscomment ? null : 

                            <Imageholder>
                                <Imagediv>
                                        <Img style={{borderRadius:"7px"}} src={titleimage} ></Img>
                                </Imagediv>
                            </Imageholder>
                    }
                        <Contentholder iscomment={iscomment}>
                            {
                                iscomment ? 
                                
                                    <Contentdiv iscomment={iscomment}>     
                                        {
                                            editcomment ?

                                            <TextField 
                                            InputProps={{endAdornment:
                                                <InputAdornment style={{paddingLeft:"10px"}}>
                                                    <Button disabled={loading_commentedit} startIcon={loading_commentedit ? <Spinner></Spinner> : null} onClick={()=>Editcommentactiveness("save")} style={{backgroundColor:loading_commentedit ? "lightgrey":"#e63946",color:"white",textTransform:"capitalize",position:"relative",bottom:"10px",marginRight:"5px"}} variant="contained" size="small">
                                                        Kaydet
                                                    </Button>
                                                    <Button onClick={()=>Editcommentactiveness("cancel")} color="primary" style={{textTransform:"capitalize",position:"relative",bottom:"10px"}} variant="contained" size="small">
                                                        iptal
                                                    </Button>
                                                </InputAdornment>}} 
                                                multiline
                                                style={{width:"100%"}} 
                                                onChange={(e)=>setcommenteditvalue(e.target.value)} 
                                                value={commenteditvalue}>
                                            </TextField> 

                                            : 

                                            <div>
                                                {
                                                    isMainparent ? null : <span style={{backgroundColor:"#43aa8b",borderRadius:"7px",color:"white",padding:"10px",fontSize:"15px"}}><b>Answer To : {Answer_To}</b></span>
                                                }
                                                <NightLightP style={{textAlign:"left",wordBreak:"break-word",marginTop:isMainparent ? "0px" : "20px"}}>{commenteditvalue}</NightLightP> 
                                            </div>
                                            
                                        }
                
                                    </Contentdiv>   

                                    : 

                                <Link href="/content/[id]" as={`/content/${postId}`}>    
                                    <Contentdiv iscomment={iscomment}>
                                            <h3 style={{marginBottom:"10px",color:"#c9184a"}}>{title}</h3>
                                            <div style={{textAlign:"left",wordBreak:"break-word",cursor:"pointer",color:nightmode ? "white" : "black"}}>{ReactParser(subString(content))}</div>   
                                    </Contentdiv>
                                </Link>      

                                
                            }
                            
                            <Toolbar foruser={foruser}>
                                {
                                !iscomment && 
                                (<İconholder howercolor="green" style={{flex:1}}>
                                        <Icons  howercolor="0, 255, 0, 0.2" ismarked={elements.reshow.ismarked} animation={elements.reshow.animation} color={"green"}  onClick={()=>relationHandler("reshow")}  className="fas fa-retweet fa-sm"></Icons>
                                        <NightLightP onClick={()=>showwindow(elements["reshow"].array,"Reshow")}>{elements.reshow.number}</NightLightP>
                                </İconholder>)
                                }
                                <İconholder howercolor="red" style={{flex:1}}>
                                    <Icons  howercolor="255, 0, 0,0.2" ismarked={elements.Like.ismarked} animation={elements.Like.animation} color={"#C72121"}  onClick={()=>relationHandler("Like")} className="fas fa-heart fa-sm"></Icons>
                                    <NightLightP  onClick={()=>showwindow(elements["Like"].array,"Like")} >{elements.Like.number}</NightLightP>
                                </İconholder>
                                <İconholder style={{flex:8}}>
                                    {
                                        iscomment ? 
                                        
                                        <AddComment onClick={()=>setcommentanswer(!commentanswer)}  style={{color:"grey",cursor:"pointer"}}/>

                                        :

                                        <Icons className="fas fa-comment-alt fa-sm"></Icons>
                                    }
                                    <NightLightP style={{marginLeft:"5px"}}>{comment.length}</NightLightP>
                                </İconholder>
                                {
                                    !iscomment && 
                                    (<İconholder style={{flex:4,display:"flex",justifyContent:"flex-end",color:"grey"}}>
                                        <Icons  ismarked={elements.Readlater.ismarked} animation={elements.Readlater.animation} color={nightmode ? "white" : "black"} onClick={()=>relationHandler("Readlater")}  className="fas fa-bookmark"></Icons>
                                    </İconholder>)
                                }
                            </Toolbar>
                            {
                                commentanswer &&
                                (<Inputholder>
                                    <TextField 
                                        value={answervalue}
                                        onChange={(e)=>setanswervalue(e.target.value)}
                                        InputProps={{
                                            style:{cursor:"pointer"},
                                            endAdornment: <InputAdornment onClick={Makeacomment} style={{color:answervalue.length > 0 ?  "#e63946": "grey"}} position="end"><Send></Send></InputAdornment>,
                                        }}
                                        label="Yoruma Cevap Ver..." size="small" variant="outlined">
                                    </TextField>
                                </Inputholder>)
                            }
                        </Contentholder>
                </SecondPart>
            </Outsidediv>
    )
}


export default React.memo(Contentcard);
