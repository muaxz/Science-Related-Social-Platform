import React,{useState,useEffect,useContext} from 'react'
import styled,{keyframes} from "styled-components";
import {createusercontext} from "../../context/Usercontext";
import Link from "next/link";



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
margin-bottom:15px;
width:100%;
background-color:white;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
&: hover{
    box-shadow: 0 3px 3px rgba(52, 213, 203,0.2);
}
`
const Imagediv=styled.div`

padding-left:5px;

`
const Imageholder=styled.div`
flex:1;
`
const Contentholder=styled.div`
flex:2;
display:flex;
flex-direction:column;
background-color:white;

`
const Contentdiv=styled.div`
padding-left:15px;
padding-right:15px;
flex:1;
`
const Toolbar=styled.div`
display:flex;
padding-left:15px;
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
height:40px;
transition:all 0.3s;
`

const Porfileimage=styled.div`
width:30px;
height:30px;
cursor:pointer;
background-color:white;
border-radius:50%;
background-image:url(${({profile})=> profile});
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const Icons=styled.i`
font-size:16px;
cursor:pointer;
color:${({ismarked,color})=>ismarked ? color : "grey" };
animation-name:${({ismarked})=>ismarked ? Likeanimaton : ""};
animation-duration:0.08s;
`

const Infocard=styled.div`

position:absolute;
top:0px;
right:0px;
padding:15px;
width:430px;
color:white;
height:150px;
background-color:grey;
z-index:200;
transition:all 0.3s;
`

const Labeloftheinfo=styled.div`
font-size:13px;
width:200px;
padding:5px;
text-align:center;
border-radius:10px;
`

//içerik sayısı,takipçi sayısı,
export default function Contentcard({profileimage,content,titleimage,title,subtitle,username,usersurname,date,comment,retweet,like,showwindow,createrelation,postId}){
   
    const[elements,setelements]=useState({
        like:{
            number:like.length,
            ismarked:false,
        },
        retweet:{
            number:retweet.length,
            ismarked:false
        },
        readlater:{
            ismarked:false,
            number:0,
        }
    });
    const[active,setactive]=useState(false);
    const {userdata} = useContext(createusercontext);

    useEffect(() =>{
       /*
       like.foreach((user)=>{
         if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
            setlike(true);
         }
       })
       */
    },[])
    
    const Countplus=(elementtype)=>{

        const currentelements={...elements};
        console.log("burada");
       
        if(currentelements[elementtype].ismarked==false){
            console.log("burada");
            currentelements[elementtype].ismarked=true;
            currentelements[elementtype].number= currentelements[elementtype].number+1;
        }
        else{

            currentelements[elementtype].ismarked=false;
            currentelements[elementtype].number= currentelements[elementtype].number-1;
        }

        setelements(currentelements);
       
    }

    return (
       <Outsidediv onMouseLeave={()=>setactive(false)} onMouseOver={()=>setactive(true)}>
           <Profilediv>
               <div style={{display:'flex',alignItems:"center",height:"100%",marginLeft:"5px"}}>
                  <Porfileimage profile={profileimage}></Porfileimage>
                  <div style={{marginLeft:"10px",fontSize:"15px"}}><p style={{color:"black"}}>{username+" "+usersurname}</p></div>
                  <div style={{marginLeft:"auto",fontSize:"13px",marginRight:"10px",color:"black"}}><span>{date}</span></div>
               </div>
           </Profilediv>
           <div style={{display:"flex"}}>
                <Imageholder>
                    <Imagediv>
                            <Img src={titleimage}></Img>
                    </Imagediv>
                </Imageholder>
                <Contentholder>
                    <Contentdiv>
                        <h3 style={{marginBottom:"10px",color:"#A70909"}}>{title}</h3>
                        <Link href="/content/[id]" as={`/content/${postId}`}>
                            <p style={{textAlign:"left",wordBreak:"bre",cursor:"pointer"}}>While the Crypto Professors may set specific requirements for some of their homework tasks we would...</p> 
                        </Link>
                    </Contentdiv>    
                    <Toolbar>
                        <İconholder style={{flex:1}}>
                            <Icons  ismarked={elements.retweet.ismarked} color={"green"}  onClick={()=>Countplus("retweet")}  className="fas fa-retweet fa-sm"></Icons><span   onClick={()=>showwindow(retweet)} style={{marginLeft:"5px"}}>{elements.retweet.number}</span>
                        </İconholder>
                        <İconholder style={{flex:1}}>
                            <Icons  ismarked={elements.like.ismarked} color={"#C72121"}  onClick={()=>Countplus("like")} className="fas fa-heart fa-sm"></Icons><span  onClick={()=>showwindow(like)} style={{marginLeft:"5px"}}>{elements.like.number}</span>
                        </İconholder>
                        <İconholder style={{flex:1}}>
                            <Icons className="fas fa-comment-alt fa-sm"></Icons><span style={{marginLeft:"5px",color:""}}>{comment.length}</span>
                        </İconholder>
                        <İconholder style={{flex:4,display:"flex",justifyContent:"flex-end",color:"grey"}}>
                            <Icons  ismarked={elements.readlater.ismarked} color={"black"} onClick={()=>Countplus("readlater")}  className="fas fa-bookmark"></Icons>
                        </İconholder>  
                    </Toolbar>
                </Contentholder>
           </div>
       </Outsidediv>
    )
}
