import React,{useState,useEffect,useContext} from 'react'
import styled,{keyframes} from "styled-components";
import {createusercontext} from "../../../context/Usercontext";
import {Porfileimage,Spinner} from "../../styledcomponents/Globalstyles";
import Link from "next/link";
import {useRouter} from "next/router"
import Icon from "../../UI/Icon"
import {AddComment,feed,Feedback,Send,Delete, Edit} from "@material-ui/icons"
import {calculatedate} from "../../../utilsfunc"
import useClickoutside from "../../../hooks/Clikcoutisde";
import { TextField , Button,InputAdornment} from '@material-ui/core';
import {CreateNightMode} from "../../../context/Nightmode"


const Likeanimaton=keyframes`
0% {font-size:16px}
25% {font-size:18px}
50% {font-size:21px}
65% {font-size:17}
70% {font-size:10px}
100% {font-size:16px}
`

const Newcommentanimation=keyframes`
0% {background-color:lightgrey}
50% {background-color:grey}
100% {background-color:lightgrey}
`

const Outsidediv=styled.div`
position:relative;
margin:auto;
height:${({draft})=> draft ? "300px" : ""};
margin-bottom:30px;
width:100%;
background-color:${({nightmode})=> !nightmode ? "#faf9f9": "#1F1B24"};
border-radius:7px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
animation-duration:2s;
animation-timing-function:ease-in-out;
animation-name:${({animation,timing})=>{
    if(timing.time < 3 && animation &&timing.express == "Saniye"){
        return Newcommentanimation
    }

    return ""
}};
animation-iteration-count:3;
`

//This is for draft page
const Softcover = styled.div`
position:absolute;
width:100%;
height:100%;
z-index:300;
background-color:black;
border-radius:7px;
opacity:0.6;
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
border-radius:5px;
`

const Img=styled.img`
width:100%;
height:150px;
object-fit:cover;
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
padding:5px;
border-radius:50%;
cursor:pointer;
animation-duration:0.3s;
animation-timing-function:ease-in-out;
&:hover {
    background:rgba(${({howercolor})=>howercolor});
};
color:${({ismarked,color})=>ismarked ? color : "grey" };
animation-name:${({animation})=>animation ? Likeanimaton : ""};
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

const Draftholder = styled.span`
display:flex;
flex-direction:column;
align-items:center;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:300;
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

