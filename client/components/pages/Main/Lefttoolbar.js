import React,{useRef,useState} from 'react'
import styled from 'styled-components';
import {Porfileimage} from "../../styledcomponents/button";
import Icon from "../../UI/Icon";



const ExteriorDiv=styled.div`
position:fixed;
top:0;
overflow:hidden;
left:0;
height:100vh;
z-index:150;
background-color:#3B4058;
transition:all 0.2s;
width:${({active})=>active ? "200px" : "70px"}
`
const InnerDiv=styled.div`
display:flex;
padding:5px;
flex-direction:column;
align-items:center;
height:100%;
`

const ImageDiv=styled.div`
display:flex;
border-bottom:1px solid white;
flex-direction:column;
align-items:center;
`

const NavigationDiv=styled.div`
background-coloyor:yellow;
margin-top:30px;
width:96%;
`
const Li=styled.li`
list-style-type:none;
margin-top:20px;
display:flex;
align-items:center;
`

//const Icon=styled.i`
//color:#C70039;
//`
const Closeopen=styled.div`
width:100%;
height:30px;
padding:10px;
text-align:right;
`

const Lefttoolbar=()=>{
    const {current}=useRef([{icon:"fas fa-bookmark",desc:"Kaydedilenler"},{icon:"fas fa-thumbs-up",desc:"Beğenilenler"},{icon:"fas fa-retweet",desc:"Retweet"}])
    const [open,setopen]=useState(false);
    return (
        <ExteriorDiv active={open}>
            <InnerDiv>
                {/*  <Closeopen>
                 <i style={{color:"black"}} className="far fa-times-circle fa-lg"></i>
               </Closeopen>*/}
               <ImageDiv>
               <Icon activefunc={()=>setopen(!open)} className="fas fa-angle-double-right" Iconconfig={{width:"35px",height:"35px",lineheight:"35px",color:"white",rotate:open ? true : false}}></Icon>
                <div style={{paddingBottom:"15px"}}>
                   <Porfileimage profile={"/car.jpg"}  width={open ? "80px" : "50px"} height={open ? "80px" : "50px"}/>
                   <div style={{marginTop:"10px",color:"white"}}><span style={{display:open ? "block" : "none"}}>Emre Özer</span></div>
                </div>      
               </ImageDiv>
               <NavigationDiv>
                    <ul style={{width:"100%",padding:"0px",display:"flex",flexDirection:"column",alignItems:open ? "flex-start" : "center"}}>
                        {current.map((item)=>(
                             <Li>
                                 <Icon className={item.icon} Iconconfig={{width:"35px",height:"35px",lineheight:"35px",backcolor:"#CFCFCF",color:"#E84040"}}></Icon>   
                                 <span style={{display:open ? "block" : "none",fontSize:"14px",marginLeft:"10px"}}>{item.desc}</span> 
                            </Li>
                             
                        ))}
                       
                    </ul>
               </NavigationDiv>
            </InnerDiv>
        </ExteriorDiv>
    )
}


export default Lefttoolbar;
