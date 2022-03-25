import React,{useRef,useState,useContext,useEffect} from 'react'
import styled from 'styled-components';
import {Porfileimage} from "../../../styledcomponents/Globalstyles";
import Icon from "../../../UI/Icon";
import Link from "next/link";
import {createusercontext} from "../../../../context/Usercontext";



const ExteriorDiv=styled.div`
position:fixed;
top:60px;
left:0;
height:100vh;
z-index:150;
background-color:#11101d;
box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
transition:width 0.3s;
width:${({active})=>active ? "200px" : "60px"};
@media (max-width:940px){
    display:none;
}
`
const InnerDiv=styled.div`
display:flex;
padding:5px;
flex-direction:column;
align-items:center;
height:100%;
overflow:hidden;
&:hover {
    overflow:visible;
}
`

const ImageDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const NavigationDiv=styled.div`
background-coloyor:yellow;
margin-top:5px;
width:96%;
`

const Rightsidedesc = styled.span`
position:absolute;
text-align:center;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
right:-160px;
top:-10px;
width:140px;
opacity:0;
transition-duration:0.2s;
border-radius:9px;
color:black;
background-color:white;
font-size:16px;
padding:10px;
pointer-events:none;
`
const Spanfordesc = styled.span`
transition-duration:${({leftbaractive})=>leftbaractive ? "0.5s" : "0s"};
margin-left:10px;
font-size:15px;
color:white;
opacity:${({leftbaractive})=>leftbaractive ? "1" : "0"}
`

const Li = styled.li`
position:relative;
list-style-type:none;
margin-top:10px;
display:flex;
width:100%;
border-radius:5px;
align-items:center;
padding:7px;
&:hover {
    background-color:rgba(255, 255, 255, 0.2);
    cursor:pointer; 
}

&:hover ${Rightsidedesc}{
    opacity:${({leftbaractive})=>leftbaractive ? "0" : "1"};
    top:5px;
}

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

const Lefttoolbar=({makeactive,myactive})=>{
    
    const {userdata,logged,Userrole}=useContext(createusercontext);
    const firstlist = useRef([{icon:"fas fa-bookmark",desc:"Kaydedilenler",path:`saved`},{icon:"fas fa-thumbs-up",desc:"Beğenilenler",path:`liked`}])
    const secondlist = useRef([{icon:"fas fa-edit",desc:"Gönderilerim",path:"/gönderiler"},{icon:"fas fa-pencil-ruler",desc:"Taslaklar",path:`Drafts`}])
    const thirdlist = useRef([{icon:"fa-solid fa-flag",desc:"Raporlar",path:`reportcontrol`},{icon:"fa-solid fa-list-check",desc:"Gonderi Kontrol",path:`postcontrol`}])
    
    

    return (
        <div>
            {

            logged ?

            <ExteriorDiv active={myactive}>
                <InnerDiv>
                    {/*  <Closeopen>
                    <i style={{color:"black"}} className="far fa-times-circle fa-lg"></i>
                </Closeopen>*/}
                <ImageDiv>
                <Icon activefunc={()=>{makeactive(!myactive)}} className="fas fa-angle-double-right" Iconconfig={{width:"35px",height:"35px",lineheight:"35px",color:"white",rotate:myactive ? true : undefined}}></Icon>
                    <div style={{paddingBottom:"15px"}}>
                        <Link href={userdata.UserId && {
                            pathname:`/profile/${userdata.UserId}`,
                            query:{name:"Post"}
                            }}>
                        <Porfileimage profile={"/car.jpg"}  width={myactive ? "80px" : "50px"} height={myactive ? "80px" : "50px"}/>
                        </Link>
                        <Link href={userdata.UserId && {
                            pathname:`/profile/${userdata.UserId}`,
                            query:{name:"Post"}
                            }}>
                        <div style={{marginTop:"10px",color:"#293241",textAlign:"center"}}><span style={{color:"white"}}>{myactive ? userdata.Username : "..."}</span></div>
                        </Link>
                    </div>     
                </ImageDiv>
                <NavigationDiv>
                    <hr></hr>
                        <ul style={{width:"100%",padding:"0px",display:"flex",flexDirection:"column",alignItems:myactive ? "flex-start" : "center"}}>
                            {firstlist.current.map((item)=>(
                                <Link href={`/[userıd]/${item.path}`} as={`/${userdata.UserId}/${item.path}`}>
                                    <Li className="getli" leftbaractive={myactive}>
                                        <Icon className={item.icon} Iconconfig={{width:myactive ? "31px" : "35px",height:myactive ? "31px" : "35px",lineheight:myactive ? "31px" : "35px",backcolor:"#F7FAFF",color:"black"}}></Icon>   
                                        <Spanfordesc    leftbaractive={myactive}>{item.desc}</Spanfordesc> 
                                        <Rightsidedesc  leftbaractive={myactive}>{item.desc}</Rightsidedesc>
                                    </Li>
                                </Link>            
                            ))}
                        
                        </ul>
                </NavigationDiv>
                <NavigationDiv>     
                    <hr></hr>
                        <ul style={{width:"100%",padding:"0px",display:"flex",flexDirection:"column",alignItems:myactive ? "flex-start" : "center"}}>
                            {secondlist.current.map((item)=>(
                                <Link href="/[stuff]" as={`${item.path}`}>
                                    <Li leftbaractive={myactive}>
                                        <Icon className={item.icon} Iconconfig={{width:myactive ? "31px" : "35px",height:myactive ? "31px" : "35px",lineheight:myactive ? "31px" : "35px",backcolor:"#F7FAFF",color:"black"}}></Icon>   
                                        <Spanfordesc  leftbaractive={myactive}>{item.desc}</Spanfordesc> 
                                        <Rightsidedesc leftbaractive={myactive}>{item.desc}</Rightsidedesc>
                                    </Li>
                                </Link>    
                            ))}        
                        </ul>
                </NavigationDiv>
                <NavigationDiv>    
                  <hr></hr>
                    {
                        userdata.Userrole == "Mod" ? 
                        (<ul style={{width:"100%",display:"flex",padding:"0px",flexDirection:"column",alignItems:myactive ? "flex-start" : "center"}}>
                            {thirdlist.current.map((item)=>(
                                <Link href={`/${item.path}`}> 
                                    <Li leftbaractive={myactive}>
                                        <Icon className={item.icon} Iconconfig={{width:myactive ? "31px" : "35px",height:myactive ? "31px" : "35px",lineheight:myactive ? "31px" : "35px",backcolor:"#F7FAFF",color:"black"}}></Icon>  
                                        <span style={{position:"absolute",fontSize:"12px",top:"-5px",left:"5px",width:"20px",display:"block",height:"20px",textAlign:"center",lineHeight:"15px",backgroundColor:"#d90429",color:"white",borderRadius:"50%",border:"2px solid #11101d"}}>14</span>
                                        <Spanfordesc  leftbaractive={myactive}>{item.desc}</Spanfordesc> 
                                        <Rightsidedesc >{item.desc}</Rightsidedesc>
                                    </Li>
                                </Link>
                            ))}        
                        </ul>)
                    : null
                    } 
                
                </NavigationDiv>
                </InnerDiv>
            </ExteriorDiv>

            : null
            
            }
        </div>
    )
}


export default Lefttoolbar;