//içerik sayısı,takipçi sayısı,
function Contentcard({followeds,Animateforcomment,Answer_To,mainparentID,imagefilename,Editcommenthandler,imagetoken,Childlength,Answerhandler,readlater,draft,profileimage,content,titleimage,title,iscomment,userfirstname,usersurname,date,comment,retweet,like,showwindow,createrelationforsmh,postId,foruser,foruseroption,indexnum,userid,isMainparent}){
    
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
    const {ref,visible,setvisible} = useClickoutside();
    const {nightmode,setisnight} = useContext(CreateNightMode)
    const [loading_commentedit,setloading_commentedit] = useState(false)
    const [commentanswer,setcommentanswer]=useState(false);
    const [answervalue,setanswervalue]=useState("");
    const [editcomment,seteditcomment] = useState(false)
    const [commenteditvalue,setcommenteditvalue] = useState(content)
    const {userdata} = useContext(createusercontext);
    const [isfollowing,setisfollowing] = useState(false);
    const router = useRouter()


    var textforopiton="";
    switch (foruseroption) {
        case "Readlater":
            textforopiton="Kaydedilen gönderilerden kaldır";
            break;
        case "Like":
            textforopiton="Beğenilen Gönderilerden kaldır"
            break;
        case "Draft":
            textforopiton="Taslaklardan kaldır"            
    }
    
    useEffect(() =>{


       const currentelements={...elements};

        if(!foruser && userdata.UserId){

            like.forEach((user)=>{
                if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
                 
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
    const Countplus=(elementtype)=>{

        const currentelements={...elements};
  
       
        if(currentelements[elementtype].ismarked==false && userdata.UserId){
         
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
        else if(currentelements[elementtype].ismarked==true && userdata.UserId){

            currentelements[elementtype].ismarked = false;
            currentelements[elementtype].animation=false;
            currentelements[elementtype].number = currentelements[elementtype].number-1;
            if(elementtype == "reshow" || elementtype == "Like"){
               currentelements[elementtype].array.splice(0,1);
            }

            createrelationforsmh(postId,elementtype,"Destroy");

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


    return (

       <Outsidediv  nightmode={nightmode} animation={Animateforcomment} timing={calculatedate(date)} draft={draft} iscomment={iscomment}>

           {
               //draft cover
               draft ?

               <div>
                    <Softcover/>
                    <Draftholder>
                        <Icon className="far fa-edit fa-lg" Iconconfig={{zindex:"400",hoverback:"white",hovercolor:"#d90429",backcolor:"#d90429",color:"white",width:"60px",height:"60px",lineheight:"60px"}}/>
                        <p style={{paddingTop:"10px",color:"white",textAlign:"center"}}>Culture of the Ottoman Empire</p>
                    </Draftholder>
               </div> 
               : null
           }
            
           {
              //Comment Left Icon
              iscomment ?  <Icon className="fas fa-caret-left fa-lg" Iconconfig={{position:"absolute",left:"-6px",top:"8px",color:"#faf9f9"}}></Icon> : null
           }

           {
            //Options on top right
            !iscomment ?  
                
               <div ref={ref}>   
      
                    <Icon activefunc={()=>{setvisible(!visible)}} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",right:"10px",top:"10px",color:draft ? "white" : "#2A2A2A",zindex:"500"}}></Icon>
                    {
                        visible ?
                        <Optionwindow active={true}>
                            {
                                !draft ?
                                  <React.Fragment>
                                        <Optionholder style={{display:userdata.UserId ? "flex" : "none"}}>
                                            <Icon className="fas fa-user-minus" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                                            <div style={{marginLeft:"8px",color:"#757575"}}>
                                                <span style={{color:"black",textTransform:"capitalize"}}>{userfirstname}</span>
                                                <span style={{color:"black",textTransform:"capitalize",marginLeft:"5px"}}>{usersurname+`'i`}</span>
                                                <span style={{marginLeft:"10px"}}>{isfollowing ? "Takipten Cik" : "Takip Et"}</span>
                                                <p style={{fontSize:"13px",textTransform:"capitalize"}}>Bu kullanıcıdan gelen bildirimleri görme</p>
                                            </div>
                                        </Optionholder>
                                        <Optionholder>
                                            <Icon className="fas fa-link" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                                            <div style={{marginLeft:"8px",color:"#757575"}}>
                                                <p style={{color:"black"}}>Paylaş</p>
                                                <p style={{fontSize:"13px"}}>Bağlantı adresini kopyala</p>
                                            </div>
                                        </Optionholder> 
                                  </React.Fragment> : null
                            }
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
              //comment report
              <div ref={ref}>
                <Icon activefunc={()=>{setvisible(!visible)}} className="fas fa-ellipsis-v" Iconconfig={{position:"absolute",right:"10px",top:"10px",color:"#2A2A2A"}}></Icon>
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

           {
                !draft &&
                <Profilediv>
                    <div style={{display:'flex',alignItems:"center",height:"100%",marginLeft:"5px"}}>
                        <Profileimageholder isMainparent={isMainparent} length={Childlength} iscomment={iscomment}>
                            <Link href={{
                                pathname:`/profile/${userid}`,
                                query:{name:"Post"}
                            }}>
                              <Porfileimage width={iscomment ? "40px" : "35px"} height={iscomment ? "40px" : "35px"} profile={imagefilename ?  `https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${imagefilename}?alt=media&token=${imagetoken}` : "/realuserphoto.png"}></Porfileimage>
                            </Link>
                        </Profileimageholder>
                        <div style={{marginLeft:"10px",fontSize:"15px",textTransform:"capitalize"}}><p style={{color:"black"}}>
                            <strong>{userfirstname+" "+usersurname}</strong></p>
                            <div style={{marginLeft:"auto",fontSize:"13px",marginRight:"10px",color:"#7D7D7D"}}><span>{calculatedate(date).time + " " + calculatedate(date).express + " Önce"}</span></div>
                        </div>           
                    </div>
                </Profilediv>
           }

           <SecondPart foruser={foruser}>
               {
                   iscomment || draft ? null : 

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
                                        <p style={{textAlign:"left",wordBreak:"break-word",marginTop:isMainparent ? "0px" : "20px"}}>{commenteditvalue}</p> 
                                     </div>
                                     
                                }
        
                            </Contentdiv>   
                            : 

                            !draft ?

                            <Contentdiv iscomment={iscomment}>
                                <h3 style={{marginBottom:"10px",color:"#A70909"}}>{title}</h3>
                                <Link href="/content/[id]" as={`/content/${postId}`}>
                                    <p style={{textAlign:"left",wordBreak:"break-word",cursor:"pointer"}}>While the Crypto Professors may set specific requirements for some....</p> 
                                </Link>
                            </Contentdiv>

                            : null 
                    }
                      
                    <Toolbar foruser={foruser}>
                        {
                           !iscomment && 
                           (<İconholder howercolor="green" style={{flex:1}}>
                                <Icons  howercolor="0, 255, 0, 0.2" ismarked={elements.reshow.ismarked} animation={elements.reshow.animation} color={"green"}  onClick={()=>Countplus("reshow")}  className="fas fa-retweet fa-sm"></Icons>
                                <Spanfor onClick={()=>showwindow(elements["reshow"].array,"Reshow")}>{elements.reshow.number}</Spanfor>
                           </İconholder>)
                        }
                        <İconholder howercolor="red" style={{flex:1}}>
                            <Icons  howercolor="255, 0, 0,0.2" ismarked={elements.Like.ismarked} animation={elements.Like.animation} color={"#C72121"}  onClick={()=>Countplus("Like")} className="fas fa-heart fa-sm"></Icons>
                            <Spanfor  onClick={()=>showwindow(elements["Like"].array,"Like")} >{elements.Like.number}</Spanfor>
                        </İconholder>
                        <İconholder style={{flex:1}}>
                            {
                                iscomment ? 
                                
                                <AddComment onClick={()=>setcommentanswer(!commentanswer)}  style={{color:"grey",cursor:"pointer"}}/>

                                :

                                <Icons className="fas fa-comment-alt fa-sm"></Icons>
                            }
                            <span style={{marginLeft:"5px",color:""}}>{comment.length}</span>
                        </İconholder>
                        <İconholder style={{flex:4,display:"flex",justifyContent:"flex-end",color:"grey"}}>
                            <Icons  ismarked={elements.Readlater.ismarked} animation={elements.Readlater.animation} color={"black"} onClick={()=>Countplus("Readlater")}  className="fas fa-bookmark"></Icons>
                        </İconholder>  
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
