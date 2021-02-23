import React,{useState} from 'react'
import styled from "styled-components";

const Outsidediv=styled.div`

cursor:pointer;
position:relative;
display:flex;
margin-bottom:15px;
width:650px;
height:150px;
background-color:lightgrey;
`
const Imagediv=styled.div`
padding:5px;
`
const Imageholder=styled.div`
flex:1;
`
const Contentholder=styled.div`
flex:2;
display:flex;
flex-direction:column;
background-color:lightgrey;
justify-content:space-between;
`
const Contentdiv=styled.div`
padding:10px;

`
const Toolbar=styled.div`
padding:5px;
display:flex;

`

const Img=styled.img`
width:100%;
height:140px;
object-fit:cover;

`

const İconholder=styled.div`
margin-left:10px;
display:flex;
align-items:center;
`

const Profilediv=styled.div`
position:absolute;
top:0px;
width:100%;
height:50px;
transition:all 0.3s;
background: linear-gradient(rgba(0,0,0,0.9),rgb(100,100,100,0.0));
opacity:${({active})=>active ? "1" : "0"}
`

const Porfileimage=styled.div`
width:40px;
height:40px;
background-color:white;
border-radius:50%;
background-image:url(${({profile})=> profile});
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

export default function Contentcard({profileimage,titleimage,title,subtitle,username,usersurname,date,comment,retweet,like,showwindow}){
    const[active,setactive]=useState(false);
    return (
       <Outsidediv onMouseLeave={()=>setactive(false)} onMouseOver={()=>setactive(true)}>
           <Profilediv active={active}>
               <div style={{display:'flex',alignItems:"center",height:"100%",marginLeft:"10px"}}>
                  <Porfileimage profile={profileimage}></Porfileimage>
                  <div style={{marginLeft:"10px"}}><p style={{color:"white"}}>{username+" "+usersurname}</p></div>
                  <div style={{marginLeft:"auto",marginRight:"10px",color:"white"}}><span>{date}</span></div>
               </div>
           </Profilediv>
           <Imageholder>
               <Imagediv>
                    <Img src={titleimage}></Img>
               </Imagediv>
           </Imageholder>
           <Contentholder>
               <Contentdiv>
                  <h3 style={{marginBottom:"10px",paddingTop:"7px",color:"#A70909"}}>{title}</h3>
                  <p>{subtitle}</p> 
               </Contentdiv>
               <div></div>
               <Toolbar>
                 <İconholder onClick={()=>showwindow(retweet)} style={{flex:1}}><i className="fas fa-retweet fa-sm"></i><span style={{marginLeft:"5px"}}>{retweet.length}</span></İconholder>
                 <İconholder onClick={()=>showwindow(like)} style={{flex:1}}><i  style={{color:"black"}} className="fas fa-heart fa-sm"></i><span style={{marginLeft:"5px",color:""}}>{like.length}</span></İconholder>
                 <İconholder style={{flex:1}}><i  style={{color:"black"}} className="fas fa-comment-alt fa-sm"></i><span style={{marginLeft:"5px",color:""}}>{comment.length}</span></İconholder>
                 <İconholder style={{flex:4,display:"flex",justifyContent:"flex-end",color:"grey"}}><i className="fas fa-bookmark"></i></İconholder>  
               </Toolbar>
           </Contentholder>
       </Outsidediv>
    )
}
